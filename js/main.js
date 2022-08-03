// Scroll to animation
function reveal() {
    var reveals = document.querySelectorAll("[data-inview]");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("inview");
        } else {
        reveals[i].classList.remove("inview");
        }
    }
}

window.addEventListener("scroll", reveal);

// Scroll to Top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})