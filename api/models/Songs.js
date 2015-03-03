/**
* Songs.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

schema: true,
autoCreatedAt: false,
autoUpdatedAt: false,

    attributes: {

        id: {
            type: 'int'
        },

        bookcode: {
            type: 'string',
            required: true
        },

        page: {
            type: 'string',
            required: true
        },

        title: {
            type: 'string',
            required: true
        }
/*
        toJSON: function() {
            var obj = this.toObject();
            delete obj._csrf;
            return obj;
        }
*/
    }
};

