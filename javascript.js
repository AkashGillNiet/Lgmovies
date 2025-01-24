function searchMovies() {
  const input = document.getElementById('search').value.toLowerCase();
  const movies = document.querySelectorAll('.movie');
  
  movies.forEach(movie => {
    const title = movie.querySelector('h2').textContent.toLowerCase();
    if (title.includes(input)) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}
