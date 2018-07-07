import EntityDatabase from './EntityDatabase'
import {
  BibliographicEntry, JournalArticle, Book, Chapter, Person, Group, Organisation, Award,
  ConferencePaper, Report, DataPublication, MagazineArticle, NewspaperArticle, Patent, 
  Software, Thesis, Webpage, Keyword, Subject
} from './EntityDatabase'
import EntityLabelsPackage from './EntityLabelsPackage'

export default {
  name: 'entities',
  configure(config) {
    config.defineSchema({
      name: 'entities-database',
      version: '1.0.0',
      DocumentClass: EntityDatabase,
      defaultTextType: 'paragraph'
    })
    config.addNode(BibliographicEntry)
    config.addNode(JournalArticle)
    config.addNode(ConferencePaper)
    config.addNode(DataPublication)
    config.addNode(MagazineArticle)
    config.addNode(NewspaperArticle)
    config.addNode(Patent)
    config.addNode(Software)
    config.addNode(Thesis)
    config.addNode(Webpage)
    config.addNode(Report)
    config.addNode(Book)
    config.addNode(Chapter)
    config.addNode(Person)
    config.addNode(Group)
    config.addNode(Organisation)
    config.addNode(Award)
    config.addNode(Keyword)
    config.addNode(Subject)
    config.import(EntityLabelsPackage)
  }
}
