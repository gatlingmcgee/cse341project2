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
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('employees').find({ _id: userId });
    result.toArray().then((employees) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(employees[0]);
    });
};

const createUser = async (req, res) => {
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

// const updateUser = async (req, res) => {
//     //#swagger.tags=['Users']
//     const userId = new ObjectId(req.params.id);
//     const user = {
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         favoriteColor: req.body.favoriteColor,
//         birthday: req.body.birthday
//     };
//     const result = await mongodb.getDatabase().db().collection('users').replaceOne({ _id: userId }, user);
//     if (result.modifiedCount > 0) {
//         res.status(204).send();
//     } else {
//         res.status(500).json(result.error || 'Some error while updateing the user');
//     }
// };

// const deleteUser = async (req, res) => {
//     //#swagger.tags=['Users']
//     const userId = new ObjectId(req.params.id);
//     const result = await mongodb.getDatabase().db().collection('users').deleteOne({ _id: userId });
//     if (result.deleteCount > 0) {
//         res.status(204).send();
//     } else {
//         res.status(500).json(result.error || 'Some error while updateing the user');
//     }
// };

module.exports = {
    getAll,
    getSingle,
    createUser
//     updateUser,
//     deleteUser
}