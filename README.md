# Idée
Notre idée de base est de créer une application permettant à l'utilisateur de faire un choix parmis deux propositions.
Les propositions peuvent être changées en appuyant sur un bouton de "refresh" dans une barre flottante cachée sur la gauche gauche de l'écran.
Cette dernière apparaît lorsque l'on passe le curseur ou que l'on clique dessus.

Dans notre première idée, les scores de chaque choix devaient être stockés dans une base de données (firebase), mais cela était trop chronophage à mettre en place.
C'est pourquoi pour le bien de notre projet, ils sont simplement stockés en local, dans le navigateur de l'utilisateur.

# Implémentation

L'architecture de notre application est simple, c'est-à-dire qu'il n'y a qu'une seule page qui est le coeur de notre PWA.

## Head :
La section ```<head>``` contient des métadonnées comme l'encodage, la vue par défaut, le titre de la page, l'icône, la feuille de style, et le fichier manifeste.

## Section Body :
La section ```<body>``` représente le contenu principal de la page.
Un conteneur principal (```<div class="container">```) englobe deux sections : les options et les cartes.
Les options sont des boutons avec des icônes, et les cartes sont représentées par deux boutons avec des images.
Le score est affiché dans une section dédiée (```<div id="score-display">```).
Un script JavaScript externe est inclus à la fin pour l'interaction.

## En résumé
En résumé, la page a été structurée avec deux blocs principaux : un pour les options et un autre pour les cartes, chacun contenant des éléments spécifiques comme des boutons et des images.

# URL de la PWA :
Notre PWA est hébergée sur Netlify à l'adresse suivante : <br>
https://scintillating-cannoli-6c3191.netlify.app/