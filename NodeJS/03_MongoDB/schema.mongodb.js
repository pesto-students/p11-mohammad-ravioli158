use("MovieDB");
db.getCollection("movies").insertMany([
  {
    _id: 1,
    title: "Inception",
    releaseYear: 2010,
    genre: ["Science Fiction", "Action"],
    director: 1,
    actors: [1, 9],
  },
  {
    _id: 2,
    title: "Pulp Fiction",
    releaseYear: 1994,
    genre: ["Crime", "Drama"],
    director: 2,
    actors: [2, 3],
  },
  {
    _id: 3,
    title: "The Dark Knight",
    releaseYear: 2008,
    genre: ["Action", "Crime"],
    director: 1,
    actors: [4, 5],
  },
  {
    _id: 4,
    title: "Forrest Gump",
    releaseYear: 1994,
    genre: ["Drama", "Romance"],
    director: 4,
    actors: [6, 10],
  },
  {
    _id: 5,
    title: "Fight Club",
    releaseYear: 1999,
    genre: ["Drama", "Thriller"],
    director: 5,
    actors: [7, 8],
  },
  {
    _id: 6,
    title: "Gladiator",
    releaseYear: 2000,
    genre: ["Action", "Drama"],
    director: 6,
    actors: [11, 12],
  },
  {
    _id: 7,
    title: "The Matrix",
    releaseYear: 1999,
    genre: ["Action", "Science Fiction"],
    director: 7,
    actors: [13, 14],
  },
  {
    _id: 8,
    title: "The Shawshank Redemption",
    releaseYear: 1994,
    genre: ["Drama"],
    director: 3,
    actors: [15, 16],
  },
  {
    _id: 9,
    title: "Avatar",
    releaseYear: 2009,
    genre: ["Action", "Adventure", "Science Fiction"],
    director: 8, // Reference to director with _id: 8 (James Cameron)
    actors: [17, 18],
  },
  {
    _id: 10,
    title: "The Godfather",
    releaseYear: 1972,
    genre: ["Crime", "Drama"],
    director: 9, // Reference to director with _id: 9 (Francis Ford Coppola)
    actors: [19, 20],
  },
  {
    _id: 11,
    title: "Forrest Gump",
    releaseYear: 1994,
    genre: ["Drama", "Romance"],
    director: 4,
    actors: [21, 22],
  },
  {
    _id: 12,
    title: "Schindler's List",
    releaseYear: 1993,
    genre: ["Biography", "Drama", "History"],
    director: 10, // Reference to director with _id: 10 (Steven Spielberg)
    actors: [23, 24],
  },
  {
    _id: 13,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    releaseYear: 2001,
    genre: ["Action", "Adventure", "Drama"],
    director: 11, // Reference to director with _id: 11 (Peter Jackson)
    actors: [25, 26],
  },
  {
    _id: 14,
    title: "Titanic",
    releaseYear: 1997,
    genre: ["Drama", "Romance"],
    director: 12, // Reference to director with _id: 12 (James Cameron)
    actors: [27, 28],
  },
  {
    _id: 15,
    title: "The Silence of the Lambs",
    releaseYear: 1991,
    genre: ["Crime", "Drama", "Thriller"],
    director: 13, // Reference to director with _id: 13 (Jonathan Demme)
    actors: [29, 30],
  },
]);

