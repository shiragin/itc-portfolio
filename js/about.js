// HTML map elements

const cityName = document.querySelector('.city-name');
const cityDesc = document.querySelector('.city-desc');
const cityMap = document.querySelector('.city-map');
const cityImg = document.querySelector('.city-img');

let currentCity = 0;

// buttons
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// Cities objects array with all information about different cities

const cities = [
  {
    name: 'Tel Aviv',
    desc: "I've lived in Tel Aviv for most of my life and I know it by heart. I love walking its streets and discovering all its little secrets. It's the ugliest little city that I've ever loved.",
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11936.246197136878!2d34.77401800628981!3d32.08019604538603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sil!4v1664325040174!5m2!1sen!2sil',
    img: '../img/reiseuhu-unsplash.jpg',
  },
  {
    name: 'Mombasa',
    desc: "Only one traffic light for the entire city, monkeys are the new stray cats, great Indian food, gorgeous beaches and the kindest people in the world. That's the kenyan coast!",
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63310.76587966553!2d39.628473146676455!3d-4.052005382990746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sil!4v1664363108748!5m2!1sen!2sil',
    img: '../img/harshil-gudka-unsplash.jpg',
  },
  {
    name: 'Stockholm',
    desc: "Best city ever! So pretty and cool. Secondhand shops, cool cafes, moomins and ABBA, summer sails and winter ski, there's always something to do here!",
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d65156.68902333003!2d18.03442303781927!3d59.313810092704756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sil!4v1664365618738!5m2!1sen!2sil',
    img: '../img/linus-mimietz-unsplash.jpg',
  },
];

function displayCity() {
  cityName.innerText = cities[currentCity].name;
  cityDesc.innerText = cities[currentCity].desc;
  cityMap.src = cities[currentCity].map;
  cityImg.src = cities[currentCity].img;
}

// Display previous city information

function displayPrev(e) {
  currentCity--;
  next.classList.remove('hidden');
  displayCity();
  if (currentCity === 0) {
    prev.classList.add('hidden');
  }
}

// Display next city information

function displayNext(e) {
  currentCity++;
  prev.classList.remove('hidden');
  displayCity();
  if (currentCity === cities.length - 1) {
    next.classList.add('hidden');
  }
}

// Event listeners for both buttons

prev.addEventListener('click', displayPrev);
next.addEventListener('click', displayNext);

// init
displayCity();
