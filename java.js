// Select all project cards
const projectCards = document.querySelectorAll('.project-card');

// Add hover effect to each project card
projectCards.forEach(card => {
    const overlayHeading = card.querySelector('.overlay h1');

    card.addEventListener('mouseover', () => {
        overlayHeading.style.opacity = '1';
        overlayHeading.style.visibility = 'visible';
        overlayHeading.style.transition = 'opacity 0.3s ease, visibility 0s 0s';
    });

    card.addEventListener('mouseout', () => {
        overlayHeading.style.opacity = '0';
        overlayHeading.style.visibility = 'hidden';
        overlayHeading.style.transition = 'opacity 0.3s ease, visibility 0s 0.3s';
    });
});
