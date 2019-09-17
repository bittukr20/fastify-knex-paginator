An efficient plugin for fastify which is a combination of KNEX builder, KNEX String case and Enhanced Pagination support.
It's easy to use, very light weight.

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