const Validator = require('validatorjs');

const facilityValidationRules = {
    facilityLocation: "required|string",
    facilityName: "required|string",
    facilityStatus: "required|string"
};

const customMessages = {
    'required.facilityLocation': 'Facility location is required and must be a string',
    'required.facilityName': 'Facility name is required and must be a string',
    'required.facilityStatus': 'Facility status is required and must be a string'
};

const validateFacility = (data) => {
    return new Validator(data, facilityValidationRules, customMessages);
};

module.exports = { validateFacility };
