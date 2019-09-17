An efficient plugin for fastify which is a combination of KNEX builder, KNEX String case and Enhanced Pagination support.
It's easy to use and very light weight.

Install
----------
`
npm install fastify-knex-paginator --save
`

Example
---------
```js
const fastify = require('fastify');
const fastify-knex-paginator = require('fastify-knex-paginator');
//this will provide a fastify decorator "knex", which can be used for performing db operations
fastify.register(fastify-knex-paginator, dbConfig[process.env.NODE_ENV]);
```
Description
------------
```
1. Decorator "knex" will get created at the time of initialization of this plugin by passing environment related settings for the DB.

2. It's using knex-stringcase internally, which will convert snakeCase-camelCase and camelCase-snakeCase while doing db operations.

3. It's provide custom pagination which is directly coupled with knex builder, which can be directly accessed by "paginate()" function while building knex queries.
```
