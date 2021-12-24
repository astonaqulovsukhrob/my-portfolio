const header = document.querySelector(".header");
const menuToggle = document.querySelector(".main-header_menu");
const nav = document.querySelector(".nav");
const mainIcon = document.querySelector(".main-header_icon");
const body = document.querySelector("body");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);
mainIcon.addEventListener("click", icon);
menuToggle.addEventListener("click", menu);

// Scroll section active
function scrollActive() {
  if (window.scrollY > header.offsetHeight) header.classList.add("active");
  else header.classList.remove("active");

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".main-nav a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".main-nav a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
// icon active
function icon() {
  mainIcon.classList.toggle("active");
  body.classList.toggle("active");
}

// menu active
function menu() {
  header.classList.toggle("active");
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
}

// Scroll Revail
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(
  ".main-home_title, .main-about_title, .main-about_img,  .skills-text",
  {}
);
sr.reveal(".main-home_img, .about__subtitle, .about__text, .main-skills_img", {
  delay: 400,
});
sr.reveal(".main-skills_data", { interval: 200 });
// sr.reveal(".home__social-icon", { interval: 200 });