db.getCollection("actors").insertMany([
  {
    _id: 1,
    name: "Leonardo DiCaprio",
    nationality: "American",
    moviesActedIn: [1],
  },
  {
    _id: 2,
    name: "John Travolta",
    nationality: "American",
    moviesActedIn: [2],
  },
  {
    _id: 3,
    name: "Samuel L. Jackson",
    nationality: "American",
    moviesActedIn: [2],
  },
  {
    _id: 4,
    name: "Christian Bale",
    nationality: "British",
    moviesActedIn: [3],
  },
  {
    _id: 5,
    name: "Heath Ledger",
    nationality: "Australian",
    moviesActedIn: [3],
  },
  {
    _id: 6,
    name: "Tom Hanks",
    nationality: "American",
    moviesActedIn: [4, 11],
  },
  {
    _id: 7,
    name: "Edward Norton",
    nationality: "American",
    moviesActedIn: [5],
  },
  {
    _id: 8,
    name: "Brad Pitt",
    nationality: "American",
    moviesActedIn: [5],
  },
  {
    _id: 9,
    name: "Tom Hardy",
    nationality: "British",
    moviesActedIn: [1],
  },
  {
    _id: 10,
    name: "Robin Wright",
    nationality: "American",
    moviesActedIn: [4],
  },
  {
    _id: 11,
    name: "Russell Crowe",
    nationality: "Australian",
    moviesActedIn: [6],
  },
  {
    _id: 12,
    name: "Joaquin Phoenix",
    nationality: "American",
    moviesActedIn: [6],
  },
  {
    _id: 13,
    name: "Keanu Reeves",
    nationality: "Canadian",
    moviesActedIn: [7],
  },
  {
    _id: 14,
    name: "Laurence Fishburne",
    nationality: "American",
    moviesActedIn: [7],
  },
  {
    _id: 15,
    name: "Tim Robbins",
    nationality: "American",
    moviesActedIn: [8],
  },
  {
    _id: 16,
    name: "Morgan Freeman",
    nationality: "American",
    moviesActedIn: [8],
  },
  {
    _id: 17,
    name: "Sam Worthington",
    nationality: "Australian",
    moviesActedIn: [9],
  },
  {
    _id: 18,
    name: "Zoe Saldana",
    nationality: "American",
    moviesActedIn: [9],
  },
  {
    _id: 19,
    name: "Marlon Brando",
    nationality: "American",
    moviesActedIn: [10],
  },
  {
    _id: 20,
    name: "Al Pacino",
    nationality: "American",
    moviesActedIn: [10],
  },
  {
    _id: 21,
    name: "Sally Field",
    nationality: "American",
    moviesActedIn: [11],
  },
  {
    _id: 22,
    name: "Robin Wright",
    nationality: "American",
    moviesActedIn: [11],
  },
  {
    _id: 23,
    name: "Liam Neeson",
    nationality: "Irish",
    moviesActedIn: [12],
  },
  {
    _id: 24,
    name: "Ralph Fiennes",
    nationality: "English",
    moviesActedIn: [12],
  },
  {
    _id: 25,
    name: "Elijah Wood",
    nationality: "American",
    moviesActedIn: [13],
  },
  {
    _id: 26,
    name: "Ian McKellen",
    nationality: "English",
    moviesActedIn: [13],
  },
  {
    _id: 27,
    name: "Kate Winslet",
    nationality: "English",
    moviesActedIn: [14],
  },
  {
    _id: 28,
    name: "Leonardo DiCaprio",
    nationality: "American",
    moviesActedIn: [14],
  },
  {
    _id: 29,
    name: "Jodie Foster",
    nationality: "American",
    moviesActedIn: [15],
  },
  {
    _id: 30,
    name: "Anthony Hopkins",
    nationality: "Welsh",
    moviesActedIn: [15],
  },
]);
db.getCollection("directors").insertMany([
  {
    _id: 1,
    name: "Christopher Nolan",
    nationality: "British",
    moviesDirected: [1, 3],
  },
  {
    _id: 2,
    name: "Quentin Tarantino",
    nationality: "American",
    moviesDirected: [2],
  },
  {
    _id: 3,
    name: "Frank Darabont",
    nationality: "American",
    moviesDirected: [8],
  },
  {
    _id: 4,
    name: "Robert Zemeckis",
    nationality: "American",
    moviesDirected: [4, 11],
  },
  {
    _id: 5,
    name: "David Fincher",
    nationality: "American",
    moviesDirected: [5],
  },
  {
    _id: 6,
    name: "Ridley Scott",
    nationality: "British",
    moviesDirected: [6],
  },
  {
    _id: 7,
    name: "The Wachowskis",
    nationality: "American",
    moviesDirected: [7],
  },
  {
    _id: 8,
    name: "James Cameron",
    nationality: "Canadian",
    moviesDirected: [9, 14],
  },
  {
    _id: 9,
    name: "Francis Ford Coppola",
    nationality: "American",
    moviesDirected: [10],
  },
  {
    _id: 10,
    name: "Steven Spielberg",
    nationality: "American",
    moviesDirected: [12],
  },
  {
    _id: 11,
    name: "Peter Jackson",
    nationality: "New Zealander",
    moviesDirected: [13],
  },
  {
    _id: 12,
    name: "Jonathan Demme",
    nationality: "American",
    moviesDirected: [15],
  },
  // Add more director records here
]);