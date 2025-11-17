const form = document.getElementById("quotationsAdd");
const text = document.getElementById("textQuotation");

const textAuthor = document.getElementById("textAuthor");
const quoteList = document.getElementById("quote-list");

form.addEventListener("submit", readForm);

function readForm(event) {
  event.preventDefault(); // Pour ne pas que la page se recharge.

  const quote = text.value;
  const author = textAuthor.value;

  addQuote(quote, author);
}

let countQuote = 0;

function addQuote(quote, author) {
  const div = document.createElement("div");
  div.classList.add("quote");

  div.innerHTML = `

    <p class="text">Citation : ${quote}</p>
    <p class="author">Auteur.ice : ${author}</p>
  `;

  quoteList.appendChild(div);

  countQuote += 1;

  const count = document.getElementById("count");

  count.innerHTML = `Le nombre de citations que tu as généré est de :  ${countQuote}`;
}

console.log(countQuote);
