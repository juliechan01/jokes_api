const Joke = require('../models/joke.model');

// READ ALL JOKES
module.exports.findAll = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => {
            res.json({ msg: 'Something went wrong. Please try again later.', error: err })
        });
}

// READ ONE JOKE
module.exports.findOne = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => {
            res.json({ joke: oneJoke })
        })
        .catch((err) => {
            res.json({ msg: 'Something went wrong. Please try again later.', error: err })
        });
}

// CREATE A JOKE
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({ joke: newJoke })
        })
        .catch((err) => {
            res.json({ msg: 'Something went wrong. Please try again later.', error: err })
        });
}

// UPDATE A JOKE
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true })
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch((err) => {
            res.json({ msg: 'Something went wrong. Please try again later.', error: err })
        })
}

// DELETE A JOKE
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ msg: 'Something went wrong. Please try again later.', error: err })
        })
}