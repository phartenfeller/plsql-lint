const { createToken } = require('chevrotain');
const Identifier = require('./Identifier');

const If = createToken({
  name: 'If',
  pattern: /if/i,
  longer_alt: Identifier,
});

const Elsif = createToken({
  name: 'Elsif',
  pattern: /elsif/i,
  longer_alt: Identifier,
});

const Else = createToken({
  name: 'Else',
  pattern: /else/i,
  longer_alt: Identifier,
});

const Then = createToken({
  name: 'Then',
  pattern: /then/i,
  longer_alt: Identifier,
});

module.exports = [If, Elsif, Else, Then];
