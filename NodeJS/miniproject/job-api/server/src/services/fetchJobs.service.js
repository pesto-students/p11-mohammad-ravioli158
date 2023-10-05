const nodeCron = require("node-cron");
// TODO: Move URL to relatable folder
const url = "https://remoteok.io/api";

async function fetchJobs() {
    console.log("fetching jobs");
    // TODO: Logic for fetching jobs from remoteok.io/api
}
/**
 * FetchjobsTask fetches jobs from remoteok.io/api every 2 hours and stores in mongodb 
 */
const fetchJobsTask = nodeCron.schedule("* */2 * * *", fetchJobs, {
    scheduled: false,
});
// Log error
fetchJobsTask.on("error", (error) => {
    console.error("Job Fetch Task error:", error.message);
});

fetchJobsTask.on("stop", () => {
    console.log("Job Fetch task has stopped")
});

module.exports = fetchJobsTask;
