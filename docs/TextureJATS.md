# Texture Article

This schema defines a strict sub-set of JATS Archiving 1.2.

## Elements

### `<abstract>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, abstract-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
title?,(sec|p)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
article-meta
</pre>

### `<addr-line>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
aff
</pre>

### `<aff>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, rid, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(addr-line*, label?, city?, country?, fax?, institution*, institution-wrap*, phone?, postal-code?, state?, email?, ext-link*, uri?)[unordered]
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
article-meta, person-group
</pre>

### `<ali:free_to_read>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, end_date, start_date
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
EMPTY
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
permissions
</pre>

### `<ali:license_ref>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, start_date
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
license
</pre>

### `<article>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, article-type, specific-use, xml:lang, dtd-version
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
front,body?,back?
</pre>

### `<article-categories>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
subj-group*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
article-meta
</pre>

### `<article-id>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, pub-id-type, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
article-meta
</pre>

### `<article-meta>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
article-id*,article-categories?,title-group?,contrib-group*,aff*,pub-date*,volume?,issue?,issue-title?,isbn?,(((fpage,lpage?)?,page-range?)|elocation-id)?,history?,permissions?,abstract*,trans-abstract*,kwd-group*,funding-group*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
front
</pre>

### `<article-title>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation, title-group
</pre>

### `<attrib>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
disp-quote
</pre>

### `<award-group>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, rid, award-type, specific-use, xml:lang, xlink:type, xlink:href, xlink:role, xlink:title, xlink:show, xlink:actuate
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
funding-source*,award-id*,principal-award-recipient*,principal-investigator*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
funding-group
</pre>

### `<award-id>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, rid, award-type, specific-use, xml:lang, xlink:type, xlink:href, xlink:role, xlink:title, xlink:show, xlink:actuate
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
award-group
</pre>

### `<back>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(fn-group?, ref-list?)[unordered]
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
article
</pre>

### `<bio>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, rid, content-type, specific-use, xml:lang, xlink:type, xlink:href, xlink:role, xlink:title, xlink:show, xlink:actuate
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
p*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
contrib
</pre>

### `<body>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(sec|boxed-text|chem-struct-wrap|fig|table-wrap|disp-formula|disp-formula-group|def-list|list|p|preformat|disp-quote|supplementary-material|disp-formula|disp-formula-group|def-list|list|p|ack|disp-quote|speech|statement|verse-group)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
article
</pre>

### `<bold>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, toggle, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
license-p, article-title, issue-title, role, trans-title, email, institution, phone, uri, string-name, given-names, surname, prefix, suffix, ext-link, attrib, label, price, title, subject, kwd, subtitle, preformat, bold, fixed-case, italic, monospace, sc, overline, strike, sub, sup, underline, xref, p, named-content, chapter-title, data-title, edition, part-title, patent, series, source, version, th, td
</pre>

### `<break>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
EMPTY
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
article-title, trans-title, institution, attrib, label, title, subject, subtitle, bold, fixed-case, italic, monospace, sc, overline, strike, sub, sup, underline, xref, chapter-title, part-title
</pre>

### `<caption>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang, style
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
title?,p*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
fig, supplementary-material, table-wrap
</pre>

### `<chapter-title>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation
</pre>

### `<city>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
aff
</pre>

### `<col>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, style, span, width, align, char, charoff, valign
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
EMPTY
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
table, colgroup
</pre>

### `<colgroup>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, style, span, width, align, char, charoff, valign
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
col*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
table
</pre>

### `<collab>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, collab-type, symbol, specific-use, xml:lang, xlink:type, xlink:href, xlink:role, xlink:title, xlink:show, xlink:actuate
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(email?, named-content, contrib-group?, xref*)[unordered]
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
contrib, element-citation, person-group
</pre>

### `<conf-loc>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation
</pre>

### `<conf-name>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation
</pre>

