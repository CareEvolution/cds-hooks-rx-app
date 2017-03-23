var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Immutable = require('immutable');
import ActionTypes from '../actions/ActionTypes'

var CHANGE_EVENT = 'change';

var state = Immutable.fromJS({
  url: null
});

var SmartAppStore = assign({}, EventEmitter.prototype, {
  getState(){
    return state;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

SmartAppStore.dispatchToken = AppDispatcher.register(function(action) {

  switch(action.type) {

    case ActionTypes.SET_SMART_APP_URL:
      var original = state.get('url');
      state = state.set('url', action.url);
      if (original !== state.get('url')) {
        SmartAppStore.emitChange();
      }
      break;

    default:
  }

});

module.exports = SmartAppStore;
