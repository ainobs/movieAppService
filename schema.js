const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
	_id:mongoose.Schema.Types.ObjectId,
	adult:Boolean,
    backdrop_path:String,
    genre_ids: [Number],
    id:Number,
    original_title: String,
    original_title_language: String,
    overview: String,
	popularity: Number,
    poster_Path: String,
    release_date: Number,
    title: String,
    video: Boolean,
    vote_average: Number,
    vote_count: Number
}, {timestamps: false});


const MoviesModel = mongoose.model('movies', moviesSchema);

module.exports = MoviesModel;