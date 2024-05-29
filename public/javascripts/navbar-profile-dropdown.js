document.addEventListener("DOMContentLoaded", function() { // Ensure elements are loaded

    // Get references to elements
    const profileButton = document.getElementById("profile-button");
    const profileDropdown = document.getElementById("navbar-profile-container");
    const accountButton = document.getElementById("navbar-profile-change-account-button");
    const accountDropdown = document.getElementById("navbar-profile-dropdown-account");
    const viewButton = document.getElementById("navbar-profile-dropdown-view-button");
    const viewDropdown = document.getElementById("navbar-profile-dropdown-view");
    const languageButton = document.getElementById('navbar-profile-dropdown-language-button');
    const languageDropdown = document.getElementById('navbar-profile-dropdown-language');  
    const limitedButton = document.getElementById('navbar-profile-dropdown-limited-button');
    const limitedDropdown = document.getElementById('navbar-profile-dropdown-limited');
    const countryButton = document.getElementById('navbar-profile-dropdown-country-button');
    const countryDropdown = document.getElementById('navbar-profile-dropdown-country');
    var announcementContainer = document.getElementById("announcement-container");
    var navbarCreateContainer = document.getElementById("navbar-create-container");

    // Toggle setting dropdown visibility on setting button click
    profileButton.addEventListener("click", function() {
      profileDropdown.classList.toggle("open");
      navbarCreateContainer.classList.remove("open");
      announcementContainer.classList.remove("open");
      accountDropdown.classList.remove("account-show");
      viewDropdown.classList.remove("view-show"); // Close view dropdown if open
      languageDropdown.classList.remove("language-show");
      limitedDropdown.classList.remove("limited-show");
      countryDropdown.classList.remove("country-show");
    });

    accountButton.addEventListener("click", function() {
        accountDropdown.classList.toggle("account-show");
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
      accountDropdown.classList.remove("account-show");
      limitedDropdown.classList.remove("limited-show");
      countryDropdown.classList.remove("country-show");
    });

    languageButton.addEventListener("click" , function(event){
      event.stopPropagation();
      languageDropdown.classList.toggle("language-show");
      limitedDropdown.classList.remove("limited-show");
      accountDropdown.classList.remove("account-show");
      countryDropdown.classList.remove("country-show");
      viewDropdown.classList.remove("view-show");
    })

    limitedButton.addEventListener("click" , function(event){
      event.stopPropagation();
      limitedDropdown.classList.toggle("limited-show");
      viewDropdown.classList.remove("view-show");
      accountDropdown.classList.remove("account-show");
      languageDropdown.classList.remove("language-show");
      countryDropdown.classList.remove("country-show");
    })
    countryButton.addEventListener("click" , function(event){
      event.stopPropagation();
      countryDropdown.classList.toggle("country-show");
      viewDropdown.classList.remove("view-show");
      accountDropdown.classList.remove("account-show");
      languageDropdown.classList.remove("language-show");
      limitedDropdown.classList.remove("limited-show");
    })
    // Close dropdowns on click outside unless clicking on the buttons themselves
    document.addEventListener("click", function(event) {
      if ( !accountButton.contains(event.target) && !viewButton.contains(event.target) && !languageButton.contains(event.target) && !limitedButton.contains(event.target) && !countryButton.contains(event.target)) {
        viewDropdown.classList.remove("view-show");
        languageDropdown.classList.remove("language-show");
        limitedDropdown.classList.remove("limited-show");
        countryDropdown.classList.remove("country-show");
        accountDropdown.classList.remove("account-show");
      }
    });
    document.getElementById("announcement-button").addEventListener("click", function() {
      announcementContainer.classList.toggle("open");
      navbarCreateContainer.classList.remove("open");
      profileDropdown.classList.remove("open");

  });
  document.getElementById("create-button").addEventListener("click", function() {
    navbarCreateContainer.classList.toggle("open");
    announcementContainer.classList.remove("open");
    profileDropdown.classList.remove("open");


  });
  
  });


