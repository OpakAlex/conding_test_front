/* global moment */
import Ember from 'ember';

export default Ember.Controller.extend({
  sortField: '',
  sortType: 'asc',

  sortedCollection: Ember.computed('model.[]', 'sortType', 'sortField', function(){
    if (!this.get('model')){
      return [];
    }
    let collection = this.get('model').toArray();
    if(this.get('sortField') && this.get('sortType')){
      collection = collection.sort((a, b) => {
        if (this.get('sortField') === 'createdAt'){
          return this._sortByDate(a, b);
        }
        else{
          return this._sortBy(a, b);
        }
      });
    }
    return collection;
  }),

  actions: {
    selectItem(item){
      if (this.get('selectedItem') === item){
        return this.set('selectedItem', null);
      }
      this.set('selectedItem', item);
    },
    sort(type){
      if (this.get('sortField') === type){
        if (this.get('sortType') === 'asc'){
          this.set('sortType', 'desc');
        }
        else{
          this.set('sortType', 'asc');
        }
      }
      else{
        this.set('sortField', type);
        this.set('sortType', 'asc');
      }
    }
  },

  _sortBy(a,b){
    if (this.get('sortType') === 'asc'){
      if (a.get(this.get('sortField')) < b.get(this.get('sortField'))){
        return -1;
      }
      if (a.get(this.get('sortField')) > b.get(this.get('sortField'))){
        return 1;
      }
      return 0;
    }
    else{
      if (a.get(this.get('sortField')) < b.get(this.get('sortField'))){
        return 1;
      }
      if (a.get(this.get('sortField')) > b.get(this.get('sortField'))){
        return -1;
      }
      return 0;
    }
  },
  _sortByDate(a, b){
    if (this.get('sortType') === 'asc'){
      return moment(a.get('createdAt')) - moment(b.get('createdAt'));
    }
    else{
      return moment(b.get('createdAt')) - moment(a.get('createdAt'));
    }
  }
});
