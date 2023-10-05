
//a) Find all movies released in a specific year.

db.movies.find({ releaseYear: 2010 })
//b) Find all movies in a specific genre.

db.movies.find({
    "genre": {
        $in: ["Drama"]
    }
})
//c) Find all movies directed by a specific director.

db.directors.aggregate([
    {
        $match: {
            name: 'Christopher Nolan'
        }
    },
    {
        $lookup: {
            from: "movies",
            localField: "_id",
            foreignField: "director",
            as: "movies"
        }
    },
    {
        $project: {
            _id: 0,
            name: 1,
            movie: "$movies.title",
            year: "$movies.releaseYear"
        }
    },
    {
        $unwind: "$movie"
    },
    {
        $unwind: "$year"
    }
])

// d) Find all movies that a specific actor acted in.

db.actors.aggregate([
    {
        $match: {
            name: 'John Travolta'
        }
    },
    {
        $unwind: "$moviesActedIn"
    },
    {
        $lookup: {
            from: "movies",
            localField: "moviesActedIn",
            foreignField: "_id",
            as: "movies"
        }
    },
    {
        $project: {
            name: 1,
            movie: "$movies.title"
        }
    },
    {
        $unwind: "$movie"
    }
])

// e) Find all directors from a specific nationality.
db.directors.find({
    nationality: "American"
})
// f) Find all actors from a specific nationality.
db.actors.find({
    nationality: "American"
}
)
