import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
      title: 'rating API Documentation',
      description: 'This is a simple rating API using Node.js, Express, and MongoDB',
    },
    host: 'localhost:3000'
};
  
const outputFile = '../swagger.json';
const routes = ['./server.ts'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);