document.addEventListener("DOMContentLoaded", function() {
  // Get all links in the book
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    if (link.hostname !== window.location.hostname) {
      link.classList.add("external-link");
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
