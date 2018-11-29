import { test } from 'substance-test'
import { DefaultDOMElement } from 'substance'
import {
  InternalArticleDocument, InternalArticleSchema,
  createJatsImporter, createJatsExporter, createEmptyJATS
} from '../index'

const DispFormula = `
<disp-formula id="disp-formula-3">
<label>(1)</label>
<tex-math><![CDATA[sqrt(13)]]></tex-math>
</disp-formula>
`

const DispFormulaWithoutCDATA = `
<disp-formula id="disp-formula-3">
  <label>(1)</label>
  <tex-math>sqrt(13)</tex-math>
</disp-formula>
`

const TexMathWithId = `<tex-math id="tex-math-1">sqrt(13)</tex-math>`

test('DispFormulaConverter: importing', t => {
  let el = DefaultDOMElement.parseSnippet(DispFormula.trim(), 'xml')
  let DispFormulaNode = _importElement(el)
  t.equal(DispFormulaNode.id, 'disp-formula-3', 'id should be preserved')
  t.equal(DispFormulaNode.label, '(1)', 'label should be preserved')
  t.equal(DispFormulaNode.content, 'sqrt(13)', 'content should contain tex, but without CDATA section')
  t.end()
})

test('DispFormulaConverter: exporting', function (t) {
  let el = DefaultDOMElement.parseSnippet(DispFormula.trim(), 'xml')
  let DispFormulaNode = _importElement(el)
  let DispFormulaEl = _exportElement(DispFormulaNode)
  t.equal(DispFormulaEl.getOuterHTML(), DispFormula.replace(/\n|\r/g, ''), 'exported element should be equal to imported')
  t.end()
})

test('DispFormulaConverter: exported tex-math should always contain CDATA', function (t) {
  let el = DefaultDOMElement.parseSnippet(DispFormulaWithoutCDATA.trim(), 'xml')
  let DispFormulaNode = _importElement(el)
  let DispFormulaEl = _exportElement(DispFormulaNode)
  let TexMathEl = DispFormulaEl.find('tex-math')
  t.equal(TexMathEl.getChildCount(), 1, 'tex-math should contain one element')
  t.equal(TexMathEl.getFirstChild().nodeType, 'cdata', 'tex-math should contain cdata element')
  t.end()
})

test('TexMathConverter: exported element should not have id', function (t) {
  let el = DefaultDOMElement.parseSnippet(TexMathWithId.trim(), 'xml')
  let TexMathNode = _importElement(el)
  let TexMathEl = _exportElement(TexMathNode)
  t.isNil(TexMathEl.getAttribute('id'), 'tex-math should not contain id attribute')
  t.end()
})

function _importElement (el) {
  let doc = InternalArticleDocument.createEmptyArticle(InternalArticleSchema)
  let importer = createJatsImporter(doc)
  return importer.convertElement(el)
}

function _exportElement (el) {
  let jats = createEmptyJATS()
  let exporter = createJatsExporter(jats, el.getDocument())
  return exporter.convertNode(el)
}