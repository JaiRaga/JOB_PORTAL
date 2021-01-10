const mongoose = require('mongoose')
const { Schema } = mongoose

const candidateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    shortlisted: {
        type: Boolean,
        default: false
    }
})

const Candidate = mongoose.model('Candidate', candidateSchema)

module.exports = Candidate