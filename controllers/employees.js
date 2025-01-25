const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Employees']
    const result = await mongodb.getDatabase().db().collection('employees').find();
    result.toArray().then((employees) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(employees);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Employees']
    const employeeId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('employees').find({ _id: employeeId });
    result.toArray().then((employees) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(employees[0]);
    });
};

const createEmployee = async (req, res) => {
    //#swagger.tags=['Employees']
    const employee = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        badgenumber: req.body.badgenumber,
        department: req.body.department,
        shift: req.body.shift
    };

    const result = await mongodb.getDatabase().db().collection('employees').insertOne(employee);
    if (result.acknowledged > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || 'Error occured while creating employee');
    }
};

const updateEmployee = async (req, res) => {
    //#swagger.tags=['Employees']
    const employeeId = new ObjectId(req.params.id);
    const employee = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        badgenumber: req.body.badgenumber,
        department: req.body.department,
        shift: req.body.shift
    };
    const result = await mongodb.getDatabase().db().collection('employees').replaceOne({ _id: employeeId }, employee);
    if (result.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || 'Error occured while updating employee');
    }
};

const deleteEmployee = async (req, res) => {
    //#swagger.tags=['Employees']
    const employeeId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('employees').deleteOne({ _id: employeeId });
    if (result.deleteCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || 'Success occured while deleting employee');
    }
};

module.exports = {
    getAll,
    getSingle,
    createEmployee,
    updateEmployee,
    deleteEmployee
}