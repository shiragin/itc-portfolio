const codingLanguages = ['HTML', 'CSS', 'JavaScript'];

// HTML elements
const footer = document.querySelector('.credits');

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
