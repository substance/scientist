/* eslint-disable no-template-curly-in-string */
import {
  ListPackage,
  MultiSelectPackage,
  AnnotationCommand
} from 'substance'

import {
  BasePackage, EditorBasePackage, ModelComponentPackage, FindAndReplacePackage
} from '../../kit'

import AddEntityCommand from '../shared/AddEntityCommand'
import ArticleToolbarPackage from '../shared/ArticleToolbarPackage'
import EntityLabelsPackage from '../shared/EntityLabelsPackage'
import ManuscriptContentPackage from '../shared/ManuscriptContentPackage'
import PersistencePackage from '../../shared/PersistencePackage'

import ReferenceListComponent from '../shared/ReferenceListComponent'
import ManuscriptEditor from './ManuscriptEditor'
import ManuscriptTOC from './ManuscriptTOC'
import FigureComponent from '../shared/FigureComponent'
import FigurePanelComponent from '../shared/FigurePanelComponent'
import TableFigureComponent from '../shared/TableFigureComponent'
import FootnoteComponent from '../shared/FootnoteComponent'
import ReferenceComponent from '../shared/ReferenceComponent'

import AddSupplementaryFileWorkflow from '../shared/AddSupplementaryFileWorkflow'

import {
  AddFigurePanelCommand, MoveFigurePanelCommand,
  RemoveFigurePanelCommand, ReplaceFigurePanelImageCommand, OpenFigurePanelImageCommand
} from '../shared/FigurePanelCommands'
import DecreaseHeadingLevelCommand from './DecreaseHeadingLevelCommand'
import DownloadSupplementaryFileCommand from './DownloadSupplementaryFileCommand'
import DownloadSupplementaryFileTool from './DownloadSupplementaryFileTool'
import DropFigure from './DropFigure'
import EditEntityCommand from '../shared/EditEntityCommand'
import IncreaseHeadingLevelCommand from './IncreaseHeadingLevelCommand'
import InsertCrossReferenceCommand from '../shared/InsertCrossReferenceCommand'
import InsertDispFormulaCommand from './InsertDispFormulaCommand'
import InsertDispQuoteCommand from './InsertDispQuoteCommand'
import InsertExtLinkCommand from '../shared/InsertExtLinkCommand'
import InsertFigureCommand from './InsertFigureCommand'
import InsertFigureTool from './InsertFigureTool'
import InsertFigurePanelTool from '../shared/InsertFigurePanelTool'
import InsertFootnoteCommand from '../shared/InsertFootnoteCommand'
import InsertFootnoteCrossReferenceCommand from '../shared/InsertFootnoteCrossReferenceCommand'
import InsertInlineFormulaCommand from '../shared/InsertInlineFormulaCommand'
import InsertInlineGraphicCommand from '../shared/InsertInlineGraphicCommand'
import InsertInlineGraphicTool from '../shared/InsertInlineGraphicTool'
import { CreateListCommand, ChangeListTypeCommand } from './ListCommands'
import InsertNodeFromWorkflowCommand from './InsertNodeFromWorkflowCommand'
import {
  InsertTableCommand, InsertCellsCommand, DeleteCellsCommand,
  TableSelectAllCommand, ToggleCellHeadingCommand, ToggleCellMergeCommand
} from './TableCommands'
import InsertTableTool from './InsertTableTool'
import OpenFigurePanelImageTool from '../shared/OpenFigurePanelImageTool'
import RemoveItemCommand from '../shared/RemoveItemCommand'
import RemoveKeywordCommand from '../shared/RemoveKeywordCommand'
import ReplaceFigurePanelTool from '../shared/ReplaceFigurePanelTool'
import ReplaceSupplementaryFileCommand from './ReplaceSupplementaryFileCommand'
import ReplaceSupplementaryFileTool from './ReplaceSupplementaryFileTool'
import {
  AddCustomMetadataFieldCommand, MoveCustomMetadataFieldCommand, RemoveCustomMetadataFieldCommand
} from '../shared/CustomMetadataFieldCommands'
import SwitchViewCommand from '../shared/SwitchViewCommand'
import { BlockFormula, Figure, Reference, SupplementaryFile, Table } from '../models'

