const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const businessSchema = new Schema({ 
    business_id: String,
    name: String,
    address: String,
    city: String,
    state: String,
    postal_code: Number,
    latitude: Number,
    longitude: Number,
    

}
