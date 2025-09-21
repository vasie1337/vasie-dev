'use client';

import { useEffect } from 'react';

export default function GlassOptimizationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Apply glass effect optimizations after hydration
    const applyGlassOptimizations = () => {
      if (typeof window === 'undefined') return;

      const browserSupportsBackdrop = CSS.supports('backdrop-filter', 'blur(20px)') || 
                                     CSS.supports('-webkit-backdrop-filter', 'blur(20px)');
      const isProduction = process.env.NODE_ENV === 'production';
      const userAgent = navigator.userAgent.toLowerCase();
      const isFirefox = userAgent.includes('firefox');
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      const isChrome = userAgent.includes('chrome');
      
      const documentElement = document.documentElement;
      
      // Add classes based on detection
      if (browserSupportsBackdrop) {
        documentElement.classList.add('glass-supported');
      } else {
        documentElement.classList.add('glass-fallback');
      }
      
      if (browserSupportsBackdrop && (isChrome || isSafari)) {
        documentElement.classList.add('glass-enhanced');
      }
      
      if (isFirefox || !browserSupportsBackdrop || isProduction) {
        documentElement.classList.add('glass-production');
      }
      
      // Add browser-specific classes
      if (isFirefox) {
        documentElement.classList.add('browser-firefox');
      } else if (isChrome) {
        documentElement.classList.add('browser-chrome');
      } else if (isSafari) {
        documentElement.classList.add('browser-safari');
      }
    };

    // Apply optimizations after a brief delay to ensure DOM is ready
    const timeoutId = setTimeout(applyGlassOptimizations, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return <>{children}</>;
}
