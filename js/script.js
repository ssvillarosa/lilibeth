const SCROLL_OFFSET = -100;
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
