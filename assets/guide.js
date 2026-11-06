/* Rome through time - guide page helpers */
(() => {
  "use strict";

  const links = [...document.querySelectorAll(".guide-toc a")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length || !("IntersectionObserver" in window)) return;

  const setCurrent = (id) => {
    links.forEach((link) => {
      link.classList.toggle("is-current", link.getAttribute("href") === `#${id}`);
    });
  };

  const initialId = location.hash.slice(1);
  setCurrent(sections.some((section) => section.id === initialId) ? initialId : sections[0].id);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setCurrent(visible[0].target.id);
    },
    { rootMargin: "-32% 0px -58% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
})();
