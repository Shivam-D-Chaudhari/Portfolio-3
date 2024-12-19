window.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed'));
        const yPos = -(window.scrollY * speed / 100);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const parallaxElements = document.querySelectorAll('.parallax');

    // Optionally, adjust scaling on resize to maintain consistency
    window.addEventListener('resize', function() {
        parallaxElements.forEach(element => {
            // Recalculate the transform values if needed
            const yPos = -(window.scrollY * (parseFloat(element.getAttribute('data-speed')) || 1) / 100);
            const scaleValue = 1 + (window.scrollY * (parseFloat(element.getAttribute('data-speed')) || 1) / 1000);
            element.style.transform = `translateY(${yPos}px) scale(${Math.min(scaleValue, 1.05)})`;
        });
    });
});
