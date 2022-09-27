const GITHUB_URL = 'https://api.github.com/users/shiragin';
const codingLanguages = ['HTML', 'CSS', 'JavaScript'];

// HTML elements
const footer = document.querySelector('.credits');
const card = document.querySelector('.card');
const profileImage = document.getElementById('profile-image');
const profileName = document.getElementById('profile-name');
const buttons = Array.from(document.querySelectorAll('.side'));
const accounts = Array.from(document.querySelectorAll('.account'));

// fetch profile image and name from github

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    profileImage.src = data.avatar_url;
    profileName.innerText = data.name;
  });

// create footer with codingLanguages array

function createFooter() {
  footerContent = `This website has been created with: ${codingLanguages[0]}`;
  if (codingLanguages.length > 1) {
    for (i = 1; i < codingLanguages.length - 1; i++) {
      footerContent += `, ${codingLanguages[i]}`;
    }
    footerContent += ` and ${codingLanguages[codingLanguages.length - 1]}`;
  }
  footer.innerText = footerContent;
}

createFooter();

// show card only after img loaded up
profileImage.addEventListener('load', function () {
  card.classList.remove('hidden');
});

// Add animation to side buttons when hovering on card

card.addEventListener('mouseover', function () {
  buttons.forEach(button => {
    button.classList.remove('hidden');
    button.classList.add('show');
  });
});

// Add animation to account buttons when clicking on card
card.addEventListener('click', function () {
  accounts.forEach(button => {
    button.classList.add('bounce');
    setTimeout(function () {
      button.classList.remove('bounce');
    }, 2000);
  });
});
