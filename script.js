// Navigation scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '0.5rem 5%';
    } else {
        nav.style.padding = '1rem 5%';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Store redirect button animation
const redirectButton = document.getElementById('redirectButton');
if (redirectButton) {
    redirectButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    redirectButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to feature cards
document.querySelectorAll('.feature-card, .benefit-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});
