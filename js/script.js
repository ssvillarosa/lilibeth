// Config
const SCROLL_OFFSET = -100;

// Page scrolling
const links = document.querySelectorAll("#navbar nav li a");
links.forEach((link) => {
  link.addEventListener("click", scrollToView.bind(link));
});

function scrollToView(e) {
  e.preventDefault();
  const id = this.getAttribute("href");
  const v = document.querySelector(id);
  const scrollPos =
    v.getBoundingClientRect().top + window.scrollY + SCROLL_OFFSET;
  window.scrollTo({ top: scrollPos, behavior: "smooth" });
}

// Animation fade in
const elems = document.querySelectorAll(".flex-item");
elemObserver = new IntersectionObserver(onVisible, {
  root: null,
  threshold: 0.3,
});

function onVisible(entries) {
  entries.forEach(function (entry) {
    if (entry.isVisible) return;
    if (entry.isIntersecting) {
      entry.target.classList.remove("hidden");
    }
  });
}

elems.forEach((elem) => {
  elemObserver.observe(elem);
  elem.classList.add("hidden");
});
