const header = document.querySelector(".header"),
  menuToggle = document.querySelector(".main-header_menu"),
  nav = document.querySelector(".nav"),
  mainIcon = document.querySelector(".main-header_icon"),
  body = document.querySelector("body"),
  sections = document.querySelectorAll("section[id]"),
  navLink = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", scrollActive);
mainIcon.addEventListener("click", icon);
menuToggle.addEventListener("click", menu);

// function btnClick() {}

// Spinner
window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 200);
  }, 950);
});

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
  duration: 1000,
  delay: 150,
});

sr.reveal(
  ".main-home_title, .main-about_title, .main-about_img,  .skills-text",
  {}
);
sr.reveal(".main-home_img, .about__subtitle, .about__text, .main-skills_img", {
  delay: 100,
});
sr.reveal(
  ".main-skills_data,.work_card, .contact-input, .contact_textarea, .btn, .text, .footer-text, .footer-copy, .icon",
  {
    interval: 100,
    delay: 100,
  }
);

// Preserve 3d
VanillaTilt.init(document.querySelectorAll(".icon li a "), {
  max: 30,
  speed: 100,
});
