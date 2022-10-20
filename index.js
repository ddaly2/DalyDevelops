const navLinks = document.querySelector(".nav_links");
const navToggle = document.querySelector(".nav-toggle");
const year = new Date().getFullYear();
const copyright = document.querySelector(".copyright");

copyright.innerHTML = `© ${year}, Dalton Daly.`

navToggle.addEventListener("click", () => {
  const visibility = navLinks.getAttribute("data-visible");

  if (visibility === "false") {
    navLinks.setAttribute("data-visible", "true");
    document.querySelector(".nav-toggle").innerHTML = `<i class="fa-solid fa-x"></i>`;
  } else {
    navLinks.setAttribute("data-visible", "false");
    document.querySelector(".nav-toggle").innerHTML = `<i class="fa-sharp fa-solid fa-bars"></i>`;
  }

});





