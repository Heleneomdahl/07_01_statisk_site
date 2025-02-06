const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

// data

let productId = 1526;
let productContainer = document.querySelector(".productContainer");

const mycategori = new URLSearchParams(window.location.search).get("category");
console.log("productliste loader... med categori:", mycategori);

const productlist = document.querySelector(".tekst_produkt");
const overskrift = document.querySelector("h2");

overskrift.innerHTML = mycategori;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategori}`)
  // https://kea-alt-del.dk/t7/api/products/${productId} billeder
  .then((response) => response.json())
  .then(showProducts);

function showProducts(data) {
  console.log(data);
  markup = data
    .map(
      (data) =>
        ` <p class="kategori_øverst"><a class="hjem_øverst" href="index.html">Hjem</a> > ${data.category} > ${data.subcategory} > ${data.articletype} > ${data.brandname} > ${data.productdisplayname} </p>
        <div class="grid_1_1 box">
            <div class="billede_produkt">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="rygsæk">
            </div>
            <div>
                <h2 class="productName">${data.productdisplayname}</h2>
                <h3>Mærke:</h3>
                <p class="tekst_produkt">${data.brandname}</p>
                <h3>Pris:</h3>
                <p class="tekst_produkt">${data.price} DKK</p>
                <h3>Kategori:</h3>
                <p class="tekst_produkt">${data.category}</p>
                <h3>Varenummer (id): </h3>
                <p class="tekst_produkt">${data.id}</p>
                <div class="læg_i_kurv">
                    <a class="knap" href="produkt.html">Læg i indkøbskurv</a>
                </div>
            </div> `
    )
    .json("");
  console.log(markup);
  productContainer.innerHTML = markup;
}
