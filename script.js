// Video Search Functionality
function searchVideos() {
    let input = document.getElementById("search-bar").value.toLowerCase();
    let videos = document.querySelectorAll(".video-container");

    videos.forEach(video => {
        let title = video.getAttribute("data-title").toLowerCase();
        if (title.includes(input)) {
            video.style.display = "block";
        } else {
            video.style.display = "none";
        }
    });
}

// Loading Animation - Show Content After 3 Seconds
window.onload = function() {
    setTimeout(function() {
        document.getElementById('loadingImage')?.style.display = 'none';
        document.getElementById('mainContent')?.style.display = 'block';
    }, 3000);
};
