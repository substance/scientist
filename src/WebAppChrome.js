/* global vfs */
import { parseKeyEvent, InMemoryDarBuffer } from 'substance'
import DocumentArchiveFactory from './dar/DocumentArchiveFactory'
import StorageClientFactory from './dar/StorageClientFactory'
import AppChrome from './AppChrome'

export default class WebAppChrome extends AppChrome {

  async _loadArchive(archiveId) {
    let archive = DocumentArchiveFactory.getDocumentArchive(this.props.documentArchiveConfig)
    return archive.load(archiveId)
  }

  _handleKeyDown(event) {
    let key = parseKeyEvent(event)
    // CommandOrControl+S
    if (key === 'META+83' || key === 'CTRL+83') {
      console.log("Handling keydown event")
      this._save()
      event.preventDefault()
    }
  }
}
