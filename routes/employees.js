const express = require('express');
const routes = express.Router();
// const { saveEmployees } = require('../validate.js/middleware');
const employeesController = require('../controllers/employees');
const validation = require('../middleware/validate');

routes.get('/', employeesController.getAll);
routes.get('/:id', employeesController.getSingle);
routes.post('/', validation.saveEmployees, employeesController.createEmployee);
routes.put('/:id', validation.saveEmployees, employeesController.updateEmployee);
routes.delete('/:id', employeesController.deleteEmployee);

module.exports = routes;