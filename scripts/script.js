scoresList1 = [0, 0];
scoresList2 = [0, 0];
scoresList3 = [0, 0];
scoresList4 = [0, 0];

const list1 = ['img/Hamburger.png', 'img/Pizza.webp', scoresList1]; 
const list2 = ['img/chocolatine.png', 'img/pain-au-chocolat.png', scoresList2];
const list3 = ['img/pikachu.png', 'img/salameche.png', scoresList3];
const list4 = ['img/minecraft-icon.png', 'img/lol-icon.png', scoresList4];
const lists = [list1, list2, list3, list4];
let currentList = lists[Math.floor(Math.random() * lists.length)]; // First displayed list is randomly selected

// Init localStorage
for (let i = 1; i <= lists.length; i++) {
  if (localStorage.getItem(`scoreList${i}_1`) === null) {
    localStorage.setItem(`scoreList${i}_1`, 0);
  }
  if (localStorage.getItem(`scoreList${i}_2`) === null) {
    localStorage.setItem(`scoreList${i}_2`, 0);
  }
}

// Get image elements
let imgLeft = document.getElementById('img-left');
let imgRight = document.getElementById('img-right');

// Get score display
let scoreDisplay = document.getElementById('score-display');

// Get card buttons
const cardLeft = document.getElementById('card-left');
const cardRight = document.getElementById('card-right');

// Function to disable card buttons
function disableCards() {
  cardLeft.disabled = true;
  cardRight.disabled = true;
}

// Function to update the images
function updateImages() {
  imgLeft.src = currentList[0];
  imgRight.src = currentList[1];
}

// Update event listeners
cardLeft.addEventListener('click', () => {
  if (currentList) {
    currentList[2][0] += 1;
    localStorage.setItem(`scoreList${lists.indexOf(currentList) + 1}_1`, currentList[2][0]); // Save score to localStorage
    updateScoreDisplay();
    disableCards();
  } else {
    console.error('currentList is null');
  }
});

cardRight.addEventListener('click', () => {
  if (currentList) {
    currentList[2][1] += 1;
    localStorage.setItem(`scoreList${lists.indexOf(currentList) + 1}_2`, currentList[2][1]); // Save score to localStorage
    updateScoreDisplay();
    disableCards();
  } else {
    console.error('currentList is null');
  }
});

// Function to update score display
function updateScoreDisplay() {
  if (currentList && Array.isArray(currentList) && currentList.length > 2) {
    const listIdentifier = lists.indexOf(currentList) + 1; // List number (1, 2 or 3)
    const score1 = localStorage.getItem(`scoreList${listIdentifier}_1`); // Get score from localStorage
    const score2 = localStorage.getItem(`scoreList${listIdentifier}_2`); // Get score from localStorage

    if (score1 !== null) {
      currentList[2][0] = Number(score1);
    } else {
      console.error(`Score 1 for list ${listIdentifier} could not be retrieved from localStorage.`);
    }

    if (score2 !== null) {
      currentList[2][1] = Number(score2);
    } else {
      console.error(`Score 2 for list ${listIdentifier} could not be retrieved from localStorage.`);
    }

    scoreDisplay.textContent = `Total score: ${currentList[2][0]} - ${currentList[2][1]}`;
  } else {
    console.error('currentList is not defined, not an array, or does not have at least three elements.');
  }
}

// Function to refresh choice
function refreshChoice() {
  if (currentList) {
    cardLeft.disabled = false;  
    cardRight.disabled = false;

    // Get a random list
    const list = getRandomList();
    updateScoreDisplay();

    // Set image src to images from the random list
    updateImages();
  } else {  
    console.error('currentList is not defined or not in the expected format.');
  }
}

// Add event listener to "Refresh" button
const refreshButton = document.getElementById('option-new-list');
refreshButton.addEventListener('click', refreshChoice);

// Initialize score display
updateScoreDisplay();
// Initialize images
updateImages();

function getRandomList() {
  let newList;
  do {
    const index = Math.floor(Math.random() * lists.length);
    newList = lists[index];
  } while (newList === currentList);
  currentList = newList;
  return newList;
}
