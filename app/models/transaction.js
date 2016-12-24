import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date', { readOnly: true }),
  counterpartyName: DS.attr('string'),
  debit: DS.attr('boolean'),
  credit: DS.attr('boolean'),
  amount: DS.attr('number'),
  currency: DS.attr('string'),
  operationType: DS.attr('string'),
  attachements: DS.attr('array')
});
