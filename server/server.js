const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const db = require('../db/connection.js')

app.use(express.static('client'));

const logger = (request, response, next) => {
  console.log(`Receiving request to ${request.url} with method ${request.method}`)
  next();
}

app.use('/', logger);


app.post('/users',
  function(req, res) {
    console.log('req: ', req);
    console.log('res: ', res);
    const query = `INSERT INTO users (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}')`;

    db.query(query, (err, result) => {
      if (err) { throw err; }
      console.log(result);
    })
})

app.post('/shipping', function(req, res) {
  const query = `INSERT INTO shippingInfo (address1, address2, city, state, zipCode) VALUES ('${req.body.address1}', '${req.body.address2}', '${req.body.city}', '${req.body.state}', ${req.body.zip})`
  db.query(query, (err, result) => {
    if(err) { throw err; }
    console.log(result);
  })
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})