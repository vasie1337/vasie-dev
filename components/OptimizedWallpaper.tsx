'use client';

import { useState, useEffect } from 'react';

interface OptimizedWallpaperProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function OptimizedWallpaper({ className, style }: OptimizedWallpaperProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Preload the best format image
    const img = new Image();
    
    // Function to check WebP support
    const supportsWebP = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('webp') !== -1;
    };

    // Function to check AVIF support
    const supportsAVIF = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/avif').indexOf('avif') !== -1;
    };

    // Determine best image format and size based on viewport
    const getOptimalImage = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth < 1024;
      
      if (isMobile) {
        if (supportsAVIF()) return '/wallpaper-mobile.avif';
        if (supportsWebP()) return '/wallpaper-mobile.webp';
        return '/wallpaper-mobile.jpg';
      }
      
      if (supportsAVIF()) return '/wallpaper.avif';
      if (supportsWebP()) return '/wallpaper.webp';
      return '/wallpaper.jpg';
    };

    const imageSrc = getOptimalImage();
    
    img.onload = () => {
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      setImageError(true);
      // Fallback to JPEG
      const fallbackImg = new Image();
      fallbackImg.onload = () => setIsLoaded(true);
      fallbackImg.src = '/wallpaper.jpg';
    };
    
    img.src = imageSrc;
  }, []);

  // Generate CSS with proper image format selection
  const backgroundImageCSS = `
    background-image: 
      image-set(
        url('/wallpaper.avif') type('image/avif'),
        url('/wallpaper.webp') type('image/webp'),
        url('/wallpaper.jpg') type('image/jpeg')
      ),
      url('/wallpaper.jpg');
    
    /* Mobile responsive background */
    @media (max-width: 767px) {
      background-image: 
        image-set(
          url('/wallpaper-mobile.webp') type('image/webp'),
          url('/wallpaper-mobile.jpg') type('image/jpeg')
        ),
        url('/wallpaper-mobile.jpg');
    }
  `;

  return (
    <>
      <style jsx>{`
        .optimized-wallpaper {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          transition: opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          ${backgroundImageCSS}
        }
        
        .optimized-wallpaper.loading {
          opacity: 0;
          background-color: #0a0a0a;
        }
        
        .optimized-wallpaper.loaded {
          opacity: 1;
        }

        /* Mobile optimization */
        @media (max-width: 767px) {
          .optimized-wallpaper {
            background-attachment: scroll; /* Better performance on mobile */
          }
        }
      `}</style>
      
      <div 
        className={`optimized-wallpaper ${isLoaded ? 'loaded' : 'loading'} ${className || ''}`}
        style={style}
      />
      
      {/* Loading indicator */}
      {!isLoaded && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="apple-spinner opacity-30" />
        </div>
      )}
    </>
  );
}
