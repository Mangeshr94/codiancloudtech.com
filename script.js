function showPage(pageId) {
  // Hide all sections
  document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));

  // Special case: Home has two sections (hero + why-choose)
  if (pageId === "home") {
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("home-why").classList.remove("hidden");
  } else {
    document.getElementById(pageId).classList.remove("hidden");
  }

  // Scroll to top when switching
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
