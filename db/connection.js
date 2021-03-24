const mongoose = require('mongoose');

mongoose.Promise = Promise;

var mongoURI = '';

if (process.env.NODE_ENV === 'production') {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = 'mongodb://localhost/business_list';
}

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(instance => {
    console.dir(`Connected to db: ${instance.connections[0].name}`);
  })
  .catch(err => console.dir('Error! Database connection failed!', err));

mongoose.exports = mongoose;
