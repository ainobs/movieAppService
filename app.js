const express = require('express');
const mongoose = require('mongoose');
require('./db');
const MovieModel = require('./schema.js');
global.appName = 'movieApp';

// init app & middleware
const app = express();
const port =  8080;

app.get('/movies',async (req, res)=> {
    try {
        const movies = await MovieModel.find({});
        if(!movies) {
            res.status(400).json({status: "FAILED", message: 'Error occred while fetching the movies'});
            
        } else {
            console.log(movies)
            res.status(200).json({status: "SUCCESS", message: 'received movies, ', data: movies});
        }

    } catch(err) {
        console.log(err);
        res.status(400).json({status: "FAILED", message: 'internal server error'});
    } 
})

app.listen(port, () =>
	console.log(` Node Development Server is listening on localhost:${port}, open your browser on: http://localhost:${port}/`)
);