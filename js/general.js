document.querySelector("button").addEventListener("click", shadow);

function shadow() {
  document.querySelector("nav").classList.toggle("nav-shadow");
}

document.querySelector("#submit").addEventListener("click", submitted);
function submitted() {
  document.querySelector(".form_div").outerHTML =
    "<h3>Tak for det. Du vil modtage en mail snarest!</h3>";

  document.querySelector("#fredagsmail h3").style.padding = "50px 50px";
}
