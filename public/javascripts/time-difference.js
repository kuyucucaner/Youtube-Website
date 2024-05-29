document.addEventListener("DOMContentLoaded", function() {
    var videoPublishTimes = document.querySelectorAll(".video-publish-time");
    
    videoPublishTimes.forEach(function(videoPublishTime) {
        var uploadDate = new Date(videoPublishTime.innerText);
        uploadDate.setMinutes(uploadDate.getMinutes() + uploadDate.getTimezoneOffset());
        var today = new Date();
        var timeDiff = Math.abs(today.getTime() - uploadDate.getTime());
        var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));

        var displayText = "";
        if (diffDays === 0) {
            displayText = "· bugün";
        } else if (diffDays === 1) {
            displayText = "· dün";
        } else if (diffDays < 2) {
            displayText ="·" + diffDays + " gün önce";
        } if (diffDays < 1) {
            displayText = "· Bugün";
        } else if (diffDays < 7) {
            if (Math.floor(diffDays) === 0) {
                displayText = "· 1 hafta önce";
            } else {
                displayText = "·" + Math.floor(diffDays) + " gün önce";
            }
        } else if (diffDays < 30) {
            displayText = "·" + Math.floor(diffDays / 7) + " hafta önce";
        } else if (diffDays < 365) {
            displayText = "·" + Math.floor(diffDays / 30) + " ay önce";
        } else {
            displayText = "·" + Math.floor(diffDays / 365) + " yıl önce";
        }
        

        // Değiştirilmiş metni içeren paragrafı güncelle
        videoPublishTime.innerText = displayText;
    });
});
