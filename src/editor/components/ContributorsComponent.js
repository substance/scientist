import { NodeComponent, FontAwesomeIcon as Icon } from 'substance'
import MetadataSection from './MetadataSection'

/*
  Edit affiliations for a publication in this MetadataSection
*/
export default class ContributorsComponent extends NodeComponent {

  getInitialState() {
    return {
      expanded: true
    }
  }

  render($$) {
    const contribGroup = this.props.node
    const doc = contribGroup.getDocument()

    let el = $$('div').addClass('sc-affiliations')

    el.append(
      $$(MetadataSection, {
        label: 'Contributors',
        expanded: this.state.expanded
      }).on('click', this._toggle)
    )

    if (this.state.expanded) {
      let affs = doc.findAll('article-meta > aff-group > aff')
      contribGroup.getChildren().forEach((contrib) => {
        el.append(
          $$('div').addClass('se-metadata-contributor').append(
            this._renderName($$, contrib),
            this._renderAffiliations($$, contrib, affs),
            $$(Icon, {icon: 'fa-remove'})
              .addClass('se-remove-contributor')
              .on('click', this._removeContributor.bind(this, contrib.id))
          )
        )
      })
      el.append(
        $$('button').addClass('se-metadata-contributor-add')
          .append('Add Contributor')
          .on('click', this._addContributor)
      )
    }
    return el
  }

  _renderName($$, contrib) {
    let TextPropertyEditor = this.getComponent('text-property-editor')
    let stringContrib = contrib.find('string-contrib')
    return $$('div').addClass('se-name').append(
      $$('div').addClass('se-label').append('Name'),
      $$(TextPropertyEditor, {
        path: stringContrib.getTextPath(),
        disabled: this.props.disabled
      }).ref(stringContrib.id).addClass('se-text-input')
    )
  }

  _renderAffiliations($$, contrib, affs) {
    return $$('div').addClass('se-affiliations').append(
      $$('div').addClass('se-label').append('Affiliations'),
      this._renderAffChoices($$, contrib, affs)
    )
  }

  _renderAffChoices($$, contrib, affs) {
    let props = {
      options: [],
      selectedOptions: this._getAffReferences(contrib),
      maxItems: 2
    }

    affs.forEach((aff) => {
      let stringAff = aff.find('string-aff')
      props.options.push({id: aff.id, label: stringAff.getText()})
    })

    let MultiSelect = this.getComponent('multi-select')
    return $$(MultiSelect, props)
      .ref(contrib.id + '_affs')
      .on('change', this._updateAffiliations.bind(this, contrib.id))
  }

  _getAffReferences(contrib) {
    let attrIds = contrib.getAttribute('aff-ids') || ''
    return attrIds.split(' ')
  }

  _toggle() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  _updateAffiliations(contribId) {
    const editorSession = this.context.editorSession
    let affSelector = this.refs[contribId + '_affs']
    let affIds = affSelector.getSelectedOptions()
    editorSession.transaction((doc) => {
      let contrib = doc.get(contribId)
      contrib.setAttribute('aff-ids', affIds.join(' '))
    })
  }

  _addContributor() {
    const nodeId = this.props.node.id
    const editorSession = this.context.editorSession
    editorSession.transaction((doc) => {
      let contribGroup = doc.get(nodeId)
      let contrib = doc.createElement('contrib').attr('aff-type', 'foo')
      contrib.append(
        doc.createElement('string-contrib')
      )
      contribGroup.append(contrib)
    })
  }

  _removeContributor(contribId) {
    const contribGroup = this.props.node
    const editorSession = this.context.editorSession
    let contribIndex = contribGroup.childNodes.indexOf(contribId)
    contribGroup.childNodes.splice(contribIndex, 1)
    editorSession.transaction((doc) => {
      doc.delete(contribId)
    })
    this.rerender()
  }

}
