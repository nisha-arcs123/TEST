$(document).ready(function () {
    // Click event for hamburger icon
    $("#hamburger").click(function () {
      // Toggle the 'open' class for the hamburger icon
      $(this).toggleClass("open");
  
      // Show or hide the menu with a sliding effect
      $("#menu").slideToggle(300); // 300ms animation
    });
  });