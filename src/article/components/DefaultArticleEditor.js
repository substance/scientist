import { $$ } from 'substance'
import BasicArticleEditor from './BasicArticleEditor'
import ManuscriptTOC from './ManuscriptTOC'
import ManuscriptComponent from './ManuscriptComponent'

export default class DefaultArticleEditor extends BasicArticleEditor {
  _initialize (props) {
    super._initialize(props)

    this._model = this.context.api.getArticleModel()

    // initialize all managers
    // TODO: do we really want to start all of them instantly?
    ;[
      'reference-manager', 'figure-manager', 'table-manager',
      'footnote-manager', 'equation-manager', 'file-manager'
    ].forEach(name => this.context.config.getServiceSync(name, this.context))
  }

  _getClass () {
    // TODO: at some point I have renamed this class to 'DefaultArticleEditor'
    // to avoid breaking tests and styles, I left the old class still there
    return 'sc-default-article-editor sc-manuscript-editor sc-manuscript-view'
  }

  _renderTOC () {
    return $$(ManuscriptTOC, { model: this._model }).ref('toc')
  }

  _renderManuscript () {
    return $$(ManuscriptComponent, {
      model: this._model,
      disabled: this.props.disabled
    }).ref('manuscript')
  }
}
