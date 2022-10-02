// DOM elements

const form = document.querySelector('form');
const inputs = Array.from(document.querySelectorAll('input'));
const submitButton = document.querySelector('.submit');
const requiredFields = Array.from(document.querySelectorAll('[required]'));

// Confirm that all required form fields are filled before enabling submit button

submitButton.disabled = true;

function validateForm() {
  if (!requiredFields.every(e => e.value)) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

form.addEventListener('keyup', validateForm);
