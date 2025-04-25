/**
 * Intersection Observer utility for animation triggers
 * Optimized for mobile performance with smooth transitions
 * Based on Notion's subtle and effective scroll animations
 */

/**
 * Sets up IntersectionObservers for fade-in and staggered animations
 * @returns Cleanup function to disconnect observers
 */
export function setupAnimationObservers(): (() => void) | undefined {
  // Only run in the browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return undefined;
  }

  // Create intersection observer for fade-in animations
  const fadeInObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Add the visible class when element is visible
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once animation is triggered, no need to observe anymore
          fadeInObserver.unobserve(entry.target);
        }
      });
    },
    {
      root: null, // Use viewport as root
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% visible
    }
  );

  // Select all elements with fade-in animations
  const fadeElements = document.querySelectorAll('.notion-fade-in');
  fadeElements.forEach((el) => fadeInObserver.observe(el));

  // Create intersection observer for staggered animations
  const staggerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Add the visible class when element is visible
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once animation is triggered, no need to observe anymore
          staggerObserver.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }
  );

  // Select all elements with staggered animations
  const staggerElements = document.querySelectorAll('.notion-stagger-fade-in');
  staggerElements.forEach((el) => staggerObserver.observe(el));

  // Clean up function to disconnect observers
  const cleanup = () => {
    fadeInObserver.disconnect();
    staggerObserver.disconnect();
  };

  // Clean up observers on page navigation
  return cleanup;
}

/**
 * Sets up behavior for horizontal scrolling containers
 * Optimized for mobile interfaces
 */
export function setupHorizontalScrollBehavior(): void {
  // No special setup needed - we're using CSS-only horizontal scrolling
  // that works natively on mobile devices via mobile-horizontal-scroll class
  // This avoids TypeScript issues and keeps performance optimal
  
  // Future enhancements to horizontal scrolling behavior can be added here
  // if needed, but the CSS-based approach works well for now
}