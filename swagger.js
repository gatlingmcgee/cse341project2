const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'Employees API',
      description: 'Employees API',
    },
    host: 'localhost:3001',
    schemes: ['http', 'https'],
  };
  
  const outputFile = './swagger.json';
  const endpointsFiles = ['./routes/index.js'];
  
swaggerAutogen(outputFile, endpointsFiles, doc);