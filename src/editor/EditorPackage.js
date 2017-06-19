import {
  BasePackage as SubstanceBasePackage,
  MultiSelectPackage,
  FindAndReplacePackage,
  TextPropertyEditor,
  EditInlineNodeCommand,
  EditAnnotationCommand,
  SchemaDrivenCommandManager
} from 'substance'

import TextureJATSPackage from '../article/TextureJATSPackage'

import Editor from './components/Editor'
import TextNodeComponent from './components/TextNodeComponent'
import PlainTextComponent from './components/PlainTextComponent'
import UnsupportedNodeComponent from './components/UnsupportedNodeComponent'
import UnsupportedInlineNodeComponent from './components/UnsupportedInlineNodeComponent'

import AbstractComponent from './components/AbstractComponent'
import AffiliationsComponent from './components/AffiliationsComponent'
import ArticleInfoComponent from './components/ArticleInfoComponent'
import BackComponent from './components/BackComponent'
import BodyComponent from './components/BodyComponent'
import ContainerNodeComponent from './components/ContainerNodeComponent'
import ContributorsComponent from './components/ContributorsComponent'
import EditXrefTool from './components/EditXrefTool'
import EditExtLinkTool from './components/EditExtLinkTool'
import FigComponent from './components/FigComponent'
import CaptionComponent from './components/CaptionComponent'
import FrontComponent from './components/FrontComponent'
import GraphicComponent from './components/GraphicComponent'
import HeadingComponent from './components/HeadingComponent'
import ManuscriptComponent from './components/ManuscriptComponent'
import PubHistoryComponent from './components/PubHistoryComponent'
import RefListComponent from './components/RefListComponent'
import RefComponent from './components/RefComponent'
import TitleGroupComponent from './components/TitleGroupComponent'
import XrefComponent from './components/XrefComponent'
import RefPreview from './components/RefPreview'
import FnPreview from './components/FnPreview'
import FigPreview from './components/FigPreview'
import DecreaseHeadingLevelCommand from './commands/DecreaseHeadingLevelCommand'
import IncreaseHeadingLevelCommand from './commands/IncreaseHeadingLevelCommand'
import InsertXrefCommand from './commands/InsertXrefCommand'

