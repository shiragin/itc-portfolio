const submitButton = document.querySelector('.submit');

// const firstName = document.getElementById('first-name');
// const email = document.getElementById('email');
// const interest = document.getElementById('interest');
// const comments = document.getElementById('comments');

const requiredFields = Array.from(document.querySelectorAll('[required]'));

submitButton.disabled = true;

let runAgainAt = Date.now() + 100;

function nextFrame() {
  const now = Date.now();
  if (runAgainAt >= now) {
    if (!requiredFields.every(e => e.value)) {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
    runAgainAt = now + 100;
  }
  requestAnimationFrame(nextFrame);
}

nextFrame();