### `<contrib>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, contrib-type, corresp, equal-contrib, deceased, rid, specific-use, xlink:type, xlink:href, xlink:role, xlink:title, xlink:show, xlink:actuate
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(contrib-id*, name?, email?, string-name?, bio?, collab?, role?, xref*)[unordered]
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
contrib-group
</pre>

### `<contrib-group>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
contrib*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
collab, article-meta
</pre>

### `<contrib-id>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, contrib-id-type, authenticated, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
contrib
</pre>

### `<copyright-holder>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
permissions
</pre>

### `<copyright-statement>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
permissions
</pre>

### `<copyright-year>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
permissions
</pre>

### `<country>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, country, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
aff
</pre>

### `<data-title>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|email|ext-link|uri|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|named-content|styled-content|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation
</pre>

### `<date>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, date-type, publication-format, iso-8601-date, calendar, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
((day?,month?)|season)?,year?,era?,string-date?
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
history
</pre>

### `<date-in-citation>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, iso-8601-date, calendar, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation
</pre>

### `<day>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation, date, pub-date
</pre>

### `<disp-formula>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
label?,tex-math
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
named-content, sec, body
</pre>

### `<disp-quote>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
p+,attrib?
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
named-content, sec, body
</pre>

### `<edition>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, designator, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation
</pre>

### `<element-citation>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, publication-type, publisher-type, publication-format, specific-use, xml:lang, xlink:type, xlink:href, xlink:role, xlink:title, xlink:show, xlink:actuate
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(article-title?, chapter-title?, comment?, collab?, edition?, elocation-id?, fpage?, issue?, lpage?, page-range?, person-group*, pub-id*, publisher-loc*, publisher-name*, source?, volume?, year?, month?, day?, conf-name?, conf-loc?, data-title?, part-title?, patent?, series?, version?, uri?, date-in-citation?)[unordered]
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
ref
</pre>

### `<elocation-id>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, seq, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation, article-meta
</pre>

### `<email>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang, xlink:type, xlink:href, xlink:role, xlink:title, xlink:show, xlink:actuate
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
contrib, aff, collab, data-title
</pre>

### `<era>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
date, pub-date
</pre>

### `<ext-link>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, ext-link-type, assigning-authority, specific-use, xml:lang, xlink:type, xlink:href, xlink:role, xlink:title, xlink:show, xlink:actuate
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
license-p, article-title, aff, role, trans-title, email, institution, phone, uri, given-names, surname, prefix, suffix, ext-link, attrib, label, title, subject, subtitle, bold, fixed-case, italic, monospace, sc, overline, strike, sub, sup, underline, xref, p, named-content, chapter-title, data-title, edition, part-title, patent, series, version, th, td
</pre>

### `<fax>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
aff
</pre>

### `<fig>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, position, orientation, specific-use, xml:lang, fig-type
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
object-id?,label?,caption?,graphic,permissions?
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
named-content, sec, body
</pre>

### `<fixed-case>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
license-p, article-title, issue-title, role, trans-title, email, institution, phone, uri, string-name, given-names, surname, prefix, suffix, ext-link, attrib, label, price, title, subject, kwd, subtitle, preformat, bold, fixed-case, italic, monospace, sc, overline, strike, sub, sup, underline, xref, p, named-content, chapter-title, data-title, edition, part-title, patent, series, source, version, th, td
</pre>

### `<fn>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, symbol, fn-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
label?,p+
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
fn-group
</pre>

### `<fn-group>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
label?,title?,fn+
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
table-wrap-foot, back
</pre>

### `<fpage>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, seq, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation, article-meta
</pre>

### `<front>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
journal-meta?,article-meta
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
article
</pre>

### `<funding-group>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
award-group*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
article-meta
</pre>

### `<funding-source>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, rid, source-type, country, specific-use, xml:lang, xlink:type, xlink:href, xlink:role, xlink:title, xlink:show, xlink:actuate
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
institution-wrap
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
award-group
</pre>

