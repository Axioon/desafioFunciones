const cuadrado1 = document.querySelector("#val1");
const cuadrado2 = document.querySelector("#val2");
const cuadrado3 = document.querySelector("#val3");
const cuadrado4 = document.querySelector("#val4");
const cuadrado5 = document.querySelector("#key");
const cuadrado6 = document.querySelector("#val5");

cuadrado1.addEventListener("click", pintar);
cuadrado2.addEventListener("click", pintar);
cuadrado3.addEventListener("click", pintar);
cuadrado4.addEventListener("click", pintar);

let div1, div2, div3;
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    cuadrado5.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    cuadrado5.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    cuadrado5.style.backgroundColor = "#87CEEB";
  } else if (event.key === "q") {
    if (div1) div1.remove();
    if (div2) div2.remove();
    if (div3) div3.remove();

    div1 = document.createElement("div");
    div1.classList.add("div1");
    cuadrado6.appendChild(div1);
  } else if (event.key === "w") {
    if (div1) div1.remove();
    if (div2) div2.remove();
    if (div3) div3.remove();
    div2 = document.createElement("div");
    div2.classList.add("div2");
    cuadrado6.appendChild(div2);
  } else if (event.key === "e") {
    if (div1) div1.remove();
    if (div2) div2.remove();
    if (div3) div3.remove();

    div3 = document.createElement("div");
    div3.classList.add("div3");
    cuadrado6.appendChild(div3);
  }
});

function pintar(e) {
  const elemento = e.target;
  elemento.style.backgroundColor = "black";
}
