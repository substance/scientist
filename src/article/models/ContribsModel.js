import entityRenderers from '../../entities/entityRenderers'
import DefaultModel from './DefaultModel'

/*
  A model for holding authors and editors information.
*/
export default class ContribsModel extends DefaultModel {
  constructor(node, context) {
    super(node, context)
  }

  addAuthor(author) {
    const editorSession = this.context.editorSession
    const authorId = this._addEntity(author, 'person')
    editorSession.transaction((tx, args) => {
      const contribEl = tx.createElement('contrib').attr('rid', authorId)
      const authorsContribGroup = tx.find('contrib-group[content-type=author]')
      authorsContribGroup.append(contribEl)
      return args
    })
    return authorId
  }

  getAuthor(authorId) {
    return this._getEntity(authorId)
  }

  getAuthors() {
    let authorsContribGroup = this._node.find('contrib-group[content-type=author]')
    let contribIds = authorsContribGroup.findAll('contrib[contrib-type=person]').map(contrib => contrib.getAttribute('rid'))
    return contribIds.map(contribId => this._getEntity(contribId))
  }

  updateAuthor(authorId, data) {
    return this._updateEntity(authorId, data)
  }

  deleteAuthor(authorId) {
    const editorSession = this.context.editorSession
    const node = this._deleteEntity(authorId)
    editorSession.transaction((tx, args) => {
      const authorsContribGroup = this._node.find('contrib-group[content-type=author]')
      const contrib = authorsContribGroup.find(`contrib[rid=${authorId}]`)
      contrib.parentNode.removeChild(contrib)
      tx.delete(contrib.id)
      return args
    })
    return node
  }

  getGroups() {
    let authorsContribGroup = this._node.find('contrib-group[content-type=author]')
    let contribIds = authorsContribGroup.findAll('contrib[contrib-type=group]').map(contrib => contrib.getAttribute('rid'))
    return contribIds.map(contribId => this._getEntity(contribId))
  }

  addAffiliation(affiliation) {
    const editorSession = this.context.editorSession
    const affId = this._addEntity(affiliation, 'organisation')
    editorSession.transaction((tx, args) => {
      const affEl = tx.createElement('aff').attr('rid', affId)
      const affGroup = tx.find('aff-group')
      affGroup.append(affEl)
      return args
    })
    return affId
  }

  getAffiliation(affId) {
    return this._getEntity(affId)
  }

  getAffiliations() {
    const authors = this.getAuthors()
    const affIds = authors.reduce((affs, author) => {
      const members = author.members || []
      const memberAffs = members.reduce((a,m) => {
        return a.concat(m.affiliations)
      }, [])
      let affsList = new Array().concat(author.affiliations, memberAffs)
      if(author.presentAffiliation) {
        affsList = affsList.concat(author.presentAffiliation)
      }
      affsList.forEach(a => {
        if(affs.indexOf(a) < 0) {
          affs.push(a)
        }
      })
      return affs
    }, [])
    return affIds.reduce((acc, affId) => {
      const entity = this._getEntity(affId)
      if(entity) acc.push(entity)
      return acc
    }, [])
  }

  getOrganisations() {
    let affGroup = this._node.find('aff-group')
    let affIds = affGroup.findAll('aff').map(aff => aff.getAttribute('rid'))
    return affIds.map(affId => this._getEntity(affId))
  }

  updateAffiliation(affId, data) {
    return this._updateEntity(affId, data)
  }

  deleteAffiliation(affId) {
    const editorSession = this.context.editorSession
    const node = this._deleteEntity(affId)
    editorSession.transaction((tx, args) => {
      const affGroup = tx.find('aff-group')
      const affEl = affGroup.find(`aff[rid=${affId}]`)
      affEl.parentNode.removeChild(affEl)
      tx.delete(affEl.id)
      return args
    })
    return node
  }

  addAward(award) {
    const editorSession = this.context.editorSession
    const awardId = this._addEntity(award, 'award')
    editorSession.transaction((tx, args) => {
      const awardGroupEl = tx.createElement('award-group').attr('rid', awardId)
      const fundingGroupEl = tx.find('funding-group')
      fundingGroupEl.append(awardGroupEl)
      return args
    })
    return awardId
  }

  getAward(awardId) {
    return this._getEntity(awardId)
  }

  getAwards() {
    let fundingGroup = this._node.find('funding-group')
    let awardIds = fundingGroup.findAll('award-group').map(awardGroup => awardGroup.getAttribute('rid'))
    return awardIds.map(awardId => this._getEntity(awardId))
  }

  updateAward(awardId, data) {
    return this._updateEntity(awardId, data)
  }

  deleteAward(awardId) {
    const editorSession = this.context.editorSession
    const node = this._deleteEntity(awardId)
    editorSession.transaction((tx, args) => {
      const fundingGroup = tx.find('funding-group')
      const awardGroupEl = fundingGroup.find(`award-group[rid=${awardId}]`)
      awardGroupEl.parentNode.removeChild(awardGroupEl)
      tx.delete(awardGroupEl.id)
      return args
    })
    return node
  }

  /*
    Utility method to render a contrib object
  */
  renderContrib(contrib) {
    return entityRenderers[contrib.type](contrib.id, this.context.pubMetaDb)
  }
}
