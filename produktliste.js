const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const mycategory = urlParams.get("category");

console.log("Kategori:", mycategory);

let productContainer = document.querySelector(".container");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  // https://kea-alt-del.dk/t7/api/products/${productId} billeder
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  console.log(data);
  const markup = data
    .map(
      (elem) => `
  <article><h2>${elem.productdisplayname}</h2></article>
  `
    )
    .join("");
  productContainer.innerHTML = markup;
}
