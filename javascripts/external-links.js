// Material's instant navigation replaces page content without a full reload.
document$.subscribe(function () {
  // Header repo widget and footer social icons are self-evidently external.
  const skip = ".md-source, .md-social";

  document.querySelectorAll('a[href^="http"]').forEach(function (link) {
    if (link.hostname === location.hostname || link.closest(skip)) return;

    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.title = "Opens in a new tab";

    if (!link.querySelector(".external-link-icon")) {
      link.setAttribute("aria-label", `${link.textContent.trim()} (opens in a new tab)`);
      const icon = document.createElement("span");
      icon.className = "external-link-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = "↗";
      link.appendChild(icon);
    }
  });
});
