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

// const { validateEmployee } = require('../validators/employeeValidation'); // Import employee validation

// const saveEmployees = (req, res, next) => {
//     const validation = validateEmployee(req.body); // Validate using centralized employee validation
    
//     if (validation.fails()) {
//         return res.status(412).json({
//             success: false,
//             message: 'Validation failed',
//             data: validation.errors
//         });
//     }
    
//     next(); // Continue to the next middleware/route handler if validation passes
// };

module.exports = {
    saveEmployees
};