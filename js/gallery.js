const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");

const mediaQuery = window.matchMedia("(max-width: 767px)");

if (mediaQuery.matches) {
  link1.href = "./images/webstudio-mobile.jpg";
  link2.href = "./images/ice-cream-mobile.jpg";
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "title",
});
