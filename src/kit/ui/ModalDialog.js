import { Component, $$ } from 'substance'

/**
  ModalDialog component

  @class
  @component

  @prop {String} width 'small', 'medium', 'large' and 'full'

  @example

  ```js
  var form = $$(ModalDialog, {
    width: 'medium',
    textAlign: 'center'
  });
  ```
*/
export default class ModalDialog extends Component {
  getActionHandlers () {
    return {
      'close': this.close
    }
  }

  render () {
    let width = this.props.width || 'large'
    let el = $$('div').addClass(this._getClassName())
    if (this.props.width) {
      el.addClass('sm-width-' + width)
    }
    if (this.props.transparent) {
      el.addClass('sm-transparent-bg')
    }
    el.on('keydown', this._onKeydown)

    let verticalContainer = $$('div').addClass('se-vertical-container')
    let horizontalContainer = $$('div').addClass('se-horizontal-container')
    horizontalContainer.append(
      $$('div').addClass('se-horizontal-spacer'),
      this._renderModalBody(),
      $$('div').addClass('se-horizontal-spacer')
    )
    verticalContainer.append(
      $$('div').addClass('se-vertical-spacer'),
      horizontalContainer,
      $$('div').addClass('se-vertical-spacer')
    )
    el.append(verticalContainer)

    return el
  }

  _getClassName () {
    return 'sc-modal-dialog'
  }

  _renderModalBody () {
    const Button = this.getComponent('button')
    const closeButton = $$(Button, {
      icon: 'close'
    }).addClass('se-close-button')
      .on('click', this._onCloseButtonClick)
    let modalBody = $$('div').addClass('se-body').ref('body')
    // ATTENTION: it is not possible to set a ref on a component passed in as prop (different owner)
    modalBody.append(
      this.props.content.addClass('se-content')
    )
    modalBody.append(closeButton)
    return modalBody
  }

  _onKeydown (e) {
    e.stopPropagation()
  }

  _onCloseButtonClick (e) {
    e.preventDefault()
    e.stopPropagation()
    this.close()
  }

  close () {
    // let the content handl
    let content = this._getContent()
    if (content.beforeClose) {
      let result = content.beforeClose()
      if (result === false) {
        return
      }
    }
    this.send('closeModal')
  }

  _getContent () {
    // Unfortunately we can not have a ref on the content,
    // because it is passed as property.
    // ATM, Substance allows only the owner to set a ref.
    // Thus, we have to find the component manually.
    return this.refs.body.getChildren().find(c => c.el.hasClass('se-content'))
  }
}
