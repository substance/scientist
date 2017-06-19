import { Component } from 'substance'

export default class MetadataComponent extends Component {

  render($$) {
    const ScrollPane = this.getComponent('scroll-pane')
    const doc = this.context.editorSession.getDocument()
    const articleMeta = doc.find('article-meta')
    let el = $$('div').addClass('sc-metadata')

    let scrollPane = $$(ScrollPane).ref('metadataScroll')

    scrollPane.append($$(this.getComponent('article-info'), { node: articleMeta }))

    const history = articleMeta.findChild('history')
    if (history) {
      scrollPane.append($$(this.getComponent('pub-history'), { node: history }))
    }

    const contribGroup = articleMeta.findChild('contrib-group')
    if (contribGroup) {
      scrollPane.append($$(this.getComponent('contributors'), { node: contribGroup }))
    }

    const affGroup = articleMeta.findChild('aff-group')
    if (affGroup) {
      scrollPane.append($$(this.getComponent('affiliations'), { node: affGroup }))
    }

    el.append(scrollPane)
    return el
  }
}