const express = require('express');
const routes = express.Router();
// const { saveFacility } = require('../Validate.js/middleware');
const facilitiesController = require('../controllers/facilities');
const validation = require('../middleware/validate');

routes.get('/', facilitiesController.getAllFacilities);
routes.get('/:id', facilitiesController.getSingleFacility);
routes.post('/', facilitiesController.createFacility);
routes.put('/:id', facilitiesController.updateFacility);
routes.delete('/:id', facilitiesController.deleteFacility);

module.exports = routes;