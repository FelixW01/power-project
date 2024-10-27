const currentYear = new Date().getFullYear();

// Get the current year to create a dynamic footer
document.getElementById("current-year").textContent = currentYear;

// Function to initialize the google translate element from google translate library
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

// Event Listener that runs when DOM content is loaded (This is from materializecss)
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  const languageEl = document.getElementById("language-button");
  // Scans for document with any element with .sidenav, render it on the right side.
  // Create an array of instances, this is created by the .init method from materializecss
  var instances = M.Sidenav.init(elems, { edge: "right" });

  // To open sidenav when user doesn't have access to the hamburger menu, listen to a click on language button and open sidenav
  // This was implimented because you can only have one language selector since google translate uses a specific ID
  languageEl.addEventListener("click", function () {
    // Something that's interesting is "instances" returns an array
    instances[0].open();
  });
});
