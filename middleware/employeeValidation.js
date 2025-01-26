const Validator = require('validatorjs');

const employeeValidationRules = {
    firstname: "required|string",
    lastname: "required|string",
    badgenumber: "required|string",
    department: "required|string",
    shift: "string",
    location: "string",
    status: "string"
};

const customMessages = {
    'required.firstname': 'First name is required and must be a string',
    'required.lastname': 'Last name is required and must be a string',
    'required.badgenumber': 'Badge number is required and must be a string',
    'required.department': 'Department is required and must be a string',
    'string.shift': 'Shift must be a string',
    'string.location': 'Location must be a string',
    'string.status': 'Status must be a string'
};

const validateEmployee = (data) => {
    return new Validator(data, employeeValidationRules, customMessages);
};

module.exports = { validateEmployee };