### `<given-names>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, initials
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
name
</pre>

### `<graphic>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, position, orientation, specific-use, xml:lang, content-type, mime-subtype, mimetype, xlink:type, xlink:href, xlink:role, xlink:title, xlink:show, xlink:actuate
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
EMPTY
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
fig, named-content
</pre>

### `<history>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
date*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
article-meta
</pre>

### `<inline-formula>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
tex-math
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
license-p, article-title, role, trans-title, email, institution, phone, uri, given-names, surname, prefix, suffix, ext-link, attrib, label, title, subject, subtitle, bold, fixed-case, italic, monospace, sc, overline, strike, sub, sup, underline, xref, p, named-content, chapter-title, edition, part-title, patent, series, version, th, td
</pre>

### `<inline-graphic>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, baseline-shift, mimetype, mime-subtype, xml:lang, xlink:type, xlink:href, xlink:role, xlink:title, xlink:show, xlink:actuate
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
alt-text?
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
license-p, article-title, role, trans-title, email, institution, phone, uri, given-names, surname, prefix, suffix, ext-link, attrib, label, title, subject, subtitle, bold, fixed-case, italic, monospace, sc, overline, strike, sub, sup, underline, xref, p, named-content, chapter-title, edition, part-title, patent, series, version, th, td
</pre>

### `<institution>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang, xlink:type, xlink:href, xlink:role, xlink:title, xlink:show, xlink:actuate
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
aff, institution-wrap
</pre>

### `<institution-id>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, institution-id-type, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
institution-wrap
</pre>

### `<institution-wrap>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(institution|institution-id)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
aff, funding-source
</pre>

### `<isbn>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, publication-format, content-type, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
article-meta
</pre>

### `<issue>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, seq, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation, article-meta
</pre>

### `<issue-title>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
article-meta
</pre>

### `<italic>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, toggle, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
license-p, article-title, issue-title, role, trans-title, email, institution, phone, uri, string-name, given-names, surname, prefix, suffix, ext-link, attrib, label, price, title, subject, kwd, subtitle, preformat, bold, fixed-case, italic, monospace, sc, overline, strike, sub, sup, underline, xref, p, named-content, chapter-title, data-title, edition, part-title, patent, series, source, version, th, td
</pre>

### `<kwd>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
kwd-group
</pre>

### `<kwd-group>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, kwd-group-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
label?,kwd*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
article-meta
</pre>

### `<label>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, alt, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
aff, kwd-group, fn-group, fig, supplementary-material, table-wrap, fn, disp-formula
</pre>

### `<license>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, license-type, specific-use, xml:lang, xlink:type, xlink:href, xlink:role, xlink:title, xlink:show, xlink:actuate
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(ali:license_ref?, license-p?)[unordered]
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
permissions
</pre>

### `<license-p>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|chem-struct|inline-formula|inline-graphic|private-char|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|supplementary-material|price)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
license
</pre>

### `<list>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, list-type, prefix-word, list-content, continued-from, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
list-item+
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
list-item, named-content, sec, body
</pre>

### `<list-item>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(p|list)+
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
list
</pre>

### `<lpage>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation, article-meta
</pre>

### `<monospace>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, toggle, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
license-p, article-title, issue-title, role, trans-title, email, institution, phone, uri, string-name, given-names, surname, prefix, suffix, ext-link, attrib, label, price, title, subject, kwd, subtitle, preformat, bold, fixed-case, italic, monospace, sc, overline, strike, sub, sup, underline, xref, p, named-content, chapter-title, data-title, edition, part-title, patent, series, source, version, th, td
</pre>

### `<month>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation, date, pub-date
</pre>

### `<name>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, name-style, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
((surname,given-names?)|given-names),prefix?,suffix?
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
contrib, name-alternatives, person-group
</pre>

### `<name-alternatives>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(name|string-name)+
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
person-group
</pre>

