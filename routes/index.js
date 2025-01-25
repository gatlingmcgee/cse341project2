const routes = require('express').Router();

routes.use('/', require('./swagger'));

routes.get('/', (req, res) => { 
    //#swagger.tags=['Whats up people!']
    res.send('Whats up people!');
});

routes.use('/employees', require('./employees'));
routes.use('/facilities', require('./facilities'));

module.exports = routes;