document.addEventListener("DOMContentLoaded", function() {
    const toggleInput = document.getElementById("toggle");
    toggleInput.addEventListener("change", function() {
      // Toggle the slider state
      const isChecked = toggleInput.checked;
      if (isChecked) {
        // If slider is on
        console.log("Slider is ON");
      } else {
        // If slider is off
        console.log("Slider is OFF");
      }
    });
  });
  