### `<named-content>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, rid, alt, content-type, specific-use, xml:lang, xlink:type, xlink:href, xlink:role, xlink:title, xlink:show, xlink:actuate
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|address|array|boxed-text|chem-struct-wrap|fig|fig-group|graphic|media|preformat|supplementary-material|table-wrap|table-wrap-group|disp-formula|disp-formula-group|def-list|list|ack|disp-quote|speech|statement|verse-group)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
license-p, article-title, role, trans-title, email, institution, phone, uri, collab, given-names, surname, prefix, suffix, ext-link, attrib, label, title, subject, subtitle, preformat, bold, fixed-case, italic, monospace, sc, overline, strike, sub, sup, underline, xref, p, named-content, chapter-title, data-title, edition, part-title, patent, series, version, th, td
</pre>

### `<object-id>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, pub-id-type, content-type, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
fig, table-wrap
</pre>

### `<overline>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, toggle, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
license-p, article-title, issue-title, role, trans-title, email, institution, phone, uri, string-name, given-names, surname, prefix, suffix, ext-link, attrib, label, price, title, subject, kwd, subtitle, preformat, bold, fixed-case, italic, monospace, sc, overline, strike, sub, sup, underline, xref, p, named-content, chapter-title, data-title, edition, part-title, patent, series, source, version, th, td
</pre>

### `<p>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|chem-struct|inline-formula|inline-graphic|private-char|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|supplementary-material)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
bio, abstract, trans-abstract, caption, fn, list-item, disp-quote, sec, body
</pre>

### `<page-range>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation, article-meta
</pre>

### `<part-title>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation
</pre>

### `<patent>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, country, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation
</pre>

### `<permissions>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
copyright-statement*,copyright-year*,copyright-holder*,(ali:free_to_read|license)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
article-meta, fig, table-wrap
</pre>

### `<person-group>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, person-group-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(anonymous|collab|collab-alternatives|name|name-alternatives|string-name|aff|aff-alternatives|etal|role)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation
</pre>

### `<phone>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
aff
</pre>

### `<postal-code>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
aff
</pre>

### `<prefix>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
name
</pre>

### `<preformat>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, position, orientation, specific-use, xml:lang, preformat-type, xml:space
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|abbrev|milestone-end|milestone-start|named-content|styled-content|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
named-content, sec, body
</pre>

### `<price>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, currency, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
license-p
</pre>

### `<pub-date>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, pub-type, publication-format, date-type, iso-8601-date, calendar, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(day|era|month|season|year|string-date)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
article-meta
</pre>

### `<pub-id>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, pub-id-type, assigning-authority, specific-use, xlink:type, xlink:href, xlink:role, xlink:title, xlink:show, xlink:actuate
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation
</pre>

### `<publisher-loc>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation
</pre>

### `<publisher-name>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation
</pre>

### `<ref>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
element-citation
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
ref-list
</pre>

### `<ref-list>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
ref*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
back
</pre>

### `<role>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
contrib, person-group
</pre>

### `<sc>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, toggle, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
license-p, article-title, issue-title, role, trans-title, email, institution, phone, uri, string-name, given-names, surname, prefix, suffix, ext-link, attrib, label, price, title, subject, kwd, subtitle, preformat, bold, fixed-case, italic, monospace, sc, overline, strike, sub, sup, underline, xref, p, named-content, chapter-title, data-title, edition, part-title, patent, series, source, version, th, td
</pre>

### `<season>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
date, pub-date
</pre>

### `<sec>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, xml:lang, sec-type, disp-level, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
title?,(boxed-text|chem-struct-wrap|fig|table-wrap|disp-formula|disp-formula-group|def-list|list|p|preformat|disp-quote|supplementary-material|disp-formula|disp-formula-group|def-list|list|p|ack|disp-quote|speech|statement|verse-group)*,sec*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
abstract, trans-abstract, sec, body
</pre>

