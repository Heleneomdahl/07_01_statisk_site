
let knap = document.querySelector(".knap");

const mycategori = new URLSearchParams(window.location.search).get("category");
console.log("productliste loader... med categori:", mycategori);

const productlist = document.querySelector(".tekst_produkt");
const overskrift = document.querySelector("h2");


  .then((response) => response.json())
  .then(showList);

function showList(data) {
  console.log(data);
  markup = data
    .map(
      (category) =>
        ` <h1>Kategorier</h1>
        <div class=”category_list_container”>
            <a class="knap" href="produktliste.html">T-shirts</a>
            <a class="knap" href="produktliste.html">Trøjer</a>
            <a class="knap" href="produktliste.html">Bukser</a>
            <a class="knap" href="produktliste.html">Shorts</a>
            <a class="knap" href="produktliste.html">Sport</a>
            <a class="knap" href="produktliste.html">Accessories</a>
        </div> `
    )
    .json("");
  console.log(markup);
  knap.innerHTML = markup;
}
