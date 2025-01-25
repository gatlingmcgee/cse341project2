const express = require('express');
const routes = express.Router();

const employeesController = require('../controllers/employees');

routes.get('/', employeesController.getAll);
routes.get('/:id', employeesController.getSingle);
routes.post('/', employeesController.createEmployee);
routes.put('/:id', employeesController.updateEmployee);
routes.delete('/:id', employeesController.deleteEmployee);

module.exports = routes;