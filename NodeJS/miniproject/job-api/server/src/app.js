const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser')
const app = express();

/** Start Services */
const fetchJobsTask = require('./services/fetchJobs.service')
fetchJobsTask.start()

/**
 * Middleware
 */
app.use(cors({ origin: "http://localhost:3000", credentials: true },));
app.use(express.json());
app.use(cookieParser())
/**
 * Intialise database
 */
const initialiseDB = require('./config/mongodb.config')
try {
	initialiseDB()
} catch (error) {
	console.error('unable to initialiseDB')
}

/** Routes */
const jobsRoute = require('./routes/jobs.route')
const authRoute = require('./routes/auth.route')
app.use('/api/jobs', jobsRoute)
app.use('/api/auth', authRoute)
module.exports = app




