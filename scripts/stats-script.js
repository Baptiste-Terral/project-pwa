// Get the stats container
let statsContainer = document.getElementById('stats-container');

// Get the scores from localStorage
const scoresList1 = JSON.parse(localStorage.getItem('scoresList1'));
const scoresList2 = JSON.parse(localStorage.getItem('scoresList2'));
const scoresList3 = JSON.parse(localStorage.getItem('scoresList3'));
const scoresList4 = JSON.parse(localStorage.getItem('scoresList4'));

const list1 = ['img/Hamburger.png', 'img/Pizza.webp', scoresList1]; 
const list2 = ['img/chocolatine.png', 'img/pain-au-chocolat.png', scoresList2];
const list3 = ['img/pikachu.png', 'img/salameche.png', scoresList3];
const list4 = ['img/minecraft-icon.png', 'img/lol-icon.png', scoresList4];
const lists = [list1, list2, list3, list4];

// Run this code when the stats page is loaded
window.onload = function() {
  // Clear the stats container
  statsContainer.innerHTML = '';

  // Generate new HTML for each list
  lists.forEach(function(list, index) {
    // Get the scores from localStorage
    let score1 = localStorage.getItem(`scoreList${index + 1}_1`);
    let score2 = localStorage.getItem(`scoreList${index + 1}_2`);

    // Create img elements for the images
    let img1 = document.createElement('img');
    img1.src = list[0];
    img1.style.width = '100px'; // Set the width to make the images smaller
    let img2 = document.createElement('img');
    img2.src = list[1];
    img2.style.width = '100px'; // Set the width to make the images smaller

    // Create a p element for the scores
    let p = document.createElement('p');
    p.textContent = `Score : ${score1} - ${score2}`;

    // Append the img and p elements to the stats container
    statsContainer.appendChild(img1);
    statsContainer.appendChild(img2);
    statsContainer.appendChild(p);
  });
};
