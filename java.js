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

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 60;

// Create stars with positions starting from the middle top and spanning the full width
for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width, // Random x position across the full width
        y: 0 + Math.random() * 50, // Start from the top with some variation
        radius: Math.random() * 1 + 1,
        speedX: Math.random() * 0.3 - 0.10, // Move left/right
        speedY: Math.random() * 0.3 - 0.10, // Move up/down
        opacity: Math.random()
    });
}

// Animate stars
function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        // Move stars
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Twinkling effect
        star.opacity = Math.random() * 0.4 + 0.4;

        // Draw stars
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
    });

    requestAnimationFrame(animateStars);
}

// Start animation
animateStars();

// Resize canvas when window resizes
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});



