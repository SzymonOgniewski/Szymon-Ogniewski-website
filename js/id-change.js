const mySkillsMobile = document.querySelector(".my-skills-mobile-id");
const aboutMeMobile = document.querySelector(".about-me-mobile-id");
const portfolioMobile = document.querySelector(".portfolio-mobile-id");
const aboutMeDesktop = document.querySelector(".about-me-desktop-id");
const mySkillsDesktop = document.querySelector(".my-skills-desktop-id");
const portfolioDesktop = document.querySelector(".portfolio-desktop-id");
const mediaQuery = window.matchMedia("(min-width: 1024px)");
if (mediaQuery.matches) {
  mySkillsMobile.id = "";
  portfolioMobile.id = "";
  aboutMeMobile.id = "";
  aboutMeDesktop.id = "about-me";
  portfolioDesktop.id = "portfolio";
  mySkillsDesktop.id = "my-skills";
}

// This script is made because of position:fixed on navigation for mobile&tablets, so that scrolling on desktop works different than on mobiles and tablets
