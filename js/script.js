let searchForm = document.querySelector(".search-form");
const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".dot");
const swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
});
function goToSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function updateQuantity(change) {
  let quantityElement = document.getElementById("quantity");
  let currentQuantity = parseInt(quantityElement.textContent);

  let newQuantity = currentQuantity + change;

  if (newQuantity >= 1) {
    quantityElement.textContent = newQuantity;
  }
}

function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    alert("No previous page available.");
  }
}
