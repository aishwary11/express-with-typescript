"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.poolQuery = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'NewDB',
    password: 'aish',
    port: 5432
});
pool.connect();
const poolQuery = (queries, value) => pool.query(queries, value).then(result => result.rows).catch(err => err.stack);
exports.poolQuery = poolQuery;
