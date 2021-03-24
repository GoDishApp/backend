const express = require('express');
const dotenv = require('dotenv');
const app = express();
// const timeout = require('connect-timeout');
const cors = require('cors');
const bodyParser = require('body-parser');

var PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} `);
});
