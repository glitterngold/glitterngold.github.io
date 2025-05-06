function titleFade() {
  const title = document.getElementById("title");
  const content = document.getElementById("content");

  if (title) {
    title.style.transition = "opacity 2s";
    title.style.opacity = "0";
  }

  setTimeout(() => {
    content.classList.remove("hidden");
    content.style.transition = "opacity 2s";
    content.classList.add("visible");
  }, 1000); // Match the transition duration in CSS (1s)
}

// Define images for each button
const buttonImages = {
  artwork: "https://panteakarimi.com/wp-content/uploads/2018/02/reception-images-e1655317957871.jpg",
  context: "https://media.sciencephoto.com/c0/02/50/09/c0025009-800px-wm.jpg",
  symbolism: "https://i1.sndcdn.com/artworks-SegTl3vlIUJRby5n-IIBRFw-t1080x1080.jpg",
  extra: "https://moewalls.com/wp-content/uploads/2024/11/honkai-star-rail-penacony-dreams-edge-thumb.jpg"
};

// Default image
const defaultImage = "https://panteakarimi.com/wp-content/uploads/2018/02/Suspended-Healing-Garden-2019-PKarimi-aa.jpg";

// Function to change the image on hover
function changeImage(buttonId) {
  const slideshow = document.getElementById("previewimg");
  slideshow.src = buttonImages[buttonId];
}

// Function to reset the image when hover ends
function resetImage() {
  const slideshow = document.getElementById("previewimg");
  slideshow.src = defaultImage;
}

const images = [
  "https://panteakarimi.com/wp-content/uploads/2018/02/Suspended-Healing-Garden-2019-PKarimi-aa.jpg",
  "https://panteakarimi.com/wp-content/uploads/2018/02/thubnail-detail-2.jpg",
  "https://panteakarimi.com/wp-content/uploads/2018/02/reception-images-e1655317957871.jpg",
  "https://panteakarimi.com/wp-content/uploads/2025/04/Suspended-Healing-Garden-San-Diego-Museum-of-Art-2024-scaled.jpg",
  "https://panteakarimi.com/wp-content/uploads/2018/02/installation-Wall-Garden.jpg",
  "https://panteakarimi.com/wp-content/uploads/2018/02/multiple-view-e1655318506366.jpg",
  "https://panteakarimi.com/wp-content/uploads/2016/10/Euphrat-Botanical-e1655318696437.jpg",
];

const artworkTexts = [
  "The Suspended Healing Garden",
  "Close up of the leaves and its text",
  "Leaves of the Suspended Healing Garden",
  "View from below the garden",
  "Prototype leaves",
  "Leaves in progress",
  "Leaves in progress",
];

let currentIndex = 0;

// Function to update the slideshow image
function updateImage() {
  const slideshow = document.getElementById("slideshow");
  const slideshowText = document.getElementById("slideshowText");

  slideshow.src = images[currentIndex];
  slideshowText.textContent = artworkTexts[currentIndex];
}

// Function to go to the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Move to the next image
  updateImage();
}

// Function to go to the previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Move to the previous image
  updateImage();
}

// Slideshow images for context
const contextImages = [
  "https://panteakarimi.com/wp-content/uploads/2018/02/thubnail-detail-2.jpg",
  "https://media.sciencephoto.com/c0/02/50/09/c0025009-800px-wm.jpg",
  "https://www.researchgate.net/profile/Zin-Eddine-Dadach/publication/331344594/figure/fig2/AS:730429409746953@1551159350483/Front-cover-of-Ibn-al-Baytar-d-646-H-1248-AD-Tafsir-kitab-Diyasquridus-fi-al-adwiya.jpg",
];

const contextTexts = [
  "Close up of the leaves and its text",
  "Sculpture of Abu Jafar al-Ghafiqi",
  "Text of Kitab fi’l-adwiya al-mufrada",
];

let contextCurrentIndex = 0;

// Function to update the context slideshow image
function updateContextImage() {
  const contextSlideshow = document.getElementById("contextSlideshow");
  const slideshowText = document.getElementById("contextSlideshowText");
  contextSlideshow.src = contextImages[contextCurrentIndex];
  slideshowText.textContent = contextTexts[contextCurrentIndex];
}

// Function to go to the next context image
function nextContextImage() {
  contextCurrentIndex = (contextCurrentIndex + 1) % contextImages.length; // Move to the next image
  updateContextImage();
}

// Function to go to the previous context image
function prevContextImage() {
  contextCurrentIndex = (contextCurrentIndex - 1 + contextImages.length) % contextImages.length; // Move to the previous image
  updateContextImage();
}

// Slideshow images for symbolism
const symbolismImages = [
  "https://pbs.twimg.com/media/EfsGfiZXoAEZiT0?format=jpg&name=4096x4096",
  "https://i1.sndcdn.com/artworks-SegTl3vlIUJRby5n-IIBRFw-t1080x1080.jpg",
  "https://i.redd.it/fidyq5valih61.jpg",
];

const symbolismTexts = [
  "Do you imagine yourself exploring the future ruins of a city?",
  "Or do you wish you were still a child, mesmerized by the atmosphere of an amusement park?",
  "Or do you wish to be back at your hometown, where everything began?",
];

let symbolismCurrentIndex = 0;

// Function to update the symbolism slideshow image
function updateSymbolismImage() {
  const symbolismSlideshow = document.getElementById("symbolismSlideshow");
  const slideshowText = document.getElementById("symbolismSlideshowText");
  symbolismSlideshow.src = symbolismImages[symbolismCurrentIndex];
  slideshowText.textContent = symbolismTexts[symbolismCurrentIndex];
}

// Function to go to the next symbolism image
function nextSymbolismImage() {
  symbolismCurrentIndex = (symbolismCurrentIndex + 1) % symbolismImages.length; // Move to the next image
  updateSymbolismImage();
}

// Function to go to the previous symbolism image
function prevSymbolismImage() {
  symbolismCurrentIndex = (symbolismCurrentIndex - 1 + symbolismImages.length) % symbolismImages.length; // Move to the previous image
  updateSymbolismImage();
}