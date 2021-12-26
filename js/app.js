const header = document.querySelector(".header");
const menuToggle = document.querySelector(".main-header_menu");
const nav = document.querySelector(".nav");
const mainIcon = document.querySelector(".main-header_icon");
const body = document.querySelector("body");
const sections = document.querySelectorAll("section[id]");
const navLink = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", scrollActive);
mainIcon.addEventListener("click", icon);
menuToggle.addEventListener("click", menu);

// Scroll section active
function scrollActive() {
  // navbaar
  menuToggle.classList.remove("active");
  nav.classList.remove("active");

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

// animation bar
const main = document.querySelector("main");
const progressBar = document.querySelector("#progress-bar");

const animateProgressBar = () => {
  let sceollDistance = -main.getBoundingClientRect().top;
  let progressWidth =
    (sceollDistance /
      (main.getBoundingClientRect().height -
        document.documentElement.clientHeight)) *
    100;
  const value = Math.floor(progressWidth);
  progressBar.style.width = value + "%";
};
window.addEventListener("scroll", animateProgressBar);

// navbar link
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// icon active
function icon() {
  mainIcon.classList.toggle("active");
  body.classList.toggle("active");
}

// menu active
function menu() {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
}

// Scroll Revail
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
});

sr.reveal(
  ".main-home_title, .main-about_title, .main-about_img,  .skills-text",
 {}
);
sr.reveal(".main-home_img, .about__subtitle, .about__text, .main-skills_img", {
  delay: 400,
});
sr.reveal(
  ".main-skills_data,.work_img, .contact-input, .btn, .text, .footer-text, .footer-copy",
  {
    interval: 200,
  }
);
sr.reveal(".icon", { interval: 200 });

// Preserve 3d
VanillaTilt.init(document.querySelectorAll(".icon li a "), {
  max: 30,
  speed: 400,
});


// Spinner 
window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  const main = document.querySelector("main");

  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 200);
  }, 950);
});
