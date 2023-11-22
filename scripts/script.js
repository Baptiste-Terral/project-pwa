document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.getElementById("card-container");
    const cardLeft = document.getElementById("card-left");
    const cardRight = document.getElementById("card-right");
    const btnLeft = document.getElementById("btn-left");
    const btnRight = document.getElementById("btn-right");
  
    // Exemple d'éléments à afficher
    const elements = [
      { id: 1, image: "element1.jpg", name: "Élément 1" },
      { id: 2, image: "element2.jpg", name: "Élément 2" },
      // Ajoutez d'autres éléments si nécessaire
    ];
  
    let currentIndex = 0;
  
    // Affiche les éléments initiaux
    displayElements();
  
    // Gère le clic sur le bouton de gauche
    btnLeft.addEventListener("click", function () {
      handleButtonClick("left");
    });
  
    // Gère le clic sur le bouton de droite
    btnRight.addEventListener("click", function () {
      handleButtonClick("right");
    });
  
    function displayElements() {
      cardLeft.innerHTML = `<img src="${elements[currentIndex].image}" alt="${elements[currentIndex].name}"><p>${elements[currentIndex].name}</p>`;
      cardRight.innerHTML = `<img src="${elements[currentIndex + 1].image}" alt="${elements[currentIndex + 1].name}"><p>${elements[currentIndex + 1].name}</p>`;
    }
  
    function handleButtonClick(direction) {
      // Logique pour gérer les actions lorsque l'utilisateur clique sur gauche ou droite
      // (peut inclure des animations ou des actions spécifiques)
  
      // Exemple : Passage aux éléments suivants
      currentIndex += 2;
      if (currentIndex >= elements.length - 1) {
        currentIndex = 0;
      }
  
      // Affiche les nouveaux éléments
      displayElements();
    }
  });
  