/**
 * ProfilePicture
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	userId: {
      type: 'integer'
    },
    fileId: {
      type: 'string'
    },
    filePath: {
      type: 'string'
    },
    
  }

};
