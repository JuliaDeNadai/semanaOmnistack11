const express = require('express');
const ongController = require('./controllers/OngController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');
const incidentController = require('./controllers/incidentController');
const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.index);

routes.get('/profile', profileController.index);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;