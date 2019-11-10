import {
  ARTICLE_REF, MAGAZINE_ARTICLE_REF, NEWSPAPER_ARTICLE_REF, JOURNAL_ARTICLE_REF, BOOK_REF,
  CONFERENCE_PAPER_REF, PATENT_REF, REPORT_REF, THESIS_REF, WEBPAGE_REF, CHAPTER_REF, DATA_PUBLICATION_REF
} from '../../ArticleConstants'

/*
  Converts a CSLJSON record to our internal format.
  See EntityDatabase for schemas.
*/

export function convertCSLJSON (source) {
  let bibType = source.type
  let result

  // CSL types: http://docs.citationstyles.org/en/stable/specification.html#appendix-iii-types
  let typeMapping = {
    'article': ARTICLE_REF,
    'article-magazine': MAGAZINE_ARTICLE_REF,
    'article-newspaper': NEWSPAPER_ARTICLE_REF,
    'article-journal': JOURNAL_ARTICLE_REF,
    // "bill"
    'book': BOOK_REF,
    // "broadcast"
    'chapter': CHAPTER_REF,
    'dataset': DATA_PUBLICATION_REF,
    // "entry"
    'entry-dictionary': BOOK_REF,
    'entry-encyclopedia': BOOK_REF,
    // "figure"
    // "graphic"
    // "interview"
    // "legislation"
    // "legal_case"
    // "manuscript"
    // "map"
    // "motion_picture"
    // "musical_score"
    // "pamphlet"
    'paper-conference': CONFERENCE_PAPER_REF,
    'patent': PATENT_REF,
    // "post"
    // "post-weblog"
    // "personal_communication"
    'report': REPORT_REF,
    // "review"
    // "review-book"
    // "song"
    // "speech"
    'thesis': THESIS_REF,
    // "treaty"
    'webpage': WEBPAGE_REF
    // NA : "software"
  }

  if (typeMapping[bibType]) {
    result = _convertFromCSLJSON(source, typeMapping[bibType])
  } else {
    throw new Error(`Bib type ${bibType} not yet supported`)
  }
  return result
}

function _convertFromCSLJSON (source, type) {
  const date = _extractDateFromCSLJSON(source)

  let data = {
    type: type,

    title: source.title,
    containerTitle: source['container-title'],
    volume: source.volume,
    issue: source.issue,
    pageRange: source.page,
    doi: source.DOI,
    pmid: source.PMID,

    edition: source.edition,
    publisherLoc: source['publisher-place'],
    publisherName: source.publisher,
    pageCount: source['number-of-pages'],
    partTitle: source.section,
    confName: source.event,
    confLoc: source['event-place'],
    isbn: source.ISBN,
    issn: source.ISSN,

    year: date.year,
    month: date.month,
    day: date.day,

    uri: source.URL,
    version: source.version

    /* Examples with no corresponding field:
        - abstract
        - accessed
        - composer
        - director
        - ISSN
        - language
        - number-of-volumes
        - PMCID
        - title-short
        - translator
    */
  }

  // series
  if (source['collection-title']) {
    data.series = source['collection-title']
    if (source['collection-number']) {
      data.series += '; ' + source['collection-number']
    }
  }

  // Authors, editors, translators, inventors
  if (source.author) {
    if (type === 'patent') {
      data.inventors = source.author.map(a => { return { name: a.family, givenNames: a.given, type: 'ref-contrib' } })
    } else {
      data.authors = source.author.map(a => { return { name: a.family, givenNames: a.given, type: 'ref-contrib' } })
    }
  }
  if (source.editor) {
    data.editors = source.editor.map(a => { return { name: a.family, givenNames: a.given, type: 'ref-contrib' } })
  }
  if (source.translator) {
    data.translators = source.translator.map(a => { return { name: a.family, givenNames: a.given, type: 'ref-contrib' } })
  }

  // Cleanup output to avoid any undefined values
  Object.keys(data).forEach(key => {
    if (data[key] === undefined) {
      delete data[key]
    }
  })

  if (!data.doi) {
    // TODO: We should not rely that the imported item has a DOI, because it can also be imported from a generic CSL JSON file.
    //  However, there are some problems in the further processing withouth a DOI at the moment...
    throw new Error(`Citation must have DOI.`)
  }

  return data
}

function _extractDateFromCSLJSON (source) {
  let date = {}
  if (source.issued && source.issued['date-parts']) {
    let CSLdate = source.issued['date-parts']
    if (CSLdate.length > 0) {
      date.year = String(CSLdate[0][0])
      if (CSLdate[0][1]) {
        date.month = CSLdate[0][1] > 9 ? String(CSLdate[0][1]) : 0 + String(CSLdate[0][1])
      }
      if (CSLdate[0][2]) {
        date.day = CSLdate[0][2] > 9 ? String(CSLdate[0][2]) : 0 + String(CSLdate[0][2])
      }
    }
  }
  return date
}
