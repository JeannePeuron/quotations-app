const text = document.getElementById("textQuotation");
const author = document.getElementById("author");
const search = document.getElementById("search");

function recoverParam() {
  search.addEventListener(`click`, () => {
    // console.log(text.value);
    // console.log(author.value);
  });
}

recoverParam();
