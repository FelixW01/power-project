const currentYear = new Date().getFullYear();

// Event Listener that runs when DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    // Scans for document with any element with .sidenav, render it on the right side.
    var instances = M.Sidenav.init(elems, {edge: 'right'});
  });

// Get the current year to create a dynamic footer
document.getElementById('current-year').textContent = currentYear;

const contentDiv = document.getElementById("content-div");

const contentData = {
    1: {
      title: "The Growing Need for Language Services in the U.S.",
      text: "In the United States, the demand for language services is rapidly increasing due to the growing number of non-English speakers. According to a recent census conducted by census.gov, over 66 million people speak a language other than English at home, and around 25 million of these individuals speak minimal English. This highlights the critical need for language services in various sectors, such as healthcare, education, legal services, and government.",
      fact:"Did you know, In a 2022 census taken by census.gov, 21.6% of the United States population speaks english as a secondary language. That's 66 million people, and that's why language services are critical for ensuring equitable access to education, healthcare, and government services.",
      href: "https://www.census.gov/newsroom/press-releases/2023/language-at-home-acs-5-year.html",
      src: "content-1.jpg",
      alt:"A diverse group of people sitting around a laptop, collaborating"
    },
    2: {
      title: "How Language Barriers Impact Daily Life",
      text: "Language barriers can greatly affect an individual's ability to navigate daily life in the U.S. From seeking healthcare to accessing education and legal services, the inability to communicate effectively in English creates challenges. Language services help bridge these gaps and allow for smoother integration into society.",
      fact: "Did you know that language barriers can turn simple tasks into a challenge? For someone who speaks limited English, ordering food at a restaurant might feel like a gargantuan task. Imagine trying to explain what you want when the menu is a puzzle of unfamiliar words.",
      href: "https://everydayspeech.com/sel-implementation/unpacking-everyday-communication-how-language-shapes-our-daily-interactions/",
      src: "content-2.jpeg",
      alt:"A diverse group of people holding up a sign with different languages"
    },
    3: {
      title: "The Role of Technology in Overcoming Language Barriers",
      text: "Technology is changing the way people navigate language barriers, providing more inclusive communication tools. With innovations like translation apps, wearable translation devices, and real-time speech recognition, these technologies are making it easier for non-English speakers to engage fully in society. By bridging the gap between languages, technology helps create a more connected and understanding world for everyone.",
      fact: "Did you know that in the United States, technology is helping bridge the communication gap. With tools like real-time translation apps and voice recognition technology, translation services has never been as accessible. technology is making it possible for everyone to connect, share, and enjoy their everyday experiences.",
      href: "https://www.linkedin.com/advice/3/how-can-technology-help-you-overcome-language-kg82e",
      src: "content-3.jpeg",
      alt:"A diverse group of people standing in a group using a phone for translation"
    }
  };

// For all li that's in the pagination Ul, add a click event listener
document.querySelectorAll('.pagination li').forEach(li => {
  li.addEventListener('click', function(event) {
    // check for which target is currently clicked, when clicked get the value of 'data-page' attribute to check which page is clicked.
    const clickedPage = event.currentTarget;
    const currentPage = clickedPage.getAttribute('data-page')
    // If a page is clicked, remove the class "Active" from all lists. Then add "Active" to the clicked page, run populateContent function
    // This makes sure there aren't multiple li's with the class "Active" which gives it the hightlighted effect.
    if (currentPage) {
      document.querySelectorAll('.pagination li').forEach(li => li.classList.remove('active'))
      clickedPage.classList.add('active');
      populateContent(currentPage)
    }
  })
})


// Populates content depending on the currentPage data-page value.
// This only runs on load and when the click event listener is triggered.
function populateContent(currentPage) {
    contentDiv.innerHTML = "";

    let cardTemplate = `
          <p>${contentData[currentPage].fact}</p>
            <a
              class="waves-effect waves-light btn"
              id="hero-button"
              href="${contentData[currentPage].href}"}
              alt="${contentData[currentPage].alt}"
              >Learn More</a
            >
            <div class="row" id="content-card">
                <div class="card">
                  <div class="card-image">
                    <img src="./public/Images/${contentData[currentPage].src}" />
                  </div>
                  <div class="card-content" id="content-card-content">
                    <p class="card-title">${contentData[currentPage].title}</p>
                    <p>${contentData[currentPage].text}</p>
                  </div>
                </div>
            </div>`

        contentDiv.innerHTML += cardTemplate;
  }

// Populate first ontent on page load
populateContent(1)