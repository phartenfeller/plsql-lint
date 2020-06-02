const { createToken } = require('chevrotain');
const Identifier = require('./Identifier');

const SelectKw = createToken({
  name: 'SelectKw',
  pattern: /select/,
  longer_alt: Identifier,
});

const IntoKw = createToken({
  name: 'IntoKw',
  pattern: /into/,
  longer_alt: Identifier,
});

const FromKw = createToken({
  name: 'FromKw',
  pattern: /from/,
  longer_alt: Identifier,
});

const WhereKw = createToken({
  name: 'WhereKw',
  pattern: /where/,
  longer_alt: Identifier,
});

const GroupByKw = createToken({
  name: 'GroupByKw',
  pattern: /group by/,
  longer_alt: Identifier,
});

const OrderByKw = createToken({
  name: 'OrderByKw',
  pattern: /order by/,
  longer_alt: Identifier,
});

const AndKw = createToken({
  name: 'AndKw',
  pattern: /and/,
  longer_alt: Identifier,
});

const InsertKw = createToken({
  name: 'InsertKw',
  pattern: /insert/,
  longer_alt: Identifier,
});

const ValuesKw = createToken({
  name: 'ValuesKw',
  pattern: /values/,
  longer_alt: Identifier,
});

const DeleteKw = createToken({
  name: 'DeleteKw',
  pattern: /delete/,
  longer_alt: Identifier,
});

const UpdateKw = createToken({
  name: 'UpdateKw',
  pattern: /update/,
  longer_alt: Identifier,
});

const SetKw = createToken({
  name: 'SetKw',
  pattern: /set/,
  longer_alt: Identifier,
});

module.exports = [
  SelectKw,
  IntoKw,
  FromKw,
  WhereKw,
  GroupByKw,
  OrderByKw,
  AndKw,
  InsertKw,
  ValuesKw,
  DeleteKw,
  UpdateKw,
  SetKw,
];
