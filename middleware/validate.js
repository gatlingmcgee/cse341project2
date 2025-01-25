const validator = require('../helpers/validate');

const saveEmployees = (req, res, next) => {
    const validationRule = {
        firstname: "required|string",
        lastname: "required|string",
        badgenumber: "required|string",
        department: "required|string",
        shift: "string",
        location: "string",
        status: "string"
    };

    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    saveEmployees
};