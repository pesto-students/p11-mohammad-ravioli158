const router = require('express').Router()
const jobsController = require('../controllers/jobs.controller')

const verifyToken = require('../middlewares/verifyToken')
// Fetch all jobs
router.get("/", verifyToken, jobsController.getAllJobs);
// fetch job by id
router.get("/:id", verifyToken, jobsController.getJobById);



module.exports = router