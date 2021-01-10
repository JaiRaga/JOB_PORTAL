const mongoose = require('mongoose')
const { Schema } = mongoose

const shortlistedSchema = new Schema({
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
    shortlisted: {
        type: Boolean
    }
})

const Shortlisted = mongoose.model('Shortlisted', shortlistedSchema)

module.exports = Shortlisted