var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type : String
    },
    price: {
        type: Number,
        required: true
    }
});
