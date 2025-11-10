const currentPage = window.location.pathname.split("/").pop();

// Select all navigation links
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");

  if (
    href === currentPage ||
    (currentPage === "" && href === "projects.html")
  ) {
    // Active link styles
    link.classList.add("text-(--black)", "font-medium");
    link.classList.remove("text-(--textdark)");
  } else {
    // Inactive link styles
    link.classList.add("text-(--textdark)");
    link.classList.remove("text-(--black)", "font-medium");
  }
});
