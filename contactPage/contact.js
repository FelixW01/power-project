/* Appearing comment box*/
function toggleCommentBox() {
  const selectElement = document.getElementById("options-form");
  const commentBox = document.getElementById("commentBox");
  // commentBox.style.display = (selectElement.value !== "default") ? "block" : "none";
      if (selectElement.value !== "default") {
        commentBox.style.display = 'block';
      } else {
        commentBox.style.display = 'none';
  }
};

// Function to initialize the google translate element from google translate library
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'},'google_translate_element');
} 

// Event Listener that runs when DOM content is loaded (This is from materializecss)
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  const languageEl = document.getElementById('language-button');
  // Scans for document with any element with .sidenav, render it on the right side.
  // Create an array of instances, this is created by the .init method from materializecss
  var instances = M.Sidenav.init(elems, {edge: 'right'});

  // To open sidenav when user doesn't have access to the hamburger menu, listen to a click on language button and open sidenav
  // This was implimented because you can only have one language selector since google translate uses a specific ID
  languageEl.addEventListener('click', function() {
    // Something that's interesting is "instances" returns an array
    instances[0].open();
  });
});

// Form validation  
function validateForm() {
  document.querySelectorAll('.error').forEach(el => el.classList.add('hidden'))
  let isValid = true;
  const firstName = document.getElementById("firstName").value.trim();
  if (firstName === "") {
    document.getElementById("firstNameError").classList.remove('hidden');
    isValid = false; 
  } 

  const lastName = document.getElementById("lastName").value.trim();
  if (lastName === "") {
    document.getElementById("lastNameError").classList.remove('hidden');
    isValid = false;
  }

  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "" || !emailRegex.test(email)) {
    document.getElementById("emailError").classList.remove('hidden');
    isValid = false;
  }

  const phone = document.getElementById("phone").value.trim();
  const phoneRegex = /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
  if (phone === "" || !phoneRegex.test(phone)) {
    document.getElementById("phoneError").classList.remove('hidden');
    isValid = false;
  }
  
  const options = document.getElementById("options-form").value;
  if (options === "default") {
    document.getElementById("optionsError").classList.remove('hidden');
    isValid = false;
  } else {
    return isValid;
  } 
  
};


//  document.getElementById('contactForm').addEventListener('submit', function(event)) {
//    if (validateForm()) {
//       event.preventDefault();
//    }
//   }; 

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