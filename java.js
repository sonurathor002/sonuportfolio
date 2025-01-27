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
