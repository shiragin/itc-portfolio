const form = document.querySelector('form');
const inputs = Array.from(document.querySelectorAll('input'));
const submitButton = document.querySelector('.submit');

// const firstName = document.getElementById('first-name');
// const email = document.getElementById('email');
// const interest = document.getElementById('interest');
// const comments = document.getElementById('comments');

const requiredFields = Array.from(document.querySelectorAll('[required]'));

submitButton.disabled = true;

function validateForm() {
  if (!requiredFields.every(e => e.value)) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

form.addEventListener('keyup', validateForm);

// inputs.forEach(input => {
//   console.log(input);
//   input.addEventListener('change', validateForm);
// });

// let runAgainAt = Date.now() + 100;

// function nextFrame() {
//   const now = Date.now();
//   if (runAgainAt >= now) {
//     if (!requiredFields.every(e => e.value)) {
//       submitButton.disabled = true;
//     } else {
//       submitButton.disabled = false;
//     }
//     runAgainAt = now + 100;
//   }
//   requestAnimationFrame(nextFrame);
// }

// nextFrame();
