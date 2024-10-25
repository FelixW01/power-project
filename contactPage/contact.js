/* Appearing comment box*/
function toggleCommentBox() {
  const selectElement = document.getElementById('options-form');
  const commentBox = document.getElementById('commentBox');
  if (selectElement.value !== 'default') {
    commentBox.style.display = 'block';
  } else {
    commentBox.style.display = 'none';
  }
}

const firstName = document.getElementById("firstName").value.trim();
if (firstName === "") {
  document.getElementById().classList.remove('hidden');
  isValid = false;
}

/* Dynamic footer and hamburger nav bar code*/
const currentYear = new Date().getFullYear();

// Event Listener that runs when DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    // Scans for document with any element with .sidenav, render it on the right side.
    var instances = M.Sidenav.init(elems, {edge: 'right'});
  });

// Get the current year to create a dynamic footer
document.getElementById('current-year').textContent = currentYear;