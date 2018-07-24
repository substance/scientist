import { Component } from 'substance'

export default class SelectInput extends Component {
  render($$) {
    const value = this.props.value
    const options = this.props.availableOptions

    const el = $$('div').addClass('sc-select-input')
    const selectEl = $$('select').addClass('se-select')
      .ref('input')
      .on('change', this._onChange)

  
    const defaultOpt = $$('option').attr({value: false})
      .append(this.getLabel('select-default-value'))
    
    if(!value) {
      defaultOpt.attr({selected: 'selected'})
    }

    selectEl.append(defaultOpt)

    options.forEach(opt => {
      const optEl = $$('option').attr({value: opt.id}).append(opt.text)
      if(opt.id === value) optEl.attr({selected: 'selected'})
      selectEl.append(optEl)
    })

    el.append(selectEl)

    if(this.props.warning) el.addClass('sm-warning')

    return el
  }

  _onChange() {
    const name = this.props.name
    const value = this._getValue()
    this.send('set-value', name, value)
  }

  _getValue() {
    const input = this.refs.input
    return input.val()
  }
}