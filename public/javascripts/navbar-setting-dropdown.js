document.addEventListener("DOMContentLoaded", function() { // Ensure elements are loaded

    // Get references to elements
    const settingButton = document.getElementById("setting-button");
    const settingDropdown = document.getElementById("navbar-setting-dropdown-menu");
    const viewButton = document.getElementById("navbar-setting-dropdown-view-button");
    const viewDropdown = document.getElementById("navbar-setting-dropdown-view");
    const languageButton = document.getElementById('navbar-setting-dropdown-language-button');
    const languageDropdown = document.getElementById('navbar-setting-dropdown-language');  
    const limitedButton = document.getElementById('navbar-setting-dropdown-limited-button');
    const limitedDropdown = document.getElementById('navbar-setting-dropdown-limited');
    const countryButton = document.getElementById('navbar-setting-dropdown-country-button');
    const countryDropdown = document.getElementById('navbar-setting-dropdown-country');
    // Toggle setting dropdown visibility on setting button click
    settingButton.addEventListener("click", function() {
      settingDropdown.classList.toggle("show");
      viewDropdown.classList.remove("view-show"); // Close view dropdown if open
      languageDropdown.classList.remove("language-show");
      limitedDropdown.classList.remove("limited-show");
      countryDropdown.classList.remove("country-show");
    });

    // Toggle view dropdown visibility on view button click
    viewButton.addEventListener("click", function(event) {
      event.stopPropagation(); // Prevent click event from bubbling up to document
      viewDropdown.classList.toggle("view-show");
      languageDropdown.classList.remove("language-show");
      limitedDropdown.classList.remove("limited-show");
      countryDropdown.classList.remove("country-show");
    });

    languageButton.addEventListener("click" , function(event){
      event.stopPropagation();
      languageDropdown.classList.toggle("language-show");
      limitedDropdown.classList.remove("limited-show");
      countryDropdown.classList.remove("country-show");
      viewDropdown.classList.remove("view-show");
    })

    limitedButton.addEventListener("click" , function(event){
      event.stopPropagation();
      limitedDropdown.classList.toggle("limited-show");
      viewDropdown.classList.remove("view-show");
      languageDropdown.classList.remove("language-show");
      countryDropdown.classList.remove("country-show");
    })
    countryButton.addEventListener("click" , function(event){
      event.stopPropagation();
      countryDropdown.classList.toggle("country-show");
      viewDropdown.classList.remove("view-show");
      languageDropdown.classList.remove("language-show");
      limitedDropdown.classList.remove("limited-show");
    })
    // Close dropdowns on click outside unless clicking on the buttons themselves
    document.addEventListener("click", function(event) {
      if (!settingButton.contains(event.target) && !viewButton.contains(event.target) && !languageButton.contains(event.target) && !limitedButton.contains(event.target) && !countryButton.contains(event.target)) {
        settingDropdown.classList.remove("show");
        viewDropdown.classList.remove("view-show");
        languageDropdown.classList.remove("language-show");
        limitedDropdown.classList.remove("limited-show");
        countryDropdown.classList.remove("country-show");
      }
    });
  
  });


  //yeni bir javascript oluştur

