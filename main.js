// Toggle hamburger menu
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// Close navbar when a link is clicked
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
  });
});

// Sticky header
let header = document.querySelector(".header");

window.onscroll = () => {
  if (window.scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
