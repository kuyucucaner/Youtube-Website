// JavaScript
document.addEventListener("DOMContentLoaded", function() {
  const slider = document.getElementById("you-past-slider");
  const sliderContainer = document.querySelector(".you-past-slider-container");

  fetch('/watch-history')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log(data);

          data.forEach(video => {
              const slide = document.createElement("div");
              slide.classList.add("slider-item");

              const sliderImage = document.createElement("img");
              sliderImage.classList.add("slider-item-image");
              sliderImage.src = video.thumbnail_url;

              const sliderTitle = document.createElement("div");
              sliderTitle.classList.add("slider-item-title");
              sliderTitle.textContent = video.title;

              const sliderName = document.createElement("p");
              sliderName.classList.add("slider-item-name");
              sliderName.textContent = video.display_name;

              const additionalInfoDiv = document.createElement("div");
              additionalInfoDiv.classList.add("additional-info");

              const sliderUploadDate = document.createElement("div");
              sliderUploadDate.classList.add("slider-item-publish-time");
              sliderUploadDate.textContent = video.upload_date;

              const sliderViewCount = document.createElement("p");
              sliderViewCount.classList.add("video-view");
              sliderViewCount.textContent = video.view_count;

              additionalInfoDiv.appendChild(sliderViewCount);
              additionalInfoDiv.appendChild(sliderUploadDate);

              slide.appendChild(sliderImage);
              slide.appendChild(sliderTitle);
              slide.appendChild(sliderName);
              slide.appendChild(additionalInfoDiv);

              slider.appendChild(slide);
          });

          formatAllViews();
          updatePublishTimes();

          let position = 0;
          const slideWidth = document.querySelector(".slider-item").offsetWidth + 20;

          function slide(direction) {
              position += direction * slideWidth;
              position = Math.min(position, 0);
              position = Math.max(position, -(data.length - 4) * slideWidth);
              slider.style.transform = `translateX(${position}px)`;
          }

          const prevBtn = document.querySelector(".prev-btn");
          const nextBtn = document.querySelector(".next-btn");

          prevBtn.addEventListener("click", () => slide(1));
          nextBtn.addEventListener("click", () => slide(-1));
      })
      .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
          throw error;
      });

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

  function formatAllViews() {
      var videoViews = document.querySelectorAll(".video-view");
      videoViews.forEach(function(videoView) {
          var views = parseInt(videoView.textContent);
          videoView.textContent = formatViews(views);
      });
  }

  function updatePublishTimes() {
      var videoPublishTimes = document.querySelectorAll(".slider-item-publish-time");
      videoPublishTimes.forEach(function(videoPublishTime) {
          var uploadDate = new Date(videoPublishTime.textContent);
          var today = new Date();
          var timeDiff = Math.abs(today.getTime() - uploadDate.getTime());
          var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));

          var displayText = "";
          if (diffDays === 0) {
              displayText = "· bugün";
          } else if (diffDays === 1) {
              displayText = "· dün";
          } else if (diffDays < 2) {
              displayText = "·" + diffDays + " gün önce";
          } else if (diffDays < 7) {
              displayText = "·" + diffDays + " gün önce";
          } else if (diffDays < 30) {
              displayText = "·" + Math.floor(diffDays / 7) + " hafta önce";
          } else if (diffDays < 365) {
              displayText = "·" + Math.floor(diffDays / 30) + " ay önce";
          } else {
              displayText = "·" + Math.floor(diffDays / 365) + " yıl önce";
          }
          
          videoPublishTime.textContent = displayText;
      });
  }
});
