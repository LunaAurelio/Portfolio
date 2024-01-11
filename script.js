document.addEventListener("DOMContentLoaded", function () {
  const animateOnScrollElements =
    document.querySelectorAll(".animate-on-scroll");

  function checkScroll() {
    animateOnScrollElements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("animated");
      }
    });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  checkScroll();
  window.addEventListener("scroll", checkScroll);
});
