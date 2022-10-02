// DOM map elements
const cityName = document.querySelector('.city-name');
const cityDesc = document.querySelector('.city-desc');
const cityMap = document.querySelector('.city-map');
const cityImg = document.querySelector('.city-img');

let currentCity = 0;

// Animated buttons
const flows = Array.from(document.querySelectorAll('.flow'));

for (let i = 1; i < flows.length; i++) {
  delay = i * 0.5;
  flows[i].style.animationDelay = delay + 's';
}

// Map buttons
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// Cities objects array with all information about different cities

const cities = [
  {
    name: 'Tel Aviv',
    desc: "I was born in Ramat Ha'Sharon, but my family moved to Tel Aviv when I was six years old. I've lived in this city for most of my life and I know it by heart. It's so vibrant and alive, there's always something happening no matter the time. True, it's not the most beautiful city, definitely the cleanest, but it's home!",
    map: 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d27046.671421552885!2d34.77676250145792!3d32.07374023668278!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sil!4v1664628238992!5m2!1sen!2sil',
    img: '../img/yoav-aziz-unsplash.jpg',
    alt: 'An avenue in Tel Aviv',
  },
  {
    name: 'Mombasa',
    desc: "After my first daughter was born, we moved to Mombasa for four years. It's a different world! Only one traffic light for the entire city, monkeys are the new stray cats, chapati, sukuma wiki and coconut milk, gorgeous beaches and the kindest people. I still miss the Kenyan coast.",
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d53607.82635418308!2d39.65141949777973!3d-4.056039643592951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sil!4v1664404893311!5m2!1sen!2sil',
    img: '../img/harshil-gudka-unsplash.jpg',
    alt: 'Camels on the beach in Mombasa',
  },
  {
    name: 'Stockholm',
    desc: "Hands down: best city ever! Stockholm is so pretty with its cobblestoned alleys, little secondhand shops, quaint cafes, Moomins and ABBA, summer sailing, winter skiing and beautiful parks. There's something so calming about this city, a sense of 'mysa', as if everyone is so content simply to be there.",
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d65156.68902333003!2d18.03442303781927!3d59.313810092704756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sil!4v1664365618738!5m2!1sen!2sil',
    img: '../img/linus-mimietz-unsplash.jpg',
    alt: 'Swedish flag over a cobblestoned street in Stockholm',
  },
  {
    name: 'Berkeley',
    desc: "My sister and her family moved to Berkeley, CA, almost ten years ago. While I'm always happy to visit just to see them again, I've grown to love this city. It's so diverse and multicultural, with its amazing selection of restuarants, bookstores and, of course, creepy Victorian houses.",
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23699.96706438139!2d-122.28403276177367!3d37.870782031301495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sil!4v1664628704413!5m2!1sen!2sil',
    img: '../img/jeremy-huang-unsplash.jpg',
    alt: 'A view over Berkeley',
  },
];

function displayCity() {
  cityName.innerText = cities[currentCity].name;
  cityDesc.innerText = cities[currentCity].desc;
  cityMap.src = cities[currentCity].map;
  cityImg.src = cities[currentCity].img;
  cityImg.alt = cities[currentCity].alt;
}

// Display previous city information

function displayPrev() {
  currentCity--;
  next.classList.remove('hidden');
  displayCity();
  if (currentCity === 0) {
    prev.classList.add('hidden');
  }
}

// Display next city information

function displayNext() {
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
