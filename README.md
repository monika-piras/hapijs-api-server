# hapijs-api-server

##### An example about how to build a simple API server with [@hapi/hapi Framework].

This project exposes basically two API REST GET endpoints to retrieve a mocked list of users and products:
- /products 
- /users

These endpoints allow CORS from 'http://localhost:8080' origin for development purpose.  

This Server is used from the Vue-Dashboard-Example application that retrivies the data from this server with some API calls and updateW its internal state.

This server also exposes some static resources.
## Install
```
npm install
```

### Run locally
```
node index.js
```

Now you can retrieve user list at http://localhost:3000/users and product list at 
http://localhost:3000/products


## License


MIT

## Version

1.0.0



[@hapi/hapi Framework]: <https://hapi.dev/tutorials/?lang=en_US>