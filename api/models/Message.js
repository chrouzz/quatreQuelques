/**
 * Message
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	senderId: {
      type: 'integer'
    },
    receiverId: {
      type: 'integer'
    },
    title: {
      type: 'string'
    },
    message: {
      type: 'string'
    },
    responseFlag: {
      type: 'boolean'
    },
    originMessageId: {
      type: 'integer'
    },
    
  }

};
