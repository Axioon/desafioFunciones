const ele = document.getElementById("ele1");

function pintar(elemento, color = "green") {
  elemento.style.backgroundColor = color;
}
ele.addEventListener("click", function (e) {
  const elemento = e.target;

  pintar(elemento, "yellow");
});