export default {
  name: 'author',
  configure(config) {
    config.import(SubstanceBasePackage)
    config.import(FindAndReplacePackage)
    config.import(MultiSelectPackage)
    config.import(TextureJATSPackage)

    // EXPERIMENTAL:
    // a CommandManager that uses the xmlSchema to inhibit commands
    // which would generate disallowed content
    config.setCommandManagerClass(SchemaDrivenCommandManager)

    // Base functionality
    config.addComponent('text-node', TextNodeComponent)
    config.addComponent('text-property-editor', TextPropertyEditor)
    config.addComponent('plain-text-property', PlainTextComponent)
    config.addComponent('container', ContainerNodeComponent)
    config.addComponent('heading', HeadingComponent)
    config.addComponent('unsupported', UnsupportedNodeComponent)
    config.addComponent('unsupported-inline-node', UnsupportedInlineNodeComponent)

    // Article content
    config.addComponent('abstract', AbstractComponent)
    config.addComponent('affiliations', AffiliationsComponent)
    config.addComponent('article-info', ArticleInfoComponent)
    config.addComponent('back', BackComponent)
    config.addComponent('body', BodyComponent)
    config.addComponent('contributors', ContributorsComponent)
    config.addComponent('front', FrontComponent)
    config.addComponent('fig', FigComponent)
    config.addComponent('graphic', GraphicComponent)
    config.addComponent('caption', CaptionComponent)
    config.addComponent('manuscript', ManuscriptComponent)
    config.addComponent('pub-history', PubHistoryComponent)
    config.addComponent('ref-list', RefListComponent)
    config.addComponent('ref', RefComponent)
    config.addComponent('title-group', TitleGroupComponent)
    config.addComponent('xref', XrefComponent)

    // Preview components for Ref, Fn, Figure
    config.addComponent('ref-preview', RefPreview)
    config.addComponent('fn-preview', FnPreview)
    config.addComponent('fig-preview', FigPreview)

    // Commands
    config.addCommand('edit-xref', EditInlineNodeCommand, {
      nodeType: 'xref',
      commandGroup: 'prompt'
    })
    config.addCommand('insert-xref-bibr', InsertXrefCommand, {
      refType: 'bibr',
      commandGroup: 'insert-xref'
    })
    config.addCommand('insert-xref-fig', InsertXrefCommand, {
      refType: 'fig',
      commandGroup: 'insert-xref'
    })
    config.addCommand('insert-xref-fn', InsertXrefCommand, {
      refType: 'fn',
      commandGroup: 'insert-xref'
    })
    config.addCommand('decrease-heading-level', DecreaseHeadingLevelCommand, {
      commandGroup: 'text-level'
    })
    config.addCommand('increase-heading-level', IncreaseHeadingLevelCommand, {
      commandGroup: 'text-level'
    })
    config.addKeyboardShortcut('shift+tab', { command: 'decrease-heading-level' })
    config.addKeyboardShortcut('tab', { command: 'increase-heading-level' })

    config.addLabel('insert-xref-bibr', 'Citation')
    config.addLabel('insert-xref-fig', 'Figure Reference')
    config.addLabel('insert-xref-fn', 'Footnote Reference')

    // Tools
    config.addTool('edit-xref', EditXrefTool)
    // Annotation tools
    config.addAnnotationTool({
      name: 'bold',
      nodeType: 'bold',
      commandGroup: 'formatting',
      icon: 'fa-bold',
      label: 'Strong',
      accelerator: 'cmd+b'
    })

    config.addAnnotationTool({
      name: 'italic',
      nodeType: 'italic',
      commandGroup: 'formatting',
      icon: 'fa-italic',
      label: 'Emphasize',
      accelerator: 'cmd+i'
    })

    config.addAnnotationTool({
      name: 'sub',
      nodeType: 'sub',
      commandGroup: 'formatting',
      icon: 'fa-subscript',
      label: 'Subscript'
    })

    config.addAnnotationTool({
      name: 'sup',
      nodeType: 'sup',
      commandGroup: 'formatting',
      icon: 'fa-superscript',
      label: 'Superscript'
    })

    config.addAnnotationTool({
      name: 'ext-link',
      nodeType: 'ext-link',
      commandGroup: 'formatting',
      icon: 'fa-link',
      label: 'Link',
      accelerator: 'cmd+k'
    })

    config.addTextTypeTool({
      name: 'heading1',
      commandGroup: 'text-types',
      nodeSpec: {
        type: 'heading',
        attributes: { level: '1' }
      },
      icon: 'fa-header',
      label: 'Heading 1',
      accelerator: 'cmd+alt+1'
    })

    config.addTextTypeTool({
      name: 'heading2',
      commandGroup: 'text-types',
      nodeSpec: {
        type: 'heading',
        attributes: { level: '2' }
      },
      icon: 'fa-header',
      label: 'Heading 2',
      accelerator: 'cmd+alt+2'
    })

    config.addTextTypeTool({
      name: 'heading3',
      commandGroup: 'text-types',
      nodeSpec: {
        type: 'heading',
        attributes: { level: '3' }
      },
      icon: 'fa-header',
      label: 'Heading 3',
      accelerator: 'cmd+alt+3'
    })

    config.addTextTypeTool({
      name: 'paragraph',
      commandGroup: 'text-types',
      nodeSpec: {
        type: 'p'
      },
      icon: 'fa-paragraph',
      label: 'Paragraph',
      accelerator: 'cmd+alt+0'
    })

    config.addCommand('edit-ext-link', EditAnnotationCommand, {
      nodeType: 'ext-link',
      commandGroup: 'prompt'
    })

    // ExtLink
    config.addTool('edit-ext-link', EditExtLinkTool)
    config.addIcon('open-link', { 'fontawesome': 'fa-external-link' })
    config.addLabel('open-link', 'Open Link')

    // Declarative spec for tool display
    config.addToolPanel('toolbar', [
      {
        name: 'text-types',
        type: 'tool-dropdown',
        showDisabled: true,
        style: 'descriptive',
        commandGroups: ['text-types']
      },
      {
        name: 'annotations',
        type: 'tool-group',
        showDisabled: true,
        style: 'minimal',
        commandGroups: ['formatting']
      },
      {
        name: 'insert',
        type: 'tool-dropdown',
        showDisabled: true,
        style: 'descriptive',
        commandGroups: ['insert-xref']
      }
    ])

    config.addToolPanel('main-overlay', [
      {
        name: 'prompt',
        type: 'tool-prompt',
        showDisabled: false,
        commandGroups: ['prompt']
      }
    ])

    config.addToolPanel('workflow', [
      {
        name: 'workflow',
        type: 'tool-group',
        commandGroups: ['workflows']
      }
    ])
  },
  Editor
}
