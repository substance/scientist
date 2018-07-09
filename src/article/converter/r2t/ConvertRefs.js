import { ElementCitationConverter } from './EntityConverters'

/*
  We convert <ref> elements into entities and back
*/
export default class ConvertRef {
  import(dom, api) {
    let refs = dom.findAll('ref')
    const pubMetaDb = api.pubMetaDb

    refs.forEach(refEl => {
      
      let elementCitation = refEl.find('element-citation')
      if (!elementCitation) {
        api.error({
          msg: 'Could not find <element-citation> inside <ref>',
          el: refEl
        })
      } else {
        let entityId
        let pubType = elementCitation.attr('publication-type')
        let validTypes = ['journal', 'book', 'chapter', 'confproc', 'data', 'patent', 'newspaper', 'magazine', 'report', 'software', 'thesis', 'webpage']
        if (validTypes.includes(pubType)) {
          entityId = ElementCitationConverter.import(elementCitation, pubMetaDb, refEl.id)
        } else {
          console.error(`Publication type ${pubType} not found`)
          api.error({
            msg: `Publication type ${pubType} not found`,
            el: elementCitation
          })
        }
        refEl.attr('rid', entityId)
        refEl.empty()
      }
    })
  }

  export(dom, api) {
    let $$ = dom.createElement.bind(dom)
    let refList = dom.find('back > ref-list')
    const pubMetaDb = api.pubMetaDb
    const doc = api.doc
    const referenceManager = doc.referenceManager
    let bibliography = referenceManager.getBibliography()

    // Empty ref-list
    refList.empty()

    // Re-export refs according to computed order
    bibliography.forEach(refNode => {
      let entity = pubMetaDb.get(refNode.attr('rid'))
      let validTypes = ['journal-article', 'book', 'chapter', 'conference-paper', 'data-publication', 'patent', 'magazine-article', 'newspaper-article', 'report', 'software', 'thesis', 'webpage']
      let elementCitation
      if (validTypes.includes(entity.type)) {
        elementCitation = ElementCitationConverter.export($$, entity, pubMetaDb)
      } else {
        throw new Error('publication type not found.')
      }

      refList.append(
        dom.createElement('ref').attr('id', refNode.id).append(
          elementCitation
        )
      )
    })

  }
}
