const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const mycategory = urlParams.get("category");

console.log("Kategori:", mycategory);

let productContainer = document.querySelector("container");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  // https://kea-alt-del.dk/t7/api/products/${productId} billeder
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  console.log(data);
  const markup = data
    .map(
      (element) =>
        ` <p class="kategori_øverst"><a class="hjem_øverst" href="index.html">Hjem</a> > ${element.category}</p>
        <div class="grid_1_1 box">
            <div class="billede_produkt">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="rygsæk">
            </div>
            <div>
                <h2 class="productName">${element.productdisplayname}</h2>
                <h3>Mærke:</h3>
                <p class="tekst_produkt">${element.brandname}</p>
                <h3>Pris:</h3>
                <p class="tekst_produkt">${element.price} DKK</p>
                <h3>Kategori:</h3>
                <p class="tekst_produkt">${element.category}</p>
                <h3>Varenummer (id): </h3>
                <p class="tekst_produkt">${element.id}</p>
                <div class="læg_i_kurv">
                    <a class="knap" href="produkt.html">Læg i indkøbskurv</a>
                </div>
            </div> `
    )
    .json("");
  console.log(markup);
  productContainer.innerHTML = markup;
}
