const mongoose = require("mongoose")
const { Schema } = mongoose;
// Define Schema
const jobSchema = new Schema({
    slug: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date
    },
    company: {
        type: String,
        required: true
    },
    company_logo: {
        type: String
    },
    position: {
        type: String,
        required: true
    },
    tags: [String],
    logo: String,
    description: {
        type: String,
        required: true
    },
    location: String,
    salay_min: Number,
    salary_max: Number,
    original: Boolean,
    url: String,
    apply_url: String

})
//  Create and export model
const JobModel = mongoose.model('jobs', jobSchema)
module.exports = JobModel