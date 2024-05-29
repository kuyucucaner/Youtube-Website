document.addEventListener("DOMContentLoaded" , function(){

    const shortCloseButton = document.getElementById("close-shorts");
    const shortsContainer = document.getElementById("short-row-first");
    const closedTextContainer = document.getElementById("when-shorts-closed");
    shortCloseButton.addEventListener("click" , function(){
        shortsContainer.style.display="none";
        closedTextContainer.style.display="block";
    })
    });