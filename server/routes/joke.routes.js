const JokeController = require('../controllers/joke.controller');

module.exports = app => {
    // ALL JOKES
    app.get('/api/jokes', JokeController.findAll);

    // ONE JOKE
    app.get('/api/jokes/:id', JokeController.findOne);

    // UPDATE A JOKE
    app.patch('/api/jokes/:id', JokeController.updateJoke);

    // NEW JOKE
    app.post('/api/jokes', JokeController.createNewJoke);

    // DELETE A JOKE
    app.delete('/api/users/:id', JokeController.deleteJoke);
}