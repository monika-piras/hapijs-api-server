'use strict';

const Hapi = require('@hapi/hapi');

var MOCK_DATA = require("./mockData");

const init = async () => {

    const server = Hapi.server({
        port:  process.env.PORT || 3000,
        host: '0.0.0.0'
    });

    await server.register({
        plugin: require('inert')
    });

    server.route({
        method: 'GET',
        path:'/',
        handler: (request, h) => {
    
          return 'Hello World!';
        }
    });

    server.route({
        method: 'GET',
        path: '/products',
        options: {
            cors: {
                origin: ['http://localhost:8080']            
            }
        },
        handler: (request, h) => {
            return {
                list: MOCK_DATA.PRODUCTS
            };
        }
    });

    server.route({
        method: 'GET',
        path: '/users',
        options: {
            cors: {
                origin: ['http://localhost:8080']            
            }
        },
        handler: (request, h) => {
            return {
                list: MOCK_DATA.USERS
            };
        }
    });

    server.route({
        method: 'GET',
        path: '/img/{file*}',
        handler: {
            directory: {
                path: 'public/img',
                listing: true
            }
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);

};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();