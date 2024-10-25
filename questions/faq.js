const currentYear = new Date().getFullYear();

// Event Listener that runs when DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var elem = document.querySelector(".collapsible.expandable");
  var instance = M.Collapsible.init(elem, {
    accordion: true,
  });

  // Scans for document with any element with .sidenav, render it on the right side.
  var instances = M.Sidenav.init(elems, { edge: "right" });
});

// Get the current year to create a dynamic footer
document.getElementById("current-year").textContent = currentYear;
