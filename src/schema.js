const { Schema } = require('mongoose');

const bookMovieSchema = new Schema({
    movie: Schema.Types.String,
    slot: Schema.Types.String,
    seats: {
        A1: Schema.Types.String,
        A2: Schema.Types.String,
        A3: Schema.Types.String,
        A4: Schema.Types.String,
        D1: Schema.Types.String,
        D2: Schema.Types.String
    }

})

exports.bookMovieSchema = bookMovieSchema;
