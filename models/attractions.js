const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const attractionSchema = new Schema({
    name: {
        required: true,
        type: String,
        unique: true
    },
    location: {
        required: true,
        type: String
    },
    imageURL: {
        type: String,
        required: true
    }
});

const Attraction = mongoose.model ('Attraction', attractionSchema);

module.exports = Attraction;