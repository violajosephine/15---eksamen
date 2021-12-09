document.querySelector("#submit").addEventListener("click", submitted);
function submitted() {
  document.querySelector(".form_div").outerHTML =
    "<h3>Tak for det. Du vil modtage en mail snarest!</h3>";

  document.querySelector("#fredagsmail h3").style.paddingTop = "50px";

  document.querySelector("#meditation").classList.add("show");
}
