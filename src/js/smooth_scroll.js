const links = document.querySelectorAll(".nav ul li a");
const stickyLinks = document.querySelectorAll(".nav_sticky ul li a");

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 200;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

for (const link of stickyLinks) {
  link.addEventListener("click", clickHandler);
}
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
