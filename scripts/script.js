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
}

// Add event listener to "Refresh" button
refreshButton.addEventListener('click', refreshChoice);