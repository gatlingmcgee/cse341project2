const routes = require('express').Router();

//routes.use('/', require('./swagger'));

routes.get('/', (req, res) => { 
    //#swagger.tags=['Whats up people!']
    res.send('Whats up world!');
});

routes.use('/employees', require('./employees'));

module.exports = routes;