export default {
  name: 'ManuscriptEditor',
  configure (config) {
    config.import(BasePackage)
    config.import(EditorBasePackage)
    config.import(ModelComponentPackage)
    config.import(ManuscriptContentPackage)
    config.import(MultiSelectPackage)
    config.import(EntityLabelsPackage)
    config.import(ArticleToolbarPackage)
    config.import(PersistencePackage)
    config.import(FindAndReplacePackage)

    config.addComponent('add-supplementary-file', AddSupplementaryFileWorkflow)
    config.addComponent('figure', FigureComponent, true)
    config.addComponent('figure-panel', FigurePanelComponent, true)
    config.addComponent('table-figure', TableFigureComponent, true)
    config.addComponent('footnote', FootnoteComponent, true)
    config.addComponent('reference', ReferenceComponent, true)
    config.addComponent('reference-list', ReferenceListComponent, true)
    config.addComponent('toc', ManuscriptTOC, true)

    config.addCommand('add-metadata-field', AddCustomMetadataFieldCommand, {
      commandGroup: 'custom-metadata-fields'
    })
    config.addCommand('add-figure-panel', AddFigurePanelCommand, {
      commandGroup: 'figure-panel'
    })
    config.addCommand('create-external-link', InsertExtLinkCommand, {
      nodeType: 'external-link',
      accelerator: 'CommandOrControl+K',
      commandGroup: 'formatting'
    })
    config.addCommand('decrease-heading-level', DecreaseHeadingLevelCommand, {
      commandGroup: 'text'
    })
    config.addCommand('dedent-list', ListPackage.IndentListCommand, {
      spec: { action: 'dedent' },
      commandGroup: 'list'
    })
    config.addCommand('delete-columns', DeleteCellsCommand, {
      spec: { dim: 'col' },
      commandGroup: 'table-delete'
    })
    config.addCommand('delete-rows', DeleteCellsCommand, {
      spec: { dim: 'row' },
      commandGroup: 'table-delete'
    })
    config.addCommand('download-file', DownloadSupplementaryFileCommand, {
      commandGroup: 'file'
    })
    config.addCommand('edit-author', EditEntityCommand, {
      selectionType: 'author',
      commandGroup: 'author'
    })
    config.addCommand('edit-reference', EditEntityCommand, {
      selectionType: 'reference',
      commandGroup: 'reference'
    })
    config.addCommand('increase-heading-level', IncreaseHeadingLevelCommand, {
      commandGroup: 'text'
    })
    config.addCommand('indent-list', ListPackage.IndentListCommand, {
      spec: { action: 'indent' },
      commandGroup: 'list'
    })
    config.addCommand('insert-block-formula', InsertDispFormulaCommand, {
      nodeType: 'block-formula',
      commandGroup: 'insert'
    })
    config.addCommand('insert-block-quote', InsertDispQuoteCommand, {
      nodeType: 'block-quote',
      commandGroup: 'insert'
    })
    config.addCommand('insert-columns-left', InsertCellsCommand, {
      spec: { dim: 'col', pos: 'left' },
      commandGroup: 'table-insert'
    })
    config.addCommand('insert-columns-right', InsertCellsCommand, {
      spec: { dim: 'col', pos: 'right' },
      commandGroup: 'table-insert'
    })
    config.addCommand('insert-figure', InsertFigureCommand, {
      nodeType: 'figure',
      commandGroup: 'insert'
    })
    config.addCommand('insert-file', InsertNodeFromWorkflowCommand, {
      workflow: 'add-supplementary-file',
      nodeType: 'supplementary-file',
      commandGroup: 'insert'
    })
    config.addCommand('insert-footnote', InsertFootnoteCommand, {
      commandGroup: 'insert'
    })
    config.addCommand('insert-inline-formula', InsertInlineFormulaCommand, {
      commandGroup: 'insert'
    })
    config.addCommand('insert-inline-graphic', InsertInlineGraphicCommand, {
      nodeType: 'inline-graphic',
      commandGroup: 'insert'
    })
    config.addCommand('insert-rows-above', InsertCellsCommand, {
      spec: { dim: 'row', pos: 'above' },
      commandGroup: 'table-insert'
    })
    config.addCommand('insert-rows-below', InsertCellsCommand, {
      spec: { dim: 'row', pos: 'below' },
      commandGroup: 'table-insert'
    })
    config.addCommand('insert-table', InsertTableCommand, {
      nodeType: 'table-figure',
      commandGroup: 'insert'
    })
    config.addCommand('insert-xref-bibr', InsertCrossReferenceCommand, {
      refType: Reference.refType,
      commandGroup: 'insert-xref'
    })
    config.addCommand('insert-xref-figure', InsertCrossReferenceCommand, {
      refType: Figure.refType,
      commandGroup: 'insert-xref'
    })
    config.addCommand('insert-xref-file', InsertCrossReferenceCommand, {
      refType: SupplementaryFile.refType,
      commandGroup: 'insert-xref'
    })
    // Note: footnote cross-references are special, because they take the current scope into account
    // i.e. whether to create a footnote on article level, or inside a table-figure
    config.addCommand('insert-xref-footnote', InsertFootnoteCrossReferenceCommand, {
      commandGroup: 'insert-xref'
    })
    config.addCommand('insert-xref-formula', InsertCrossReferenceCommand, {
      refType: BlockFormula.refType,
      commandGroup: 'insert-xref'
    })
    config.addCommand('insert-xref-table', InsertCrossReferenceCommand, {
      refType: Table.refType,
      commandGroup: 'insert-xref'
    })
    config.addCommand('move-down-metadata-field', MoveCustomMetadataFieldCommand, {
      direction: 'down',
      commandGroup: 'custom-metadata-fields'
    })
    config.addCommand('move-down-figure-panel', MoveFigurePanelCommand, {
      direction: 'down',
      commandGroup: 'figure-panel'
    })
    config.addCommand('move-up-metadata-field', MoveCustomMetadataFieldCommand, {
      direction: 'up',
      commandGroup: 'custom-metadata-fields'
    })
    config.addCommand('move-up-figure-panel', MoveFigurePanelCommand, {
      direction: 'up',
      commandGroup: 'figure-panel'
    })
    config.addCommand('open-figure-panel-image', OpenFigurePanelImageCommand, {
      commandGroup: 'figure-panel'
    })
    config.addCommand('open-manuscript', SwitchViewCommand, {
      viewName: 'manuscript',
      commandGroup: 'switch-view'
    })
    config.addCommand('open-metadata', SwitchViewCommand, {
      viewName: 'metadata',
      commandGroup: 'switch-view'
    })
    config.addCommand('remove-metadata-field', RemoveCustomMetadataFieldCommand, {
      commandGroup: 'custom-metadata-fields'
    })
    config.addCommand('remove-figure-panel', RemoveFigurePanelCommand, {
      commandGroup: 'figure-panel'
    })
    config.addCommand('remove-footnote', RemoveItemCommand, {
      nodeType: 'footnote',
      commandGroup: 'footnote'
    })
    config.addCommand('remove-metadata-keyword', RemoveKeywordCommand, {
      commandGroup: 'custom-metadata-fields'
    })
    config.addCommand('replace-figure-panel-image', ReplaceFigurePanelImageCommand, {
      commandGroup: 'figure-panel'
    })
    config.addCommand('replace-file', ReplaceSupplementaryFileCommand, {
      commandGroup: 'file'
    })
    config.addCommand('table:select-all', TableSelectAllCommand)
    config.addCommand('toggle-bold', AnnotationCommand, {
      nodeType: 'bold',
      accelerator: 'CommandOrControl+B',
      commandGroup: 'formatting'
    })
    config.addCommand('toggle-cell-heading', ToggleCellHeadingCommand, {
      commandGroup: 'table'
    })
    config.addCommand('toggle-cell-merge', ToggleCellMergeCommand, {
      commandGroup: 'table'
    })
    config.addCommand('toggle-italic', AnnotationCommand, {
      nodeType: 'italic',
      accelerator: 'CommandOrControl+I',
      commandGroup: 'formatting'
    })
    config.addCommand('toggle-monospace', AnnotationCommand, {
      nodeType: 'monospace',
      commandGroup: 'formatting'
    })
    config.addCommand('toggle-ordered-list', ChangeListTypeCommand, {
      spec: { listType: 'order' },
      commandGroup: 'list'
    })
    config.addCommand('toggle-overline', AnnotationCommand, {
      nodeType: 'overline',
      commandGroup: 'formatting'
    })
    config.addCommand('toggle-small-caps', AnnotationCommand, {
      nodeType: 'small-caps',
      commandGroup: 'formatting'
    })
    config.addCommand('toggle-strike-through', AnnotationCommand, {
      nodeType: 'strike-through',
      commandGroup: 'formatting'
    })
    config.addCommand('toggle-subscript', AnnotationCommand, {
      nodeType: 'subscript',
      commandGroup: 'formatting'
    })
    config.addCommand('toggle-superscript', AnnotationCommand, {
      nodeType: 'superscript',
      commandGroup: 'formatting'
    })
    config.addCommand('toggle-underline', AnnotationCommand, {
      nodeType: 'underline',
      commandGroup: 'formatting'
    })
    config.addCommand('toggle-unordered-list', ChangeListTypeCommand, {
      spec: { listType: 'bullet' },
      commandGroup: 'list'
    })

    // Labels
    config.addLabel('add-ref', 'Add Reference')
    config.addLabel('article-info', 'Article Information')
    config.addLabel('article-record', 'Article Record')
    config.addLabel('contributors', 'Authors & Contributors')
    config.addLabel('create', 'Create')
    config.addLabel('create-unordered-list', 'Bulleted list')
    config.addLabel('create-ordered-list', 'Numbered list')
    config.addLabel('edit-ref', 'Edit Reference')
    config.addLabel('file-location', 'File location')
    config.addLabel('file-name', 'File name')
    config.addLabel('manuscript-start', 'Article starts here')
    config.addLabel('manuscript-end', 'Article ends here')
    config.addLabel('no-authors', 'No Authors')
    config.addLabel('no-editors', 'No Editors')
    config.addLabel('no-references', 'No References')
    config.addLabel('no-footnotes', 'No Footnotes')
    config.addLabel('open-link', 'Open Link')
    config.addLabel('pub-data', 'Publication Data')
    config.addLabel('sig-block-start', 'Signature Block starts here')
    config.addLabel('sig-block-end', 'Signature Block ends here')
    config.addLabel('structure', 'Structure')
    config.addLabel('toc', 'Table of Contents')
    config.addLabel('translations', 'Translations')
    config.addLabel('edit-ref', 'Edit')
    config.addLabel('remove-ref', 'Remove')
    config.addLabel('toggle-unordered-list', 'Bulleted list')
    config.addLabel('toggle-ordered-list', 'Numbered list')
    config.addLabel('enter-custom-field-name', 'Enter name')
    config.addLabel('enter-custom-field-value', 'Enter value')
    config.addLabel('add-action', 'Add')
    config.addLabel('enter-url-placeholder', 'Enter url')
    config.addLabel('enter-keyword', 'Enter keyword')
    config.addLabel('enter-keywords', 'Click to add keywords')
    config.addLabel('edit-keywords', 'Edit keywords')

    // Icons
    config.addIcon('create-unordered-list', { 'fontawesome': 'fa-list-ul' })
    config.addIcon('create-ordered-list', { 'fontawesome': 'fa-list-ol' })
    config.addIcon('open-link', { 'fontawesome': 'fa-external-link' })
    config.addIcon('pencil', { 'fontawesome': 'fa-pencil' })
    config.addIcon('toggle-unordered-list', { 'fontawesome': 'fa-list-ul' })
    config.addIcon('toggle-ordered-list', { 'fontawesome': 'fa-list-ol' })
    config.addIcon('trash', { 'fontawesome': 'fa-trash' })
    config.addIcon('input-loading', { 'fontawesome': 'fa-spinner fa-spin' })
    config.addIcon('input-error', { 'fontawesome': 'fa-exclamation-circle' })
    config.addIcon('left-control', { 'fontawesome': 'fa-chevron-left' })
    config.addIcon('right-control', { 'fontawesome': 'fa-chevron-right' })

    // Tools
    config.addComponent('add-figure-panel', InsertFigurePanelTool)
    config.addComponent('download-file', DownloadSupplementaryFileTool)
    config.addComponent('insert-figure', InsertFigureTool)
    config.addComponent('insert-inline-graphic', InsertInlineGraphicTool)
    config.addComponent('open-figure-panel-image', OpenFigurePanelImageTool)
    config.addComponent('replace-figure-panel-image', ReplaceFigurePanelTool)
    config.addComponent('replace-file', ReplaceSupplementaryFileTool)
    config.addComponent('insert-table', InsertTableTool)

    // DropDownHandler
    config.addDropHandler(DropFigure)

    // SwitchTextTypes
    config.addTextTypeTool({
      name: 'switch-to-heading1',
      commandGroup: 'text-types',
      nodeSpec: {
        type: 'heading',
        level: 1
      },
      icon: 'fa-header',
      label: 'Heading 1',
      accelerator: 'CommandOrControl+Alt+1'
    })
    config.addTextTypeTool({
      name: 'switch-to-heading2',
      commandGroup: 'text-types',
      nodeSpec: {
        type: 'heading',
        level: 2
      },
      icon: 'fa-header',
      label: 'Heading 2',
      accelerator: 'CommandOrControl+Alt+2'
    })
    config.addTextTypeTool({
      name: 'switch-to-heading3',
      commandGroup: 'text-types',
      nodeSpec: {
        type: 'heading',
        level: 3
      },
      icon: 'fa-header',
      label: 'Heading 3',
      accelerator: 'CommandOrControl+Alt+3'
    })
    config.addTextTypeTool({
      name: 'switch-to-paragraph',
      commandGroup: 'text-types',
      nodeSpec: {
        type: 'paragraph'
      },
      icon: 'fa-paragraph',
      label: 'Paragraph',
      accelerator: 'CommandOrControl+Alt+0'
    })
    config.addCommand('create-unordered-list', CreateListCommand, {
      spec: { listType: 'bullet' },
      commandGroup: 'text-types'
    })
    config.addCommand('create-ordered-list', CreateListCommand, {
      spec: { listType: 'order' },
      commandGroup: 'text-types'
    })
    config.addTextTypeTool({
      name: 'switch-to-preformat',
      commandGroup: 'text-types',
      nodeSpec: {
        type: 'preformat'
      },
      icon: 'fa-font',
      label: 'Preformat',
      accelerator: 'CommandOrControl+E'
    })

    // Toolpanels
    config.addToolPanel('main-overlay', [
      {
        name: 'prompt',
        type: 'prompt',
        style: 'minimal',
        hideDisabled: true,
        items: [
          { type: 'command-group', name: 'prompt' }
        ]
      }
    ])

    config.addToolPanel('workflow', [
      {
        name: 'workflow',
        type: 'group',
        items: [
          { type: 'command-group', name: 'workflows' }
        ]
      }
    ])

    // KeyboardShortcuts
    config.addKeyboardShortcut('CommandOrControl+a', { command: 'table:select-all' })
    config.addKeyboardShortcut('CommandOrControl+Delete', { command: 'remove-metadata-keyword' })

    // Register commands and keyboard shortcuts for collections
    registerCollectionCommand(config, 'author', ['metadata', 'authors'], { keyboardShortcut: 'CommandOrControl+Alt+A', nodeType: 'person' })
    registerCollectionCommand(config, 'funder', ['metadata', 'funders'], { keyboardShortcut: 'CommandOrControl+Alt+Y' })
    registerCollectionCommand(config, 'editor', ['metadata', 'editors'], { keyboardShortcut: 'CommandOrControl+Alt+E', nodeType: 'person' })
    registerCollectionCommand(config, 'group', ['metadata', 'groups'], { keyboardShortcut: 'CommandOrControl+Alt+G' })
    registerCollectionCommand(config, 'keyword', ['metadata', 'keywords'], { keyboardShortcut: 'CommandOrControl+Alt+K' })
    registerCollectionCommand(config, 'organisation', ['metadata', 'organisations'], { keyboardShortcut: 'CommandOrControl+Alt+O' })
    registerCollectionCommand(config, 'subject', ['metadata', 'subjects'])
  },
  ManuscriptEditor,
  // legacy
  Editor: ManuscriptEditor
}

// For now we just switch view and do the same action as in metadata editor
// TODO: later we will probably have just one set of commands for register collection
function registerCollectionCommand (config, itemType, collectionPath, options = {}) {
  let nodeType = options.nodeType || itemType
  config.addCommand(`insert-${itemType}`, AddEntityCommand, {
    type: nodeType,
    collection: collectionPath,
    commandGroup: 'add-entity',
    metadataOnly: true
  })
  if (options.keyboardShortcut) {
    config.addKeyboardShortcut(options.keyboardShortcut, { command: `add-${itemType}` })
  }
}