### `<series>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation
</pre>

### `<source>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation
</pre>

### `<state>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
aff
</pre>

### `<strike>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, toggle, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
license-p, article-title, issue-title, role, trans-title, email, institution, phone, uri, string-name, given-names, surname, prefix, suffix, ext-link, attrib, label, price, title, subject, kwd, subtitle, preformat, bold, fixed-case, italic, monospace, sc, overline, strike, sub, sup, underline, xref, p, named-content, chapter-title, data-title, edition, part-title, patent, series, source, version, th, td
</pre>

### `<string-date>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, iso-8601-date, calendar, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
date, pub-date
</pre>

### `<string-name>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, name-style, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
contrib, name-alternatives, person-group
</pre>

### `<sub>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, arrange, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
license-p, article-title, issue-title, role, trans-title, email, institution, phone, uri, string-name, given-names, surname, prefix, suffix, ext-link, attrib, label, title, subject, kwd, subtitle, preformat, bold, fixed-case, italic, monospace, sc, overline, strike, sub, sup, underline, xref, p, named-content, chapter-title, data-title, edition, part-title, patent, series, source, version, th, td
</pre>

### `<subj-group>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, subj-group-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(subject|compound-subject)+,subj-group*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
article-categories, subj-group
</pre>

### `<subject>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
subj-group
</pre>

### `<subtitle>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
title-group
</pre>

### `<suffix>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
name
</pre>

### `<sup>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, arrange, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
license-p, article-title, issue-title, role, trans-title, email, institution, phone, uri, string-name, given-names, surname, prefix, suffix, ext-link, attrib, label, title, subject, kwd, subtitle, preformat, bold, fixed-case, italic, monospace, sc, overline, strike, sub, sup, underline, xref, p, named-content, chapter-title, data-title, edition, part-title, patent, series, source, version, th, td
</pre>

### `<supplementary-material>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, position, orientation, specific-use, xml:lang, content-type, mimetype, mime-subtype, xlink:type, xlink:href, xlink:role, xlink:title, xlink:show, xlink:actuate
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
label?,caption?
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
license-p, p, named-content, sec, body
</pre>

### `<surname>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, initials
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
name
</pre>

### `<table>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, style, summary, width, border, frame, rules, cellspacing, cellpadding, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(col*|colgroup*),((thead?,tfoot?,tbody+)|tr+)
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
table-wrap
</pre>

### `<table-wrap>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, position, orientation, specific-use, xml:lang, content-type
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
object-id?,label?,caption?,table,permissions?,table-wrap-foot?
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
named-content, sec, body
</pre>

### `<table-wrap-foot>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
fn-group?
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
table-wrap
</pre>

### `<tbody>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, style, align, char, charoff, valign
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
tr+
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
table
</pre>

### `<td>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, style, abbr, axis, headers, scope, rowspan, colspan, align, char, charoff, valign
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
tr
</pre>

### `<tex-math>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, notation, version
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
inline-formula, disp-formula
</pre>

### `<tfoot>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, style, align, char, charoff, valign
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
tr+
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
table
</pre>

### `<th>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, style, abbr, axis, headers, scope, rowspan, colspan, align, char, charoff, valign
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
tr
</pre>

### `<thead>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, style, align, char, charoff, valign
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
tr+
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
table
</pre>

### `<title>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
abstract, trans-abstract, fn-group, caption, sec
</pre>

### `<title-group>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
article-title,subtitle?,trans-title-group*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
article-meta
</pre>

### `<tr>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, style, align, char, charoff, valign
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(th|td)+
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
table, thead, tfoot, tbody
</pre>

### `<trans-abstract>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, abstract-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
title?,(sec|p)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
article-meta
</pre>

### `<trans-title>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
trans-title-group
</pre>

### `<trans-title-group>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
trans-title,trans-subtitle*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
title-group
</pre>

