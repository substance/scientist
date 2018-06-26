const b = require('substance-bundler')
const fs = require('fs')
const path = require('path')
const fork = require('substance-bundler/extensions/fork')
const vfs = require('substance-bundler/extensions/vfs')

const DIST = 'dist/'
const APPDIST = 'app-dist/'
const TMP = 'tmp/'
const RNG_SEARCH_DIRS = [
  path.join(__dirname, 'src', 'article')
]

const RNG_FILES = [
  'src/article/JATS-publishing.rng',
  'src/article/JATS-archiving.rng',
  'src/article/TextureArticle.rng',
  'src/article/InternalArticle.rng'
]

// Server configuration

const port = 4000 // TODO: make this configurable
b.setServerPort(port)
b.yargs.option('d', {
  type: 'string',
  alias: 'rootDir',
  describe: 'Root directory of served archives'
})
let argv = b.yargs.argv
if (argv.d) {
  const darServer = require('dar-server')
  const rootDir = argv.d
  const archiveDir = path.resolve(path.join(__dirname, rootDir))
  darServer.serve(b.server, {
    port,
    serverUrl: 'http://localhost:'+port,
    rootDir: archiveDir,
    apiUrl: '/archives'
  })
}
b.serve({ static: true, route: '/', folder: './dist' })

// Make Targets

b.task('clean', function() {
  b.rm(DIST)
  b.rm(TMP)
  b.rm(APPDIST)
}).describe('removes all generated files and folders.')

b.task('lib', ['clean', 'build:schema', 'build:assets', 'build:lib'])
.describe('builds the library bundle.')

b.task('browser', ['clean', 'build:schema', 'build:assets', 'build:browser'])
.describe('builds the browser bundle.')

b.task('publish', ['clean', 'build:schema', 'build:assets', 'build:lib', 'build:web'])
.describe('builds the release bundle (library + web).')

b.task('web', ['clean', 'build:schema', 'build:assets', 'build:browser', 'build:web'])
.describe('builds the web bundle (browser + web).')

b.task('app', ['clean', 'build:schema', 'build:assets', 'build:browser', 'build:app'])
.describe('builds the app bundle (electron app).')

b.task('test-nodejs', ['clean', 'build:schema', 'build:test-assets'])
.describe('prepares everything necessary to run tests in node.')

b.task('test-browser', ['clean', 'build:schema', 'build:browser', 'build:test-assets', 'build:test-browser'])
.describe('builds the test-suite for the browser.')

// an alias because in all our other projects it is named this way
b.task('test:browser', ['test-browser'])

b.task('default', ['publish'])
.describe('default: publish')

// spawns electron after build is ready
b.task('run-app', ['app'], () => {
  // Note: `await=false` is important, as otherwise bundler would await this to finish
  fork(b, require.resolve('electron/cli.js'), '.', { verbose: true, cwd: APPDIST, await: false })
})
.describe('runs the application in electron.')

// low-level make targets

b.task('schema:single-jats-file', _singleJATSFile)

b.task('schema:jats', () => {
  _compileSchema('JATS-publishing', RNG_FILES[0], RNG_SEARCH_DIRS, RNG_FILES.slice(0,1))
  _compileSchema('JATS-archiving', RNG_FILES[1], RNG_SEARCH_DIRS, RNG_FILES.slice(1,2))
})

b.task('schema:dar-article', () => {
  _compileSchema('TextureArticle', RNG_FILES[2], RNG_SEARCH_DIRS, RNG_FILES.slice(0,3))
})

b.task('schema:dar-manifest', () => {
  _compileSchema('Manifest', 'src/dar/Manifest.rng', [path.join(__dirname, 'src', 'dar')], [])
})

b.task('schema:texture-article', () => {
  _compileSchema('InternalArticle', RNG_FILES[3], RNG_SEARCH_DIRS, RNG_FILES.slice(0,4))
})

b.task('schema:debug', () => {
  _compileSchema('JATS-publishing', RNG_FILES[0], RNG_SEARCH_DIRS, RNG_FILES.slice(0,1), { debug: true })
  _compileSchema('JATS-archiving', RNG_FILES[1], RNG_SEARCH_DIRS, RNG_FILES.slice(1,2), { debug: true })
  _compileSchema('TextureArticle', RNG_FILES[2], RNG_SEARCH_DIRS, RNG_FILES.slice(0,3), { debug: true })
  _compileSchema('InternalArticle', RNG_FILES[3], RNG_SEARCH_DIRS, RNG_FILES.slice(0,4), { debug: true })
})

