function searchMovies() {
    const query = document.getElementById('search').value;
    // Implement search functionality here
    alert('Searching for: ' + query);
}

function openMoviePage(movieId) {
    // Set movie details based on movieId
    document.getElementById('popup-title').innerText = movieId; // Replace with actual movie title
    document.getElementById('video-source').src = movieId + '.mp4'; // Replace with actual video source
    document.getElementById('video-player').load();
    document.getElementById('movie-popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('movie-popup').style.display = 'none';
}

function downloadMovie() {
    const movieId = document.getElementById('popup-title').innerText;
    // Implement download functionality here
    alert('Downloading: ' + movieId);
}

function watchOnline() {
    document.getElementById('movie-popup').style.display = 'flex';
}
