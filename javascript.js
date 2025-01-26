// Function to open the movie in a video player
function watchMovie(url) {
    window.open(url, '_blank'); // Open the movie in a new tab
}

// Function to download the movie
function downloadMovie(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = ''; // Download the file
    a.click();
}
