var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function () {
  document.querySelector(".container").classList.toggle("show-menu");
  document.getElementById("icon-hamburguer").className = "fas fa-times";
});