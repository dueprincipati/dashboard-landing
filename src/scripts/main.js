/**
 * =====================================================
 * MAIN JAVASCRIPT - Dashboard Landing Page
 * =====================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

/**
 * Initialize Application
 */
function initializeApp() {
    console.log('🚀 Dashboard Landing Page Initialized');
    
    setupSmoothScrolling();
    setupDashboardCards();
    setupScrollIndicator();
    initializeScrollAnimations();
}

/**
 * Setup Smooth Scrolling for Anchor Links
 */
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Setup Dashboard Card Interactions
 */
function setupDashboardCards() {
    const cards = document.querySelectorAll('.dashboard-card');
    
    cards.forEach(card => {
        // Click on card navigates to dashboard
        card.addEventListener('click', (e) => {
            // Don't navigate if clicking on the link directly
            if (e.target.closest('.card-link')) {
                return;
            }
            
            const link = card.querySelector('.card-link');
            if (link) {
                window.location.href = link.getAttribute('href');
            }
        });
        
        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
}

/**
 * Setup Scroll Indicator
 */
function setupScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (!scrollIndicator) return;
    
    // Hide scroll indicator on scroll
    let hasScrolled = false;
    
    window.addEventListener('scroll', () => {
        if (!hasScrolled && window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
            hasScrolled = true;
        } else if (hasScrolled && window.scrollY <= 100) {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
            hasScrolled = false;
        }
    });
    
    // Click on scroll indicator scrolls to next section
    scrollIndicator.addEventListener('click', () => {
        const dashboardsSection = document.getElementById('dashboards');
        if (dashboardsSection) {
            dashboardsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

/**
 * Initialize Scroll Animations
 */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Utility Functions
 */

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Log initialization
console.log('✨ Dashboard Landing Page Ready');