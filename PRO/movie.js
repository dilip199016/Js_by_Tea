const apiKey = 'f531333d637d0c44abc85b3e74db2186';
const baseUrl = 'https://api.themoviedb.org/3/movie/top_rated';

// Fetch movies and display them in cards
function fetchAndDisplayMovies(pageNumber) {
    const url = `${baseUrl}?api_key=${apiKey}&language=en-US&page=${pageNumber}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Process the data and create movie cards
            const movies = data.results;
            // Create and append movie cards to the movie-list div
        })
        .catch(error => console.error('Error fetching movies:', error));
}

// Initialize the page with the first page of movies
fetchAndDisplayMovies(1);
