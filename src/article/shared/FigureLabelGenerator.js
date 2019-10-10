import { last, isArray } from 'substance'

export default class FigureLabelGenerator {
  constructor (config = {}) {
    /*
      - name: type name as in 'Figure'
      - plural: type name in plural as in 'Figures'
      - and: string used to join groups, such as ', '
      - to: conjunction in groups such as '-' in 'Figure 1-3'
    */
    this.config = Object.assign({
      singular: 'Figure $',
      plural: 'Figures $',
      join: ', ',
      and: ', and ',
      to: '‒',
      invalid: '???'
    }, config)
  }

  getLabel (...defs) {
    if (defs.length === 0) return this.config.invalid
    // Note: normalizing args so that every def is a tuple
    defs = defs.map(d => {
      if (!isArray(d)) return [d]
      else return d
    })
    if (defs.length === 1) return this.getSingleLabel(defs[0])
    return this.getCombinedLabel(defs)
  }

  getSingleLabel (def) {
    if (!def) return this.config.invalid
    return this._replaceAll(this.config.singular, this._getSingleCounter(def))
  }

  getCombinedLabel (defs) {
    if (defs.length < 2) return this.getSingleLabel(defs[0])

    // sort the records
    defs.sort((a, b) => {
      let a1 = a[0].pos
      let b1 = b[0].pos
      if (a1 < b1) return -1
      if (a1 > b1) return 1
      // TODO: here we will need to sort by the panel type
      return a[1].pos - b[1].pos
    })
    // do a segmentation
    let group = [defs[0]]
    let groups = []
    for (let idx = 0; idx < defs.length; idx++) {
      if (idx === 0) continue
      // a sequence is stopped when
      // - an item has a different level than the previous one
      // - an item on the first level has pos larger than +1 of the previous one
      // - an item on the second level has different type, or a pos larger +1 of the previous one
      let def = defs[idx]
      let prev = defs[idx - 1]
      if (
        (prev.length !== def.length) ||
        (def.length === 1 && def[0].pos > prev[0].pos + 1) ||
        (def.length === 2 && (def[1].type !== prev[1].type || def[0].pos !== prev[0].pos || def[1].pos > prev[1].pos + 1))
      ) {
        groups.push(group)
        group = [def]
      } else {
        group.push(def)
      }
    }
    groups.push(group)

    // and finally compute a label for each group
    let fragments = []
    for (let group of groups) {
      if (group.length === 1) {
        fragments.push(this._getSingleCounter(group[0]))
      } else {
        fragments.push(this._getGroupCounter(group[0], last(group)))
      }
    }

    // join the fragments
    let combined
    if (fragments.length > 1) {
      combined = fragments.slice(0, fragments.length - 1).join(this.config.join) + this.config.and + last(fragments)
    } else {
      combined = fragments[0]
    }

    // and return a combined label
    return this._replaceAll(this.config.plural, combined)
  }

  _getSingleCounter (def) {
    if (def.length === 1) {
      return String(def[0].pos)
    } else {
      let figCounter = def[0].pos
      return `${figCounter}`
    }
  }

  _getGroupCounter (first, last) {
    return `${this._getSingleCounter(first)}${this.config.to}${this._getSingleCounter(last)}`
  }

  _replaceAll (t, $) {
    return t.slice(0).replace(/[$]/g, $)
  }
}
