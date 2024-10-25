const currentYear = new Date().getFullYear();

// Event Listener that runs when DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  // Scans for document with any element with .sidenav, render it on the right side.
  var instances = M.Sidenav.init(elems, { edge: "right" });
});

