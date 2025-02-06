// data
const mycategori = new URLSearchParams(window.location.search).get("id");

let productId = 1526;
let productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then(showProducts);

function showProducts(data) {
  console.log(data);
  let markup = ` <p class="kategori_øverst"><a class="hjem_øverst" href="index.html">Hjem</a> > ${data.category} > ${data.subcategory} > ${data.articletype} > ${data.brandname} > ${data.productdisplayname} </p>
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
            </div> `;

  productContainer.innerHTML = markup;
}
