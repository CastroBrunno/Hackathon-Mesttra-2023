const { Pool } = require('pg');

const pool = new Pool({
  user: 'emily',
  host: 'itcpostgresql.postgres.database.azure.com',
  database: 'db010',
  password: '%&unsas_aew27010',
  port: 5432,
  ssl: true
})

export default pool;