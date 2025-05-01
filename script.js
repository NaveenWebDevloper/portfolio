// Mobile Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const closeNav = document.querySelector('.close-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileHeader = document.getElementById('mobile-header');

    // Function to open mobile navigation
    function openMobileNav() {
        mobileNav.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when nav is open
    }

    // Function to close mobile navigation
    function closeMobileNav() {
        mobileNav.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling again
    }

    // Toggle button click event
    mobileNavToggle.addEventListener('click', openMobileNav);
    
    // Close button click event
    closeNav.addEventListener('click', closeMobileNav);
    
    // Close mobile navigation when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });

    // Close mobile navigation when clicking outside the menu
    window.addEventListener('click', function(e) {
        if (e.target === mobileNav) {
            closeMobileNav();
        }
    });

    // Smooth scroll for all navigation links
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function(e) {
    //         e.preventDefault();
            
    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);
            
    //         if (targetElement) {
    //             // Smooth scroll to the target
    //             window.scrollTo({
    //                 top: targetElement.offsetTop,
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });

    // // Initialize Locomotive Scroll if the library is available
    // if (typeof LocomotiveScroll === 'function') {
    //     const scroll = new LocomotiveScroll({
    //         el: document.querySelector('#body'),
    //         smooth: true
    //     });
    // }
    
    // Handle mobile header background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            mobileHeader.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            mobileHeader.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            mobileHeader.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            mobileHeader.style.boxShadow = 'none';
        }
    });
    
    // Animation for contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    if (contactCards.length > 0) {
        contactCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    }
});