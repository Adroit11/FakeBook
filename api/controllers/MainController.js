/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	index: function(req, res, next) {
		Books.find().exec(function (err, books) {
	      Songs.find(function foundSongs(err, songs) {
	            if (err) return next(err);
	            res.view({
	            		books: books,
	                	songs: songs
	            });
	       });
	    	});
	},

	show: function(req, res, next) {
	      Books.findOne(req.param('code')).exec(function (err, book) {
	      Songs.find({bookcode : {contains : (req.param('code'))}}).exec(function(err, songs) {
		            if (err) return next(err);
		            res.view({
		            		book: book,
		                	songs: songs
		            });
	       });
	    	});
	},
};

