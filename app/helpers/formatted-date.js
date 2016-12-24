/* global moment */

import Ember from 'ember';

export default Ember.Helper.helper(function (value) {
  return moment(value[0]).format('DD-MM-YYYY');
});