b.task('build:assets', function() {
  b.copy('./node_modules/font-awesome', DIST+'font-awesome')
  b.copy('./node_modules/katex/dist', DIST+'katex')
  b.copy('./node_modules/substance/dist', DIST+'substance/dist')
  b.css('texture.css', DIST+'texture.css')
  b.css('./node_modules/substance/substance-pagestyle.css', DIST+'texture-pagestyle.css')
  b.css('./node_modules/substance/substance-reset.css', DIST+'texture-reset.css')
})

b.task('build:schema', ['schema:jats', 'schema:dar-article', 'schema:texture-article', 'schema:dar-manifest'])

b.task('build:browser', () => {
  _buildLib(DIST, 'browser')
})

b.task('build:nodejs', () => {
  _buildLib(DIST, 'nodejs')
})

b.task('build:lib', () => {
  _buildLib(DIST, 'all')
})

b.task('build:cover', () => {
  _buildLib(TMP, 'cover')
})

b.task('build:app', () => {
  b.copy('app/index.html', APPDIST)
  b.copy('app/build-resources', APPDIST)
  b.copy('data', APPDIST)
  // FIXME: this command leads to an extra run when a  file is updated
  // .. instead copying the files explicitly for now
  // b.copy('dist', APPDIST+'lib/')
  b.copy('dist/font-awesome', APPDIST+'lib/')
  b.copy('dist/katex', APPDIST+'lib/')
  b.copy('dist/substance', APPDIST+'lib/')
  ;[
    'texture.js',
    'texture.css',
    'texture-pagestyle.css',
    'texture-reset.css'
  ].forEach(f => {
    b.copy(`dist/${f}`, APPDIST+'lib/')
    b.copy(`dist/${f}.map`, APPDIST+'lib/')
  })

  // TODO: maybe we could come up with an extension
  // that expands a source file using a given dict.
  b.custom('Creating application package.json...', {
    src: 'app/package.json.in',
    dest: APPDIST+'package.json',
    execute() {
      let { version } = require('./package.json')
      let tpl = fs.readFileSync('app/package.json.in', 'utf8')
      let out = tpl.replace('${version}', version)
      fs.writeFileSync(APPDIST+'package.json', out)
    }
  })
  b.js('app/main.js', {
    output: [{
      file: APPDIST+'main.js',
      format: 'cjs'
    }],
    external: ['electron', 'path', 'url']
  })
  b.js('app/app.js', {
    output: [{
      file: APPDIST+'app.js',
      format: 'umd',
      name: 'textureApp',
      globals: {
        'substance': 'window.substance',
        'substance-texture': 'window.texture',
        'katex': 'window.katex'
      }
    }],
    external: [ 'substance', 'substance-texture', 'katex' ]
  })
  // execute 'install-app-deps'
  fork(b, require.resolve('electron-builder/out/cli/cli.js'), 'install-app-deps', { verbose: true, cwd: APPDIST, await: true })
})

b.task('build:vfs', () => {
  vfs(b, {
    src: ['./data/**/*'],
    dest: DIST+'/vfs.js',
    format: 'umd', moduleName: 'vfs',
    rootDir: path.join(__dirname, 'data')
  })
})

b.task('build:web', ['build:vfs'], () => {
  b.copy('web/index.html', DIST)
  b.copy('web/reader.html', DIST)
  b.copy('web/forms.html', DIST)
  b.js('./web/editor.js', {
    output: [{
      file: DIST+'editor.js',
      format: 'umd',
      name: 'textureEditor',
      globals: {
        'substance': 'window.substance',
        'substance-texture': 'window.texture',
        'katex': 'window.katex'
      }
    }],
    external: ['substance', 'substance-texture', 'katex']
  })
  b.js('./web/reader.js', {
    output: [{
      file: DIST+'reader.js',
      format: 'umd',
      name: 'textureReader',
      globals: {
        'substance': 'window.substance',
        'substance-texture': 'window.texture',
        'katex': 'window.katex'
      }
    }],
    external: ['substance', 'substance-texture', 'katex']
  })
  b.js('./web/forms.js', {
    output: [{
      file: DIST+'forms.js',
      format: 'umd',
      name: 'textureForms',
      globals: {
        'substance': 'window.substance',
        'substance-texture': 'window.texture'
      }
    }],
    external: ['substance', 'substance-texture']
  })
  b.copy('./data', DIST+'data')
})

b.task('build:test-assets', ['build:vfs-es'], () => {
  vfs(b, {
    src: ['./test/fixture/**/*.xml'],
    dest: './tmp/test-vfs.js',
    format: 'es', moduleName: 'fixtures'
  })
})

