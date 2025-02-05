document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); // Get the section ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    }
    });
});


const canvas = document.getElementById("starsCanvas");
const ctx = canvas.getContext("2d");

// Function to set canvas size and regenerate stars
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createStars(); // Recreate stars after resizing
}

const stars = [];
let numStars = Math.floor((canvas.width * canvas.height) / 15000); // Adjust based on screen size

// Function to create stars dynamically
function createStars() {
    stars.length = 0; // Clear previous stars
    numStars = Math.floor((canvas.width * canvas.height) / 15000); // Adjust density

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,  // Spread across full width
            y: Math.random() * canvas.height, // Spread across full height
            radius: Math.random() * 1.5 + 1,  // Slightly bigger stars for visibility
            speedX: Math.random() * 0.3 - 0.15, // Move left/right
            speedY: Math.random() * 0.3 - 0.15, // Move up/down
            opacity: Math.random() * 0.6 + 0.4 // More visibility variation
        });
    }
}

// Animate stars with smoother movement
function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around edges smoothly
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Twinkling effect
        star.opacity = Math.random() * 0.3 + 0.5;

        // Draw stars
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
    });

    requestAnimationFrame(animateStars);
}

// Resize canvas when window resizes and recreate stars
window.addEventListener("resize", setCanvasSize);

// Initial setup
setCanvasSize();
animateStars();





