const {Schema, model} = require('mongoose')

const schema = new Schema({
    "id" : Schema.Types.ObjectId,
    "name" : { type: String, required: true },
    "year" : { type: Number, min: 1900, max: 2020 },
    "country" : { type: String },
    "genre" : { type: String },
    "duration" : { type: Number, min: 0 },
    "rate" : { type: Number, min: 0, max: 10 },
    "producer" : { type: String },
    "cast" : { type: String },
    "description" : { type: String },
    "posterUrl" : { type: String }
});

module.exports = model('Movie', schema)