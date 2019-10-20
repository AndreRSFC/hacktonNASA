const mongoose =  require('mongoose')

const ObservatorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    release_date: {
        type: Date,
        required: true,
    },
}) 

module.exports = mongoose.model('ObservatorySchema', ObservatorySchema)