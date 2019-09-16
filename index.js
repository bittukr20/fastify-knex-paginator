const fp = require("fastify-plugin");
const knex = require("knex");
const knexStringcase = require("knex-stringcase");
const setupPaginator = require("./paginator");

const connectionCheck = db => db.raw("select 1+1 as result");

async function knexPlugin(fastify, options) {
  try {
    const db = knex(knexStringcase(options));
    setupPaginator(db);
    await connectionCheck(db);
    fastify.decorate("knex", db);
  } catch (e) {
    fastify.log.error(`DB connection failed: ${process.env.NODE_ENV}`);
    throw Error("Connection Failed " + e);
  }
}

module.exports = fp(knexPlugin);
