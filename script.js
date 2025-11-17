const form = document.getElementById("quotationsAdd");
const text = document.getElementById("textQuotation");
const textAuthor = document.getElementById("textAuthor");
const quoteList = document.getElementById("quote-list");

form.addEventListener("submit", readForm);

function readForm(event) {
  event.preventDefault();

  const quote = text.value;
  const author = textAuthor.value;

  addQuote(quote, author);
}

function addQuote(quote, author) {
  const div = document.createElement("div");
  div.classList.add("quote");

  div.innerHTML = `
    <p class="text">Citation : ${quote}</p>
    <p class="author">Auteur.ice : ${author}</p>
  `;

  quoteList.appendChild(div);
}

// Nous allons maintenant afficher les citations saisies directement sur la page.

// - Créez une fonction addQuote(quote, author) prenant deux paramètres (quote et author, du coup).
// - Dans cette fonction :
//     - Créez un élément <p> pour la citation et attribuez-lui la classe "text".
//     - Créez un élément <p> pour l’auteur/autrice et attribuez-lui la classe "author".
//     - Insérez les valeurs des paramètres quote et author dans ces éléments.
//     - Créez une <div> avec la classe "quote", puis ajoutez-y les deux paragraphes.
//     - Récupérez l’élément ayant l’id "quote-list" et ajoutez-y la nouvelle citation avec
// appendChild().
// - Modifiez le gestionnaire d’événements du formulaire pour appeler addQuote() au lieu
// de simplement afficher les valeurs dans la console.

// Besoin d'un coup de main ? Vous pouvez créer un élément en JS avec la fonction
// document.createElement('div')
