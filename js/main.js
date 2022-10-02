const codingLanguages = ['HTML', 'CSS', 'JavaScript'];

// DOM elements
const footer = document.querySelector('.coding-credits');

// create footer with codingLanguages array

function createFooter(codingLanguages) {
  const last = codingLanguages.pop();
  return codingLanguages.length === 0
    ? last
    : [codingLanguages.join(', '), last].join(' and ');
}

footer.innerText = `This website has been created with: ${createFooter(
  codingLanguages
)}`;
