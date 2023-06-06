const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    joke: {
        type: String
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;