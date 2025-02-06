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
        <article class="box">
 <div class="udsolgt_box">
            <img class="${elem.soldout && "udsolgt_billede"}" src="https://kea-alt-del.dk/t7/images/webp/640/${elem.id}.webp" alt="rygsæk">
            <div>
                <p class="udsolgt_tekst ${!elem.soldout && "hide"}">Udsolgt</p>
                </div>
</div>
            <h2>${elem.productdisplayname}</h2>
             <p>${elem.subcategory} | ${elem.brandname}</p>

            <div class="price">
                <p class="${!elem.discount && "hide"}">${elem.price - (elem.price * elem.discount) / 100} DKK <span class="rød_tekst">-${elem.discount}%</span></p>
              <p class="${elem.discount && "hide"}">${elem.price} DKK</p>
                <p class="${elem.discount ? "grå_tekst" : "hide"}">Oprindeligt: ${elem.price} DKK</p>
            </div>

            <a class="knap" href="produkt.html?id=${elem.id}">Se produkt</a>
            <div class="procent">
                    <p class="${elem.discount && "rabat"} ${!elem.discount && "hide"}">Deal</p>
            </div>

        </article>`
    )
    .join("");
  productContainer.innerHTML = markup;
}
