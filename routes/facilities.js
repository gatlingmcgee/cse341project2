const express = require('express');
const routes = express.Router();
const facilitiesController = require('../controllers/facilities');
const validation = require('../middleware/validate');

routes.get('/', facilitiesController.getAllFacilities);
routes.get('/:id', facilitiesController.getSingleFacility);
routes.post('/', validation.saveFacilities, facilitiesController.createFacility);
routes.put('/:id', validation.saveFacilities, facilitiesController.updateFacility);
routes.delete('/:id', facilitiesController.deleteFacility);

module.exports = routes;