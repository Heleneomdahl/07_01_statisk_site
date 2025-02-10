// data
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const myProductId = urlParams.get("id");

let productContainer = document.querySelector(".grid_1_1");

fetch(`https://kea-alt-del.dk/t7/api/products/${myProductId}`)
  .then((response) => response.json())
  .then((elem) => {
    productContainer.innerHTML = `   
        <div class="grid_1_1 ${elem.discount && "tekst_udsolgt"}">
            <div class="billede_produkt">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${myProductId}.webp" alt="rygsæk">
            </div>
            <div>
                <h2 class="productName">${elem.productdisplayname}</h2>
                
                <h3>Mærke:</h3>
                <p class="tekst_produkt">${elem.brandname}</p>
                
                <h3>Pris:</h3>
                <p class="tekst_produkt">${elem.price} DKK</p>
                
                <h3>Kategori:</h3>
                <p class="tekst_produkt">${elem.category}</p>
                
                <h3>Varenummer (id): </h3>
                <p class="tekst_produkt">${elem.id}</p>
                <div class="læg_i_kurv">
                    <a class="knap" href="produkt.html">Læg i indkøbskurv</a>
                </div>
            </div>
        </div>`;
  });
