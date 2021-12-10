const navigasi = document.querySelectorAll("nav a");

for (const link of navigasi) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const tinggi = document.querySelector(href).offsetTop;

  scroll({
    top: tinggi-100,
    behavior: "smooth"
  });
}