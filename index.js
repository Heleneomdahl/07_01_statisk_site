console.log("index script loaded...");

const listContainer = document.querySelector(".container");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then(showList);

function showList(data) {
  console.log("Mine data er", data);

  const markup = data.map((elem) => ` <a class="knap" href="produktliste.html?category=${elem.category}">${elem.category}</a>`).join("");

  console.log("Min markup er", markup);
  listContainer.innerHTML = markup;
}
