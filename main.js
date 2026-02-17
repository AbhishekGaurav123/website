// Main JavaScript for Aatharva Bodhi Website

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('mainNav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            const isActive = nav.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isActive);
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (nav && nav.classList.contains('active')) {
            if (!nav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                nav.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const answer = this.nextElementSibling;
            
            // Close all other FAQs
            faqQuestions.forEach(q => {
                if (q !== this) {
                    q.setAttribute('aria-expanded', 'false');
                    q.nextElementSibling.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            this.setAttribute('aria-expanded', !isExpanded);
            if (!isExpanded) {
                answer.classList.add('active');
            } else {
                answer.classList.remove('active');
            }
        });
    });
    
    // Form Validation and Submission
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            // Email validation
            const emailInputs = form.querySelectorAll('input[type="email"]');
            emailInputs.forEach(input => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (input.value && !emailRegex.test(input.value)) {
                    isValid = false;
                    input.classList.add('error');
                }
            });
            
            if (isValid) {
                // Honeypot check (if exists)
                const honeypot = form.querySelector('[name="website"]');
                if (honeypot && honeypot.value) {
                    // Bot detected, silently fail
                    return;
                }
                
                // Show success message
                const successMsg = document.createElement('div');
                successMsg.className = 'form-success';
                successMsg.textContent = 'Thank you! Your submission has been received.';
                form.insertBefore(successMsg, form.firstChild);
                
                // Reset form
                form.reset();
                
                // Redirect to thank you page after a delay
                setTimeout(() => {
                    const formId = form.id;
                    if (formId === 'newsletterForm') {
                        window.location.href = 'thank-you-newsletter.html';
                    } else if (formId === 'consultationForm' || formId === 'proposalForm') {
                        window.location.href = 'thank-you-lead.html';
                    }
                }, 2000);
            }
        });
    });
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards, case studies, etc.
    const animatedElements = document.querySelectorAll('.service-card, .case-study-card, .testimonial-card, .insight-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Rate limiting for form submissions
    const formSubmissionTimes = {};
    const RATE_LIMIT_MS = 60000; // 1 minute
    
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            const formId = form.id || 'default';
            const now = Date.now();
            
            if (formSubmissionTimes[formId] && (now - formSubmissionTimes[formId]) < RATE_LIMIT_MS) {
                e.preventDefault();
                alert('Please wait a moment before submitting again.');
                return false;
            }
            
            formSubmissionTimes[formId] = now;
        });
    });
});

// Utility function for deduplication (would be handled server-side in production)
function deduplicateLead(email, company) {
    // This would be implemented in Velo backend
    // For now, just a placeholder
    console.log('Checking for duplicate:', email, company);
    return false;
}

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { deduplicateLead };
}
