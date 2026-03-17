document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      console.log(`Navigating to ${link.textContent}`);
    });
  });

  const form = document.querySelector(".lead-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you! A consultant will reach out soon.");
    });
  }
