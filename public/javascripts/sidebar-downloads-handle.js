function toggleSidebar() {
    var sidebar = document.getElementById("my-sidebar");
    var downloadContainer = document.getElementById("download-container");
    const secondLine = document.querySelectorAll(".sidebar-links-second");
    const thirdLine = document.querySelectorAll(".sidebar-links-third")
    const fourthLine = document.querySelectorAll(".sidebar-links-fourth")
    const fifthLine = document.querySelectorAll(".sidebar-links-fifth")
    const sixthLine = document.querySelectorAll(".sidebar-links-sixth")
    const seventhLine = document.querySelectorAll(".sidebar-links-seventh")
    if (sidebar.style.width === "16%") {
        sidebar.style.width = "70px";
        secondLine.forEach(function(element) {
            element.style.display = "none";
        });
        thirdLine.forEach(function(element) {
            element.style.display = "none";
        });     fourthLine.forEach(function(element) {
            element.style.display = "none";
        });     fifthLine.forEach(function(element) {
            element.style.display = "none";
        });     sixthLine.forEach(function(element) {
            element.style.display = "none";
        });   seventhLine.forEach(function(element) {
            element.style.display = "none";
        });
        document.querySelectorAll(".sidebar-router-large").forEach(function(element) {
            element.classList.remove("sidebar-router-large");
            element.classList.add("sidebar-router-tiny");
            element.id = "sidebar-router-tiny";
        });
        downloadContainer.style.marginLeft = "6em"; // Sidebar genişliğine uygun olarak margin ayarla
        downloadContainer.style.marginRight = "3em"; // Sidebar genişliğine uygun olarak margin ayarla
    } else {
        sidebar.style.width = "16%";
        secondLine.forEach(function(element) {
            element.style.display = "block";
        });     thirdLine.forEach(function(element) {
            element.style.display = "block";
        });     fourthLine.forEach(function(element) {
            element.style.display = "block";
        });     fifthLine.forEach(function(element) {
            element.style.display = "block";
        });     sixthLine.forEach(function(element) {
            element.style.display = "block";
        });     seventhLine.forEach(function(element) {
            element.style.display = "block";
        });
        document.querySelectorAll(".sidebar-router-tiny").forEach(function(element) {
            element.classList.remove("sidebar-router-tiny");
            element.classList.add("sidebar-router-large");
            element.id = "sidebar-router-large";
        });
        downloadContainer.style.marginLeft = "auto"; // Sidebar genişliğine uygun olarak margin ayarla
        downloadContainer.style.marginRight = "auto"; // Sidebar genişliğine uygun olarak margin ayarla
    }
}
