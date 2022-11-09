const express = require('express'),
path = require('path'),
mysql = require('mysql'),
bodyParser = require('body-parser'),
util = require('util');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT;

const main = async () => {
  // database
  var pool = mysql.createPool({
    connectionLimit: process.env.DATABASE_MAX_CONNECTIONS,
    acquireTimeout: 30000,
    waitForConnections: true,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT
  });

  const query = util.promisify(pool.query).bind(pool);
  var result = await query('SELECT 1');
  app.set('query', query);
  console.log("mysql connection: stabilized")

  //routes
  app.get("/health", health);
  app.get("/customer", readCustomers);
  app.post("/customer", createCustomer);
  app.put("/customer/:id", updateCustomer);
  app.delete("/customer/:id", deleteCustomer);

  await app.listen(port);
  console.log(`server ready on port ${port}`);  

};

const health = async (req, res) => {
  res.json({code:200, message:"success"});
};

const readCustomers = async (req, res) => {
  var query = app.get('query');
  var customers = await query('SELECT * FROM customer');
  res.json({code:200, message:"success", content:customers});
};

const createCustomer = async (req, res) => {
  var query = app.get('query');
  const data = req.body;
  var customer = await query('INSERT INTO customer set ?', data);
  res.json({code:200, message:"success", content:{insertId:customer.insertId}});
};

const updateCustomer = async (req, res) => {
  var query = app.get('query');
  const { id } = req.params;
  const newCustomer = req.body;
  var updateResult = await query('UPDATE customer set ? where id = ?', [newCustomer, id]);
  res.json({code:200, message:"success", content:{affectedRows:updateResult.affectedRows}});
};

const deleteCustomer = async (req, res) => {
  var query = app.get('query');
  const { id } = req.params;
  var deleteResult = await query('DELETE FROM customer WHERE id = ?', [id]);
  res.json({code:200, message:"success", content:deleteResult});
};

(async function () {
  await main();
})();
