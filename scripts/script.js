scoresList1 = [0, 0];
scoresList2 = [0, 0];
scoresList3 = [0, 0];

const list1 = ['img/Hamburger.png', 'img/Pizza.webp', scoreList1]; 
const list2 = ['img/chocolatine.png', 'img/pain-au-chocolat.png', scoreList2];]; 
const list3 = ['img/pikachu.png', 'img/salameche.png', scoreList3];
const lists = [list1, list2, list3];
let currentList = null;

// Load scores from localStorage
let scoreLeft = localStorage.getItem('scoreLeft') ? parseInt(localStorage.getItem('scoreLeft')) : 0;
let scoreRight = localStorage.getItem('scoreRight') ? parseInt(localStorage.getItem('scoreRight')) : 0;

// Get score display
const scoreDisplay = document.getElementById('score-display');

// Function to update score display
function updateScoreDisplay() {
    scoreDisplay.textContent = `Total score: ${scoreLeft} - ${scoreRight}`;
}

// Function to disable card buttons
function disableCards() {
  cardLeft.disabled = true;
  cardRight.disabled = true;
}

// Get card buttons
const cardLeft = document.getElementById('card-left');
const cardRight = document.getElementById('card-right');

// Update event listeners
cardLeft.addEventListener('click', () => {
  scoreLeft++;
  localStorage.setItem('scoreLeft', scoreLeft); // Save score to localStorage
  updateScoreDisplay();
  disableCards();
});

cardRight.addEventListener('click', () => {
  scoreRight++;
  localStorage.setItem('scoreRight', scoreRight); // Save score to localStorage
  updateScoreDisplay();
  disableCards();
});

// Initialize score display
updateScoreDisplay();

// Get "Refresh" button
const refreshButton = document.getElementById('option-new-list');

// Function to refresh choice
function refreshChoice() {
  scoreLeft = 0;
  scoreRight = 0;
  localStorage.setItem('scoreLeft', scoreLeft); // Reset score in localStorage
  localStorage.setItem('scoreRight', scoreRight); // Reset score in localStorage
  updateScoreDisplay();
  cardLeft.disabled = false;
  cardRight.disabled = false;

  // Get image elements
  const imageLeft = document.querySelector('#card-left img'); 
  const imageRight = document.querySelector('#card-right img'); 

  // Get a random list
  const list = getRandomList();

  // Set image src to images from the random list
  imageLeft.src = list[0];
  imageRight.src = list[1];
}

// Add event listener to "Refresh" button
refreshButton.addEventListener('click', refreshChoice);

function getRandomList() {
  let newList;
  do {
    const index = Math.floor(Math.random() * lists.length);
    newList = lists[index];
  } while (newList === currentList);
  currentList = newList;
  return newList;
}