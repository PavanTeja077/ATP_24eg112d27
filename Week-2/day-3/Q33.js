/*
ASSIGNMENT 4:
Movie Streaming Platform

Tasks:
1. filter() only "Sci-Fi" movies
2. map() to return "Title (rating)"
3. reduce() to find average movie rating
4. find() movie "Joker"
5. findIndex() of "Avengers"
*/

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
const movieTitles = movies.map(movie => `${movie.title} (${movie.rating})`);
const avgRating = movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
const jokerMovie = movies.find(movie => movie.title === "Joker");
const avengersIndex = movies.findIndex(movie => movie.title === "Avengers");

console.log(sciFiMovies, movieTitles, avgRating, jokerMovie, avengersIndex);