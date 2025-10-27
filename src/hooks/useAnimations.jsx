import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useAnimations = () => {
  useEffect(() => {
    // Function untuk initialize animations setelah DOM siap
    const initializeAnimations = () => {
      // Pastikan elemen sudah ada sebelum menjalankan animasi
      const heroElement = document.querySelector('.hero');
      if (!heroElement) {
        console.warn('Hero element not found, retrying...');
        setTimeout(initializeAnimations, 100);
        return;
      }

      console.log('Initializing animations...');

      // Reset semua elemen ke state visible
      gsap.set([
        '.hero-badge', '.hero h1', '.hero p', 
        '.hero-actions', '.hero-stats', '.floating-card',
        '.section', '.company-card', '.value-card'
      ], {
        opacity: 1,
        y: 0,
        clearProps: "all"
      });

      // Hero section animations (non-scroll triggered)
      const heroTimeline = gsap.timeline();
      heroTimeline
        .fromTo('.hero-badge', 
          { y: 50, opacity: 0 },
          { duration: 1, y: 0, opacity: 1, delay: 0.5 }
        )
        .fromTo('.hero h1', 
          { y: 60, opacity: 0 },
          { duration: 1.2, y: 0, opacity: 1 },
          "-=0.8"
        )
        .fromTo('.hero p', 
          { y: 40, opacity: 0 },
          { duration: 1.2, y: 0, opacity: 1 },
          "-=1.0"
        )
        .fromTo('.hero-actions', 
          { y: 40, opacity: 0 },
          { duration: 1, y: 0, opacity: 1 },
          "-=0.8"
        )
        .fromTo('.hero-stats', 
          { y: 40, opacity: 0 },
          { duration: 1, y: 0, opacity: 1 },
          "-=0.6"
        )
        .fromTo('.floating-card', 
          { y: 100, opacity: 0 },
          { 
            duration: 1.5, 
            y: 0, 
            opacity: 1, 
            stagger: 0.3,
            ease: "power2.out"
          },
          "-=1.0"
        );

      // Refresh ScrollTrigger setelah hero animations selesai
      heroTimeline.eventCallback("onComplete", () => {
        setTimeout(() => {
          initializeScrollAnimations();
        }, 500);
      });
    };

    // Function untuk scroll-triggered animations
    const initializeScrollAnimations = () => {
      console.log('Initializing scroll animations...');

      // Section animations
      const sections = gsap.utils.toArray('.section:not(.hero)');
      sections.forEach((section, index) => {
        // Skip hero section karena sudah dianimasikan
        if (section.classList.contains('hero')) return;

        gsap.fromTo(section, 
          { 
            y: 80, 
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
              markers: false, // Set true untuk debug
              id: `section-${index}`
            }
          }
        );
      });

      // Company card animations
      const companyCards = gsap.utils.toArray('.company-card');
      if (companyCards.length > 0) {
        companyCards.forEach((card, i) => {
          gsap.fromTo(card, 
            { 
              y: 60, 
              opacity: 0,
              scale: 0.9
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: i * 0.1,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
                id: `company-${i}`
              }
            }
          );
        });
      }

      // Value card animations
      const valueCards = gsap.utils.toArray('.value-card');
      if (valueCards.length > 0) {
        valueCards.forEach((card, i) => {
          gsap.fromTo(card, 
            { 
              y: 40, 
              opacity: 0,
              rotationY: -10
            },
            {
              y: 0,
              opacity: 1,
              rotationY: 0,
              duration: 0.8,
              delay: i * 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
                id: `value-${i}`
              }
            }
          );
        });
      }

      // Tools section animations (jika ada)
      const toolItems = gsap.utils.toArray('.tool-item');
      if (toolItems.length > 0) {
        toolItems.forEach((item, i) => {
          gsap.fromTo(item, 
            { 
              x: -50, 
              opacity: 0 
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              delay: i * 0.1,
              scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
              }
            }
          );
        });
      }

      // Refresh ScrollTrigger setelah semua animations dibuat
      setTimeout(() => {
        ScrollTrigger.refresh();
        console.log('ScrollTrigger refreshed');
      }, 1000);
    };

    // Header scroll effect
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Mobile menu functionality
    const initializeMobileMenu = () => {
      const hamburger = document.querySelector('.hamburger');
      const navLinks = document.querySelector('.nav-links');
      
      if (hamburger && navLinks) {
        const toggleMenu = () => {
          hamburger.classList.toggle('active');
          navLinks.classList.toggle('active');
        };

        const closeMenu = () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
        };

        hamburger.addEventListener('click', toggleMenu);
        
        navLinks.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', closeMenu);
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
          if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            closeMenu();
          }
        });
      }
    };

    // Initialize dengan delay untuk memastikan DOM siap
    setTimeout(() => {
      initializeAnimations();
      initializeMobileMenu();
    }, 500);

    // Handle route changes atau dynamic content
    const handleContentChange = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);
    };

    // Observer untuk mendeteksi perubahan DOM
    const observer = new MutationObserver(() => {
      handleContentChange();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      
      // Kill semua GSAP animations
      gsap.globalTimeline.clear();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  // Tambahkan animasi untuk Withus Media components
const mediaElements = document.querySelectorAll('.category-card, .content-card, .platform-card');
mediaElements.forEach((el, index) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fadeInObserver.observe(el);
});
};