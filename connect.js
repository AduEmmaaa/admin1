const shop = document.getElementById("shop");
const shoplist = document.getElementById("shoplist");

shop.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default action of the link
  if ((shoplist.style.display = "none")) {
    shoplist.style.display = "block";
  } else {
    shoplist.style.display = "none";
  }
});
