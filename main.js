const imgcontainer = document.querySelector(".images");
const prev = document.getElementById("previous");
const next = document.getElementById("next");

let x = 0;
let timeout;

prev.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timeout);
  updategellary();
});

next.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timeout);
  updategellary();
});

function updategellary() {
  imgcontainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timeout = setTimeout(() => {
    x = x - 45;

    updategellary();
  }, 3000);
}
updategellary();
