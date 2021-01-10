const mongoose = require('mongoose')
const { Schema } = mongoose

const rejectedSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    candidateCode: {
        type: String,
        required: true
    },
    rejected: {
        type: Boolean,
        required: true
    }
})

const Rejected = mongoose.model('Rejected', rejectedSchema)

module.exports = Rejected