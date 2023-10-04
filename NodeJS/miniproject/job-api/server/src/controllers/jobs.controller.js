const JobModel = require('../models/job.model')
module.exports = {
    // fetch all jobs. Filter and sort by query
    getAllJobs: async (req, res) => {
        try {

            const matchQuery = {}
            const filters = []

            //  Filter by minimum salary
            if (req.query.salary_min) {
                const salary_min = parseInt(req.query.salary_min) || 0
                filters.push({
                    salary_min: { $gte: salary_min }
                })
            }
            // Filter by maximum salary
            if (req.query.salary_max) {
                const salary_max = parseInt(req.query.salary_max) || Number.MAX_SAFE_INTEGER
                filters.push({
                    salary_max: { $lte: salary_max }
                })
            }
            // Filter by tags
            if (req.query.tags && req.query.tags.split(',').length > 0) {
                const tags = req.query.tags.split(',')
                filters.push({
                    tags: {
                        $in: tags
                    }
                })
            }
            // Default sort order by latest jobs
            let sortOrder = -1
            if (req.query.sortByDate === 'asc') {
                sortOrder = 1
            }

            if (filters.length > 0) {
                matchQuery.$and = filters
            }
            const page = parseInt(req.query.page) || 1
            const limit = 10 // Number of items per page
            const skip = (page-1) * limit

            const jobs = await JobModel.aggregate([
                { $match: matchQuery },
                { $sort: { date: sortOrder } },
                {$skip: skip},
                {$limit: limit},
                {
                    $project: {
                        slug: 1,
                        position: 1,
                        company: 1,
                        date: 1,
                        tags: 1,
                        salary_min: 1,
                        salary_max: 1
                    }
                }
            ])
            // Pagination 
            
            const totalJobs = await JobModel.countDocuments(matchQuery)
            const totalPages = Math.ceil(totalJobs / limit)
            //Response object
            const response= {
                jobs,
                pagination:{
                    totalJobs,
                    totalPages,
                    currentPage: page,
                    itemsPerPage: limit
                }
            }
            // Send jobs in response
            return res.status(200).json(response)
        } catch (error) {
            console.error("Error while retrieving jobs from db", error.message)
            return res.status(500).json({ message: 'Error while retrieving jobs' });
        }
    },

    // Fetch job by slug id
    getJobById: async (req, res) => {
        try {
            const id = req.params.id
            const job = await JobModel.findOne({ "slug": id })
            return res.status(200).json(job);
        } catch (error) {
            return res.status(500).json({ message: 'Error while getting job details' });
        }
    },

}