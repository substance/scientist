/* eslint-disable no-template-curly-in-string */
export default {
  name: 'article-toolbar',
  configure (config) {
    config.addToolPanel('toolbar', [
      {
        name: 'mode',
        type: 'switcher',
        style: 'descriptive',
        hideDisabled: true,
        displayActiveCommand: true,
        items: [
          { type: 'command', name: 'open-manuscript', label: 'open-manuscript', icon: 'manuscript' },
          { type: 'command', name: 'open-metadata', label: 'open-metadata', icon: 'metadata' }
        ]
      },
      {
        name: 'document-tools',
        type: 'group',
        style: 'minimal',
        items: [
          { type: 'command', name: 'undo' },
          { type: 'command', name: 'redo' },
          { type: 'command', name: 'save' }
        ]
      },
      {
        name: 'primary-annotations',
        type: 'group',
        style: 'minimal',
        items: [
          { type: 'command', name: 'toggle-bold', label: 'bold', icon: 'bold' },
          { type: 'command', name: 'toggle-italic', label: 'italic', icon: 'italic' },
          { type: 'command', name: 'create-external-link', label: 'link', icon: 'link' }
        ]
      },
      {
        name: 'insert',
        type: 'dropdown',
        style: 'descriptive',
        hideDisabled: true,
        alwaysVisible: true,
        items: [
          {
            name: 'content',
            type: 'group',
            items: [
              { type: 'command', name: 'insert-custom-abstract', label: 'custom-abstract' },
              { type: 'command', name: 'insert-figure', label: 'figure' },
              { type: 'command', name: 'insert-table', label: 'table' },
              { type: 'command', name: 'insert-block-quote', label: 'block-quote' },
              { type: 'command', name: 'insert-block-formula', label: 'equation' },
              { type: 'command', name: 'insert-file', label: 'file' },
              { type: 'command', name: 'insert-footnote', label: 'footnote' },
              { type: 'command', name: 'insert-reference', label: 'reference' }
            ]
          },
          {
            name: 'inline-content',
            type: 'group',
            label: 'inline',
            items: [
              { type: 'command', name: 'insert-inline-formula', label: 'math' },
              { type: 'command', name: 'insert-inline-graphic', label: 'inline-graphic' },
              { type: 'command', name: 'create-external-link', label: 'link', icon: 'link' },
              { type: 'command', name: 'insert-xref-bibr', label: 'citation' },
              { type: 'command', name: 'insert-xref-figure', label: 'figure-reference' },
              { type: 'command', name: 'insert-xref-table', label: 'table-reference' },
              { type: 'command', name: 'insert-xref-footnote', label: 'footnote-reference' },
              { type: 'command', name: 'insert-xref-formula', label: 'equation-reference' },
              { type: 'command', name: 'insert-xref-file', label: 'file-reference' }
            ]
          },
          {
            name: 'metadata',
            type: 'group',
            label: 'metadata',
            items: [
              { type: 'command', name: 'insert-author', label: 'author' },
              { type: 'command', name: 'insert-editor', label: 'editor' },
              { type: 'command', name: 'insert-group', label: 'group' },
              { type: 'command', name: 'insert-organisation', label: 'affiliation' },
              { type: 'command', name: 'insert-funder', label: 'funder' },
              { type: 'command', name: 'insert-keyword', label: 'keyword' },
              { type: 'command', name: 'insert-subject', label: 'subject' }
            ]
          }
        ]
      },
      {
        name: 'format',
        type: 'dropdown',
        style: 'descriptive',
        items: [
          { type: 'command', name: 'toggle-bold', label: 'bold' },
          { type: 'command', name: 'toggle-italic', label: 'italic' },
          { type: 'command', name: 'toggle-subscript', label: 'subscript' },
          { type: 'command', name: 'toggle-superscript', label: 'superscript' },
          { type: 'command', name: 'toggle-monospace', label: 'monospace' },
          { type: 'command', name: 'toggle-small-caps', label: 'small-caps' },
          { type: 'command', name: 'toggle-underline', label: 'underline' },
          { type: 'command', name: 'toggle-overline', label: 'overline' },
          { type: 'command', name: 'toggle-strike-through', label: 'strike-through' }
        ]
      },
      {
        name: 'text-types',
        type: 'dropdown',
        style: 'descriptive',
        hideDisabled: true,
        displayActiveCommand: true,
        items: [
          { type: 'command-group', name: 'text-types' }
        ]
      },
      {
        name: 'divider',
        type: 'spacer'
      },
      {
        name: 'mobile-mode',
        type: 'dropdown',
        style: 'descriptive',
        hideDisabled: false,
        displayActiveCommand: true,
        items: [
          { type: 'command', name: 'open-manuscript', label: 'open-manuscript', icon: 'manuscript' },
          { type: 'command', name: 'open-metadata', label: 'open-metadata', icon: 'metadata' }
        ]
      },
      {
        name: 'context-tools',
        type: 'dropdown',
        style: 'descriptive',
        // hide disabled items but not the dropdown itself
        hideDisabled: true,
        alwaysVisible: true,
        items: [
          {
            type: 'group',
            name: 'table',
            style: 'descriptive',
            label: 'table-tools',
            items: [
              { type: 'command-group', name: 'table' },
              { type: 'command-group', name: 'table-insert' },
              { type: 'command-group', name: 'table-delete' }
            ]
          },
          {
            type: 'group',
            name: 'file',
            style: 'descriptive',
            label: 'file-tools',
            items: [
              { type: 'command-group', name: 'file' }
            ]
          },
          {
            type: 'group',
            name: 'figure',
            style: 'descriptive',
            label: 'figure-tools',
            items: [
              { type: 'command-group', name: 'figure-panel' }
            ]
          },
          {
            type: 'group',
            name: 'footnote',
            style: 'descriptive',
            label: 'footnote-tools',
            items: [
              { type: 'command-group', name: 'footnote' }
            ]
          },
          {
            type: 'group',
            name: 'list',
            style: 'descriptive',
            label: 'list-tools',
            items: [
              { type: 'command-group', name: 'list' }
            ]
          },
          {
            type: 'group',
            name: 'custom-metadata-fields',
            style: 'descriptive',
            label: 'metadata-field-tools',
            items: [
              { type: 'command-group', name: 'custom-metadata-fields' }
            ]
          },
          {
            type: 'group',
            name: 'author',
            style: 'descriptive',
            items: [
              { type: 'command-group', name: 'author' }
            ]
          },
          {
            type: 'group',
            name: 'reference',
            style: 'descriptive',
            items: [
              { type: 'command-group', name: 'reference' }
            ]
          },
          {
            type: 'group',
            name: 'text',
            style: 'descriptive',
            items: [
              { type: 'command-group', name: 'text' }
            ]
          },
          {
            type: 'group',
            name: 'collection',
            style: 'descriptive',
            items: [
              { type: 'command-group', name: 'collection' }
            ]
          }
        ]
      }
    ])

    // Context menus
    config.addToolPanel('context-menu', [
      {
        name: 'context-menu',
        type: 'group',
        style: 'descriptive',
        hideDisabled: true,
        items: [
          { type: 'command-group', name: 'file' },
          { type: 'command-group', name: 'figure-panel' },
          { type: 'command-group', name: 'footnote' },
          { type: 'command-group', name: 'author' },
          { type: 'command-group', name: 'reference' },
          { type: 'command-group', name: 'collection' },
          { type: 'command-group', name: 'list' },
          { type: 'command-group', name: 'custom-metadata-fields' }
        ]
      }
    ])
    config.addToolPanel('table-context-menu', [
      {
        name: 'table-context-menu',
        type: 'group',
        style: 'descriptive',
        label: 'table',
        items: [
          { type: 'command-group', name: 'table-insert' },
          { type: 'command-group', name: 'table-delete' }
        ]
      }
    ])

    // Icons
    config.addIcon('bold', { 'fontawesome': 'fa-bold' })
    config.addIcon('italic', { 'fontawesome': 'fa-italic' })
    config.addIcon('link', { 'fontawesome': 'fa-link' })

    // Format tools labels
    config.addLabel('format', 'Format')
    config.addLabel('bold', 'Bold')
    config.addLabel('italic', 'Italic')
    config.addLabel('link', 'Link')
    config.addLabel('monospace', 'Monospace')
    config.addLabel('overline', 'Overline')
    config.addLabel('small-caps', 'Small Caps')
    config.addLabel('strike-through', 'Strike Through')
    config.addLabel('subscript', 'Subscript')
    config.addLabel('superscript', 'Superscript')
    config.addLabel('underline', 'Underline')
    // List tools labels
    config.addLabel('list-tools', 'List')
    config.addLabel('toggle-unordered-list', {
      en: 'Bulleted list',
      de: 'Liste'
    })
    config.addLabel('toggle-ordered-list', {
      en: 'Numbered list',
      de: 'Aufzählung'
    })
    config.addLabel('indent-list', {
      en: 'Increase indentation',
      de: 'Einrückung vergrößern'
    })
    config.addLabel('dedent-list', {
      en: 'Decrease indentation',
      de: 'Einrückung verringern'
    })
    // Insert tools labels
    config.addLabel('insert', 'Insert')
    config.addLabel('figure', 'Figure')
    config.addLabel('table', 'Table')
    config.addLabel('block-quote', 'Block Quote')
    config.addLabel('equation', 'Equation')
    config.addLabel('file', 'File')
    config.addLabel('footnote', 'Footnote')
    config.addLabel('inline', 'Inline')
    config.addLabel('math', 'Math')
    config.addLabel('inline-graphic', 'Inline Graphic')
    config.addLabel('citation', 'Citation')
    config.addLabel('figure-reference', 'Figure Reference')
    config.addLabel('table-reference', 'Table Reference')
    config.addLabel('footnote-reference', 'Footnote Reference')
    config.addLabel('equation-reference', 'Equation Reference')
    config.addLabel('file-reference', 'File Reference')
    config.addLabel('metadata', 'Metadata')
    config.addLabel('reference', 'Reference')
    config.addLabel('author', 'Author')
    config.addLabel('editor', 'Editor')
    config.addLabel('group', 'Group')
    config.addLabel('affiliation', 'Affiliation')
    config.addLabel('funder', 'Funder')
    config.addLabel('keyword', 'Keyword')
    config.addLabel('subject', 'Subject')
    // Table tools labels
    config.addLabel('table-tools', 'Table')
    config.addLabel('insert-rows-above', {
      en: 'Insert ${nrows} rows above'
    })
    config.addLabel('insert-rows-below', {
      en: 'Insert ${nrows} rows below'
    })
    config.addLabel('insert-columns-left', {
      en: 'Insert ${ncols} columns left'
    })
    config.addLabel('insert-columns-right', {
      en: 'Insert ${ncols} columns right'
    })
    config.addLabel('delete-rows', {
      en: 'Delete ${nrows} rows'
    })
    config.addLabel('delete-columns', {
      en: 'Delete ${ncols} columns'
    })
    config.addLabel('toggle-cell-heading', {
      en: 'Cell heading'
    })
    config.addLabel('toggle-cell-merge', {
      en: 'Merge cell'
    })
    // File tools
    config.addLabel('file-tools', 'File')
    config.addLabel('replace-file', 'Replace File')
    config.addLabel('download-file', 'Download File')
    // Figure tools
    config.addLabel('figure-tools', 'Figure')
    config.addLabel('add-figure-panel', 'Add Panel')
    config.addLabel('replace-figure-panel-image', 'Replace Image')
    config.addLabel('remove-figure-panel', 'Remove Panel')
    config.addLabel('move-up-figure-panel', 'Move Panel Up')
    config.addLabel('move-down-figure-panel', 'Move Panel Down')
    config.addLabel('open-figure-panel-image', 'Open Image')
    // Footnote tools
    config.addLabel('footnote-tools', 'Footnote')
    config.addLabel('remove-footnote', 'Remove Footnote')
    // Collection tools
    config.addLabel('collection-tools', 'Collection')
    config.addLabel('move-up-col-item', 'Move Item Up')
    config.addLabel('move-down-col-item', 'Move Item Down')
    config.addLabel('remove-col-item', 'Remove Item')
    // Custom field tools
    config.addLabel('metadata-field-tools', 'Metadata')
    config.addLabel('add-metadata-field', 'Add Metadata Field')
    config.addLabel('move-down-metadata-field', 'Move Down Metadata Field')
    config.addLabel('move-up-metadata-field', 'Move Up Metadata Field')
    config.addLabel('remove-metadata-field', 'Remove Metadata Field')
    config.addLabel('remove-metadata-keyword', 'Remove Keyword')
    // Author tools
    config.addLabel('edit-author', 'Edit Author')
    // Reference tools
    config.addLabel('edit-reference', 'Edit Reference')
    config.addLabel('remove-reference', 'Remove Reference')
    // Context tools
    config.addLabel('context-tools', 'Edit')
    // Mode
    config.addLabel('mode', 'Mode')
    config.addLabel('mobile-mode', 'Mode')
    config.addLabel('open-manuscript', 'Manuscript')
    config.addLabel('open-metadata', 'Details')
  }
}
