const gallery = document.querySelector(".gallery");
const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "title",
});
