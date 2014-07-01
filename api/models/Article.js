/**
 * Message
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	writerId: {
      type: 'integer'
    },
    category: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    header: {
      type: 'string'
    },
    body: {
      type: 'string'
    },

  }

};
