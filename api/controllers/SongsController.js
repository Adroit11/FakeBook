/**
 * SongsController
 *
 * @description :: Server-side logic for managing songs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	'new': function (req, res) {
        	res.view();
    	},

	create: function (req, res, next) {
	      Songs.create( req.params.all(), function songCreated(err, song) {
	       	if (err) {
	       	      console.log(err);
	             	req.session.flash = {
	                   		err: err
	                	}

	                	return res.redirect('/songs/new');
	            }

	            //res.json(songs);
	            	res.redirect('/songs/show/'+song.id);
	      });
	},

	show: function(req, res, next) {
	      Songs.findOne(req.param('id'), function foundSong(err, song) {
	            if (err) return next(err);
	            if (!song) return next();
	            res.view({
	                	song: song
	            });
	      });
	},

	search: function(req, res, next) {
	      Songs.query("SELECT * FROM songs WHERE title LIKE ('%"+(req.param('title'))+"%')", function(err, songs){
	      //Songs.find().where({title: req.param('title') }).exec(function(err, songs) {
		            if (err) return next(err);
		            res.view({
		                	songs: songs
		            });
	       });
	},

	index: function(req, res, next) {
	      Songs.find(function foundSongs(err, songs) {
	            if (err) return next(err);
	            res.view({
	                	songs: songs
	            });
	       });
	},

	edit: function(req, res, next) {
	      Songs.findOne(req.param('id'), function foundSong(err, song) {
	            if (err) return next(err);
	            if (!song) return next('Song doesn\'t exist.');
	            res.view({
	                	song: song
	            });
	      });
	},

	update: function(req, res, next){
	      Songs.update(req.param('id'), req.params.all(), function songsUpdated(err) {
	            if (err) {
	    	            return res.redirect('/songs/edit/'+req.param('id'));
	            }

	      	      res.redirect('/songs/show/'+req.param('id'));
	      });
	},

	destroy: function(req, res, next) {
 		Songs.findOne(req.param('id'), function foundSong(err, song) {
	            if (err) return next(err);
	            if (!song) return next('Song doesn\'t exist.');
	            Songs.destroy(req.param('id'), function songDestroyed(err) {
				if (err) return next(err);
	            });
	            res.redirect('/songs');
	      });
	}
};

