const express = require('express');
const routes = express.Router();

const employeesController = require('../controllers/employees');

routes.get('/', employeesController.getAll);
routes.get('/:id', employeesController.getSingle);
routes.post('/', employeesController.createUser);
// routes.put('/:id', usersController.updateUser);
// routes.delete('/:id', usersController.deleteUser);

module.exports = routes;