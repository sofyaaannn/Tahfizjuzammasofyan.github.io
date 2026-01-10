document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px" // Offset slightly so it triggers before bottom
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // 2. Select elements to animate
    // We'll target common containers to avoid adding classes manually to everything
    const animatedElements = document.querySelectorAll('.card, .menu-card, .tajwid-card, .section-title, .hero-content, .playlist-item, .history-table-container, .ai-container');

    animatedElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Optional: Add staggered delay to grid items automatically
    const grids = document.querySelectorAll('.grid-3, .tajwid-grid, .menu-grid');
    grids.forEach(grid => {
        const children = grid.children;
        Array.from(children).forEach((child, index) => {
            child.style.transitionDelay = `${index * 0.1}s`;
        });
    });
});
