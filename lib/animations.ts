// Apple-inspired animation utilities and scroll effects
"use client";

import { useEffect, useRef, useState } from 'react';

// Parallax effect hook for smooth background movement
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed;
      element.style.transform = `translateY(${parallax}px)`;
    };

    // Use requestAnimationFrame for smooth animation
    let ticking = false;
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    return () => window.removeEventListener('scroll', requestTick);
  }, [speed]);

  return ref;
}

// Intersection Observer hook for scroll-triggered animations
export function useScrollAnimation(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Once visible, keep it visible (don't re-animate on scroll up)
        observer.unobserve(element);
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options,
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}

// Apple-style easing functions
export const appleEasing = {
  // Apple's standard ease
  standard: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  // Apple's spring animation
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  // Apple's entrance animation
  entrance: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  // Apple's exit animation  
  exit: 'cubic-bezier(0.4, 0, 1, 1)',
};

// Stagger delay calculation utility
export function getStaggerDelay(index: number, baseDelay: number = 100): string {
  return `${baseDelay + index * 50}ms`;
}

// Apple-style hover interaction utilities
export function applyHoverEffect(element: HTMLElement) {
  if (!element) return;

  element.style.transition = `all 0.4s ${appleEasing.standard}`;
  
  const handleMouseEnter = () => {
    element.style.transform = 'translateY(-2px) scale(1.02)';
  };

  const handleMouseLeave = () => {
    element.style.transform = 'translateY(0) scale(1)';
  };

  element.addEventListener('mouseenter', handleMouseEnter);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mouseenter', handleMouseEnter);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
}

// Smooth scroll to element with Apple-style easing
export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (!element) return;

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
}

// Page loading animation controller
export function usePageLoadAnimation() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate page load completion
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.classList.add('page-loaded');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return isLoaded;
}
