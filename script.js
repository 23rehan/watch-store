// Improved Carousel Functionality
let currentIndex = 0;
const slides = document.querySelectorAll(".carousel img");
const totalSlides = slides.length;

document.addEventListener("DOMContentLoaded", () => {
    setInterval(slideShow, 3000);
});

function slideShow() {
    const carousel = document.querySelector(".carousel");
    currentIndex = (currentIndex + 1) % totalSlides;
    carousel.style.transform = `translateX(${-100 * currentIndex}%)`;
}

// Improved Add to Cart Functionality
let cartCount = 0;
function addToCart(productName, price) {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    alert(`${productName} added to cart!`);
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Prevent Form Refresh & Show Success Message
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.form-container button').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
    });
});
