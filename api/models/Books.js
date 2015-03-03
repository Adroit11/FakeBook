/**
* Books.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

schema: true,
autoCreatedAt: false,
autoUpdatedAt: false,
tableName: 'bookcodes',

  attributes: {

  	code: {
  		type: 'string',
  		required: true,
  		primaryKey: true
  	},

  	title: {
  		type: 'string',
  		required: true
  	},

  	format: {
  		type: 'string'
  	},

  	filename: {
  		type: 'string'
  	},

  	page_offset: {
  		type: 'int'
  	}

  }
};

