/**
 * BooksController
 *
 * @description :: Server-side logic for managing Books
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	'new': function (req, res) {
        	res.view();
    	},

	create: function (req, res, next) {
	      Books.create( req.params.all(), function bookCreated(err, book) {
	       	if (err) {
	       	      console.log(err);
	             	req.session.flash = {
	                   		err: err
	                	}

	                	return res.redirect('/books/new');
	            }

	            //res.json(books);
	            	res.redirect('/books/show/'+book.id);
	      });
	},

	show: function(req, res, next) {
	      Books.findOne(req.param('id'), function foundSong(err, book) {
	            if (err) return next(err);
	            if (!book) return next();
	            res.view({
	                	book: book
	            });
	      });
	},

	search: function(req, res, next) {
	      Books.query("SELECT * FROM books WHERE title LIKE ('%"+(req.param('title'))+"%')", function(err, books){
	      //Books.find().where({title: req.param('title') }).exec(function(err, books) {
		            if (err) return next(err);
		            res.view({
		                	books: books
		            });
	       });
	},

	index: function(req, res, next) {
	      Books.find(function foundBooks(err, books) {
	            if (err) return next(err);
	            res.view({
	                	books: books
	            });
	       });
	},

	edit: function(req, res, next) {
	      Books.findOne(req.param('id'), function foundSong(err, book) {
	            if (err) return next(err);
	            if (!book) return next('Song doesn\'t exist.');
	            res.view({
	                	book: book
	            });
	      });
	},

	update: function(req, res, next){
	      Books.update(req.param('id'), req.params.all(), function booksUpdated(err) {
	            if (err) {
	    	            return res.redirect('/books/edit/'+req.param('id'));
	            }

	      	      res.redirect('/books/show/'+req.param('id'));
	      });
	},

	destroy: function(req, res, next) {
 		Books.findOne(req.param('id'), function foundSong(err, book) {
	            if (err) return next(err);
	            if (!book) return next('Song doesn\'t exist.');
	            Books.destroy(req.param('id'), function bookDestroyed(err) {
				if (err) return next(err);
	            });
	            res.redirect('/books');
	      });
	}
};

