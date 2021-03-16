const { createToken } = require('chevrotain');
const Identifier = require('./Identifier');

const Assignment = createToken({
  name: 'Assignment',
  pattern: /:=/,
  longer_alt: Identifier,
});

const SingleLineComment = createToken({
  name: 'SingleLineComment',
  pattern: /--.+/,
});

const MultiLineComment = createToken({
  name: 'MultiLineComment',
  pattern: /\/\*[^`]*\*\//,
  line_breaks: true,
});

const Semicolon = createToken({
  name: 'Semicolon',
  pattern: /;/,
  longer_alt: Identifier,
});

const Comma = createToken({
  name: 'Comma',
  pattern: /,/,
  longer_alt: Identifier,
});

const Plus = createToken({
  name: 'Plus',
  pattern: /\+/,
  longer_alt: Identifier,
});

const Minus = createToken({
  name: 'Minus',
  pattern: /-/,
  longer_alt: Identifier,
});

const Asterisk = createToken({
  name: 'Asterisk',
  pattern: /\*/,
  longer_alt: Identifier,
});

const Slash = createToken({
  name: 'Slash',
  pattern: /\//,
  longer_alt: Identifier,
});

const OpenBracket = createToken({
  name: 'OpenBracket',
  pattern: /\(/,
  longer_alt: Identifier,
});

const ClosingBracket = createToken({
  name: 'ClosingBracket',
  pattern: /\)/,
  longer_alt: Identifier,
});

const Concat = createToken({
  name: 'Concat',
  pattern: /\|\|/,
  longer_alt: Identifier,
});

const Percent = createToken({
  name: 'Percent',
  pattern: /%/,
  longer_alt: Identifier,
});

const Dot = createToken({
  name: 'Dot',
  pattern: /\./,
  longer_alt: Identifier,
});

const Arrow = createToken({
  name: 'Arrow',
  pattern: /=>/,
  longer_alt: Identifier,
});

module.exports = [
  Assignment,
  SingleLineComment,
  MultiLineComment,
  Semicolon,
  Comma,
  Plus,
  Minus,
  Asterisk,
  Slash,
  OpenBracket,
  ClosingBracket,
  Concat,
  Percent,
  Dot,
  Arrow,
];