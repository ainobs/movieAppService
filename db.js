require('dotenv').config();
const {mongoose} = require('mongoose');
const MONGO_ATLAS_URL = process.env.DB;

const options = {
	autoIndex: false,
	maxPoolSize: 20,
	serverSelectionTimeoutMS: 5000,
    dbName: 'movieApp'
};
const db = mongoose.connect(MONGO_ATLAS_URL, options);

if(db) {
    console.log(`[Database connection]: Connection to MongoDB server for has been established successfully.`)
}
else {
    console.log(`Connection error to MongoDB Server.`);
}
module.exports = db;