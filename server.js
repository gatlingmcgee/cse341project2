const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.use('/', require('./routes'));

// process.on('uncaughtException', (err, origin) => {
//     console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
// });

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack); // log the error stack for debugging
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: err.message
    });
});


mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(port, () => {console.log(`Web Server is listening at port ${port}`)});
    }
});