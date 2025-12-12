'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);

interface CursorState {
  isHovering: boolean;
  isClicking: boolean;
  isVisible: boolean;
  position: { x: number; y: number };
}

const CustomCursor = () => {
  // Refs
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);
  const trailTimeoutRef = useRef<NodeJS.Timeout>();
  
  // State with better organization
  const [cursorState, setCursorState] = useState<CursorState>({
    isHovering: false,
    isClicking: false,
    isVisible: true,
    position: { x: 0, y: 0 }
  });

  // Performance: Memoize interactive selectors
  const interactiveSelectors = useMemo(() => [
    'a', 'button', 'input', 'textarea', 'select', 
    '[role="button"]', '[data-cursor-hover]'
  ].join(', '), []);

  // Optimized trail creation with pooling
  const createTrail = useCallback((x: number, y: number) => {
    if (!cursorState.isVisible || cursorState.isClicking) return;

    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    
    // Append to body for better performance
    document.body.appendChild(trail);

    gsap.to(trail, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      onComplete: () => {
        if (document.body.contains(trail)) {
          document.body.removeChild(trail);
        }
      }
    });
  }, [cursorState.isVisible, cursorState.isClicking]);

  // Throttled mouse move handler with requestAnimationFrame
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (window.innerWidth < 768) return;

    // Cancel previous frame
    cancelAnimationFrame(animationFrameRef.current);

    // Use requestAnimationFrame for smooth updates
    animationFrameRef.current = requestAnimationFrame(() => {
      const { clientX, clientY } = e;
      
      setCursorState(prev => ({
        ...prev,
        position: { x: clientX, y: clientY }
      }));

      // Animate cursor elements
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: clientX,
          y: clientY,
          duration: 0.5,
          ease: 'power2.out'
        });
      }

      if (cursorDotRef.current) {
        gsap.to(cursorDotRef.current, {
          x: clientX,
          y: clientY,
          duration: 0.2,
          ease: 'power3.out'
        });
      }

      // Throttle trail creation
      if (trailTimeoutRef.current) {
        clearTimeout(trailTimeoutRef.current);
      }

      trailTimeoutRef.current = setTimeout(() => {
        if (cursorState.isHovering) return; // No trails while hovering
        createTrail(clientX, clientY);
      }, 16); // ~60fps
    });
  }, [createTrail, cursorState.isHovering]);

  // Event handlers with proper cleanup
  useEffect(() => {
    if (window.innerWidth < 768) {
      setCursorState(prev => ({ ...prev, isVisible: false }));
      return;
    }

    const handleMouseEnter = () => setCursorState(prev => ({ ...prev, isHovering: true }));
    const handleMouseLeave = () => setCursorState(prev => ({ ...prev, isHovering: false }));
    const handleMouseDown = () => setCursorState(prev => ({ ...prev, isClicking: true }));
    const handleMouseUp = () => setCursorState(prev => ({ ...prev, isClicking: false }));

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Setup hover detection with event delegation
    const handleDocumentMouseOver = (e: Event) => {
      const target = e.target as Element;
      if (target.matches(interactiveSelectors)) {
        handleMouseEnter();
      }
    };

    const handleDocumentMouseOut = (e: Event) => {
      const target = e.target as Element;
      if (target.matches(interactiveSelectors)) {
        handleMouseLeave();
      }
    };

    document.addEventListener('mouseover', handleDocumentMouseOver);
    document.addEventListener('mouseout', handleDocumentMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleDocumentMouseOver);
      document.removeEventListener('mouseout', handleDocumentMouseOut);
      
      cancelAnimationFrame(animationFrameRef.current);
      if (trailTimeoutRef.current) {
        clearTimeout(trailTimeoutRef.current);
      }
    };
  }, [handleMouseMove, interactiveSelectors]);

  // Don't render on mobile
  if (!cursorState.isVisible) return null;

  const { isHovering, isClicking } = cursorState;

  return (
    <>
      {/* Main Cursor Ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-[9999] pointer-events-none"
        style={{
          width: isHovering ? '64px' : isClicking ? '32px' : '48px',
          height: isHovering ? '64px' : isClicking ? '32px' : '48px',
          opacity: cursorState.isVisible ? 1 : 0,
          transition: 'width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), height 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        {/* Outer Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-md" />
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-full border-2"
          style={{
            borderImage: isHovering 
              ? 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #6366f1) 1'
              : 'none',
            borderColor: isClicking 
              ? '#8b5cf6'
              : isHovering
              ? 'transparent'
              : 'rgba(255, 255, 255, 0.2)',
            background: isHovering
              ? 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)'
              : 'transparent',
            animation: isHovering ? 'spin 3s linear infinite' : 'none'
          }}
        >
          {/* Inner Ring */}
          <div className="absolute inset-2 rounded-full border"
            style={{
              borderColor: isHovering 
                ? 'rgba(139, 92, 246, 0.3)'
                : 'rgba(255, 255, 255, 0.1)',
              borderWidth: isHovering ? '2px' : '1px'
            }}
          />
          
          {/* Hover Effects */}
          {isHovering && (
            <>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse" />
              <div className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-purple-500 -translate-x-1/2 -translate-y-1/2 rotate-45 animate-ping" 
                style={{ animationDuration: '2s' }} 
              />
              <div className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 -translate-x-1/2 -translate-y-1/2 -rotate-45 animate-ping"
                style={{ animationDuration: '2s', animationDelay: '0.5s' }}
              />
            </>
          )}

          {/* Click Effects */}
          {isClicking && (
            <>
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping" 
                style={{ animationDuration: '0.5s' }}
              />
              <div className="absolute -inset-1 rounded-full border border-primary/30 animate-ping"
                style={{ animationDuration: '0.8s' }}
              />
            </>
          )}
        </div>
      </div>

      {/* Center Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-[10000] pointer-events-none"
        style={{
          width: isHovering ? '8px' : isClicking ? '4px' : '6px',
          height: isHovering ? '8px' : isClicking ? '4px' : '6px',
          opacity: cursorState.isVisible ? 1 : 0,
          transition: 'all 0.2s ease'
        }}
      >
        <div className="absolute inset-0 rounded-full bg-white shadow-lg"
          style={{
            transform: isClicking ? 'scale(0.5)' : 'scale(1)',
            boxShadow: isHovering
              ? '0 0 20px rgba(99, 102, 241, 0.5), 0 0 40px rgba(99, 102, 241, 0.3)'
              : '0 0 10px rgba(255, 255, 255, 0.3)'
          }}
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-primary/50 blur-sm" />
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        .cursor-trail {
          position: fixed;
          width: 6px;
          height: 6px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9998;
          filter: blur(1px);
        }
        
        /* Disable default cursor */
        * {
          cursor: none !important;
        }
        
        /* Re-enable for essential elements */
        input, textarea, select, button {
          cursor: auto !important;
        }
        
        /* Performance optimizations */
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }
        
        /* Reduce motion preference */
        @media (prefers-reduced-motion: reduce) {
          .cursor-trail,
          .cursor-ring * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;