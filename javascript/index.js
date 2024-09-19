document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelector(".nav_links");
  const navToggle = document.querySelector(".nav-toggle");

  navToggle.addEventListener("click", () => {
    const visibility = navLinks.getAttribute("data-visible");

    if (visibility === "false") {
      navLinks.setAttribute("data-visible", "true");
      document.querySelector(
        ".nav-toggle"
      ).innerHTML = `<i class="fa-solid fa-x"></i>`;
    } else {
      navLinks.setAttribute("data-visible", "false");
      document.querySelector(
        ".nav-toggle"
      ).innerHTML = `<i class="fa-sharp fa-solid fa-bars"></i>`;
    }
  });

  function loadFooter() {
    fetch("footer.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("footer-placeholder").innerHTML = data;
        updateDate();
      })
      .catch((error) => console.error('Error loading footer:', error));
  }

  function updateDate() {
    const year = new Date().getFullYear();
    console.log(year);
    const copyright = document.querySelector(".copyright");
    if (copyright) {
      copyright.innerHTML = `© ${year}, Dalton Daly.`;
    }
  }

  loadFooter();
});