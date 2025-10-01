/**
 * =====================================================
 * ANIMATIONS - Scroll & Interaction Animations
 * =====================================================
 */

class AnimationController {
    constructor() {
        this.observers = [];
        this.init();
    }
    
    init() {
        this.setupScrollAnimations();
        this.setupParallaxEffects();
        this.setupStaggeredAnimations();
        this.setupHoverAnimations();
        console.log('✨ Animation Controller initialized');
    }
    
    /**
     * Setup Scroll-triggered Animations
     */
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Add staggered animation to children
                    const children = entry.target.querySelectorAll('.dashboard-card, .feature-card');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('fade-in-up', 'visible');
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);
        
        // Observe sections
        const sections = document.querySelectorAll('.dashboards-section, .features-section');
        sections.forEach(section => scrollObserver.observe(section));
        
        this.observers.push(scrollObserver);
    }
    
    /**
     * Setup Parallax Effects
     */
    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.gradient-orb');
        
        if (parallaxElements.length === 0) return;
        
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        };
        
        // Throttle scroll handler for performance
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
    
    /**
     * Setup Staggered Animations
     */
    setupStaggeredAnimations() {
        const staggerGroups = [
            { selector: '.hero-stats .stat-item', delay: 150 },
            { selector: '.footer-section', delay: 100 }
        ];
        
        staggerGroups.forEach(group => {
            const elements = document.querySelectorAll(group.selector);
            elements.forEach((element, index) => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * group.delay + 500);
            });
        });
    }
    
    /**
     * Setup Hover Animations
     */
    setupHoverAnimations() {
        // Dashboard cards
        const cards = document.querySelectorAll('.dashboard-card');
        cards.forEach(card => {
            const icon = card.querySelector('.card-icon');
            const glow = card.querySelector('.card-glow');
            
            card.addEventListener('mouseenter', () => {
                if (icon) {
                    icon.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
                }
                if (glow) {
                    glow.style.transition = 'opacity 0.5s ease-out';
                }
            });
            
            // Add ripple effect on click
            card.addEventListener('click', (e) => {
                createRipple(e, card);
            });
        });
        
        // Feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const icon = card.querySelector('.feature-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.1) rotate(5deg)';
                }
            });
            
            card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('.feature-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }
            });
        });
    }
    
    /**
     * Cleanup observers
     */
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
    }
}

/**
 * Create Ripple Effect
 */
function createRipple(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(45, 212, 191, 0.3);
        top: ${y}px;
        left: ${x}px;
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Add ripple animation keyframes
if (!document.querySelector('#ripple-animation-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-animation-style';
    style.textContent = `
        @keyframes ripple-animation {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Count Up Animation for Numbers
 */
function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

/**
 * Initialize animations when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    const animationController = new AnimationController();
    
    // Animate hero stats numbers
    setTimeout(() => {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const text = stat.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            if (!isNaN(number)) {
                stat.textContent = '0';
                animateNumber(stat, number, 1500);
            }
        });
    }, 800);
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AnimationController, createRipple, animateNumber };
}