### `<underline>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, toggle, underline-style, specific-use
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
license-p, article-title, issue-title, role, trans-title, email, institution, phone, uri, string-name, given-names, surname, prefix, suffix, ext-link, attrib, label, price, title, subject, kwd, subtitle, preformat, bold, fixed-case, italic, monospace, sc, overline, strike, sub, sup, underline, xref, p, named-content, chapter-title, data-title, edition, part-title, patent, series, source, version, th, td
</pre>

### `<uri>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, content-type, specific-use, xml:lang, xlink:type, xlink:href, xlink:role, xlink:title, xlink:show, xlink:actuate
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
aff, element-citation, data-title
</pre>

### `<version>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, designator, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation
</pre>

### `<volume>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, seq, content-type, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation, article-meta
</pre>

### `<xref>`

**Attributes**:
<pre style="white-space:pre-wrap;">
id, xml:base, ref-type, alt, rid, specific-use, xml:lang
</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
(TEXT|ext-link|inline-supplementary-material|bold|fixed-case|italic|monospace|overline|overline-start|overline-end|roman|sans-serif|sc|strike|underline|underline-start|underline-end|ruby|alternatives|inline-graphic|private-char|chem-struct|inline-formula|abbrev|milestone-end|milestone-start|named-content|styled-content|target|xref|sub|sup|break)*
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
contrib, license-p, article-title, role, trans-title, email, institution, phone, uri, collab, given-names, surname, prefix, suffix, ext-link, attrib, label, title, subject, subtitle, bold, fixed-case, italic, monospace, sc, overline, strike, sub, sup, underline, xref, p, named-content, chapter-title, edition, part-title, patent, series, version, th, td
</pre>

### `<year>`

**Attributes**:
<pre style="white-space:pre-wrap;">

</pre>
**Contains**:
<pre style="white-space:pre-wrap;">
TEXT
</pre>
**This element may be contained in:**
<pre style="white-space:pre-wrap;">
element-citation, date, pub-date
</pre>

## Not Implemented
- abbrev
- abbrev-journal-title
- ack
- address
- aff-alternatives
- alt-text
- alt-title
- alternatives
- annotation
- anonymous
- app
- app-group
- array
- author-comment
- author-notes
- boxed-text
- chem-struct
- chem-struct-wrap
- citation-alternatives
- collab-alternatives
- comment
- compound-kwd
- compound-kwd-part
- compound-subject
- compound-subject-part
- conf-acronym
- conf-date
- conf-num
- conf-sponsor
- conf-theme
- conference
- corresp
- count
- counts
- custom-meta
- custom-meta-group
- def
- def-head
- def-item
- def-list
- degrees
- disp-formula-group
- equation-count
- etal
- fig-count
- fig-group
- floats-group
- front-stub
- funding-statement
- glossary
- glyph-data
- glyph-ref
- gov
- hr
- inline-supplementary-material
- issn
- issn-l
- issue-id
- issue-part
- issue-sponsor
- journal-id
- journal-meta
- journal-subtitle
- journal-title
- journal-title-group
- long-desc
- media
- meta-name
- meta-value
- milestone-end
- milestone-start
- mixed-citation
- nested-kwd
- note
- notes
- on-behalf-of
- open-access
- overline-end
- overline-start
- page-count
- principal-award-recipient
- principal-investigator
- private-char
- product
- publisher
- rb
- ref-count
- related-article
- related-object
- response
- roman
- rp
- rt
- ruby
- sans-serif
- sec-meta
- self-uri
- series-text
- series-title
- sig
- sig-block
- size
- speaker
- speech
- statement
- std
- std-organization
- string-conf
- styled-content
- sub-article
- supplement
- table-count
- table-wrap-group
- target
- term
- term-head
- textual-form
- trans-source
- trans-subtitle
- underline-end
- underline-start
- unstructured-kwd-group
- verse-group
- verse-line
- volume-id
- volume-issue-group
- volume-series
- word-count