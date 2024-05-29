function formatViews(views) {
    if (views >= 1000000000) {
        return (views / 1000000000).toFixed(1) + ' Mr görüntülenme';
    } else if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + ' Mn görüntülenme';
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + ' B görüntülenme';
    } else {
        return views + ' görüntülenme';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var videoViews = document.querySelectorAll(".video-view");
    
    videoViews.forEach(function(videoView) {
        var views = parseInt(videoView.innerText);
        videoView.innerText = formatViews(views);
    });
});
