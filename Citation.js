// Base de données locale de citations
const citations = [
    "La vie est un mystère qu'il faut vivre, et non un problème à résoudre. - Gandhi",
    "Le succès, c'est se promener d'échec en échec tout en restant motivé. - Winston Churchill",
    "La seule façon de faire du bon travail est d'aimer ce que vous faites. - Steve Jobs",
    "L'éducation est l'arme la plus puissante pour changer le monde. - Nelson Mandela",
    "La simplicité est la sophistication suprême. - Léonard de Vinci",
    "Le plus grand risque est de ne prendre aucun risque. - Mark Zuckerberg",
    "Dans la vie, rien n'est à craindre, tout est à comprendre. - Marie Curie",
    "La créativité, c'est l'intelligence qui s'amuse. - Albert Einstein",
    "Les rêves donnent à la vie un sens qui échappe à la mort. - Abbé Pierre",
    "L'esprit a beau faire plus de chemin que le cœur, il ne va jamais si loin. - Proverbe chinois"
];

// Sélection de l'élément DOM pour afficher la citation
const citaDisplay = document.getElementById('citaDisplay');

// Fonction pour générer une nouvelle citation aléatoire
function citation() {
    const randomIndex = Math.floor(Math.random() * citations.length);
    const randomCitation = citations[randomIndex];
    citaDisplay.textContent = randomCitation;
}

// Fonction pour copier la citation dans le presse-papiers
function copie() {
    const textToCopy = citaDisplay.textContent;
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Citation copiée dans le presse-papiers !');
        }).catch(err => {
            console.error('Erreur lors de la copie : ', err);
        });
    }
}