b.task('build:test-browser', ['build:vfs', 'build:assets', 'build:test-assets'], () => {
  b.copy('test/index.html', 'dist/test/index.html')
  b.copy('node_modules/substance-test/dist/testsuite.js', 'dist/test/testsuite.js')
  b.copy('node_modules/substance-test/dist/test.css', 'dist/test/test.css')

  const INDEX_JS = path.join(__dirname, 'index.js')
  let globals = {
    'substance': 'substance',
    'substance-test': 'substanceTest',
    'katex': 'katex',
    'vfs': 'vfs'
  }
  globals[INDEX_JS] = 'texture'

  b.js('test/**/*.test.js', {
    output: [{
      file: 'dist/test/tests.js',
      format: 'umd',
      name: 'tests',
      globals
    }],
    external: [
      'substance', 'substance-test', INDEX_JS,
      'katex', 'vfs'
    ]
  })
})

b.task('build:vfs-es', () => {
  vfs(b, {
    src: ['./data/**/*'],
    dest: TMP+'/vfs.es.js',
    format: 'es',
    rootDir: path.join(__dirname, 'data')
  })
})

/* HELPERS */

function _buildLib(DEST, platform) {
  let targets = []
  const globals = {
    'substance': 'substance',
    'katex': 'katex',
    'vfs': 'window.vfs'
  }
  let istanbul
  if (platform === 'browser' || platform === 'all') {
    targets.push({
      file: DEST+'texture.js',
      format: 'umd',
      name: 'texture',
      sourcemapRoot: __dirname,
      sourcemapPrefix: 'texture',
      globals
    })
  }
  if (platform === 'nodejs' || platform === 'all') {
    targets.push({
      file: DEST+'texture.cjs.js',
      format: 'cjs',
      globals
    })
  }
  if (platform === 'es' || platform === 'all') {
    targets.push({
      file: DEST+'texture.es.js',
      format: 'es',
      globals
    })
  }
  b.js('./index.js', {
    output: targets,
    external: ['substance', 'katex', 'vfs'],
    istanbul
  })
}

function _compileSchema(name, src, searchDirs, deps, options = {} ) {
  const DEST = `tmp/${name}.data.js`
  const ISSUES = `tmp/${name}.issues.txt`
  const SCHEMA = `tmp/${name}.schema.md`
  const entry = path.basename(src)
  b.custom(`Compiling schema '${name}'...`, {
    src: [src].concat(deps),
    dest: DEST,
    execute() {
      const { compileRNG, checkSchema } = require('substance')
      const xmlSchema = compileRNG(fs, searchDirs, entry)
      b.writeFileSync(DEST, `export default ${JSON.stringify(xmlSchema)}`)
      b.writeFileSync(SCHEMA, xmlSchema.toMD())
      if (options.debug) {
        const issues = checkSchema(xmlSchema)
        const issuesData = [`${issues.length} issues:`, ''].concat(issues).join('\n')
        b.writeFileSync(ISSUES, issuesData)
      }
    }
  })
}

// we used this internally just to get a single-file version of
// the offficial JATS 1.1 rng data set
function _singleJATSFile() {
  [{
    RNG_DIR: 'data/jats/archiving',
    ENTRY: 'JATS-archive-oasis-article1-mathml3.rng',
    DEST: 'src/article/JATS-archiving.rng',
  },
  {
    RNG_DIR: 'data/jats/publishing',
    ENTRY: 'JATS-journalpublishing-oasis-article1-mathml3.rng',
    DEST: 'src/article/JATS-publishing.rng',
  }].forEach(({ RNG_DIR, ENTRY, DEST}) => {
    b.custom(`Pulling JATS spec into a single file...`, {
      src: [RNG_DIR+'/*.rng'],
      dest: DEST,
      execute() {
        const { loadRNG } = require('substance')
        let rng = loadRNG(fs, [RNG_DIR], ENTRY)
        // sort definitions by name
        let grammar = rng.find('grammar')
        let others = []
        let defines = []
        grammar.getChildren().forEach((child) => {
          if (child.tagName === 'define') {
            defines.push(child)
          } else {
            others.push(child)
          }
        })
        defines.sort((a,b) => {
          const aname = a.getAttribute('name').toLowerCase()
          const bname = b.getAttribute('name').toLowerCase()
          if (aname < bname) return -1
          if (bname < aname) return 1
          return 0
        })
        grammar.empty()
        defines.concat(others).forEach((el) => {
          grammar.appendChild('\n  ')
          grammar.appendChild(el)
        })
        let xml = rng.serialize()
        b.writeFileSync(DEST, xml)
      }
    })
  })
}
