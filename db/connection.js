const mongoose = require('mongoose');

mongoose.Promise = Promise;

let mongoURI = '';

if (process.env.NODE_ENV === 'production') {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = 'mongodb://localhost/atx_smallbusiness_db';
}

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(instance => {
    console.dir(
      `Connection Successful! Connected to db: ${instance.connections[0].name}`
    );
  })
  .catch(err => console.dir('Error! Database connection failed!', err));

module.exports = mongoose;
