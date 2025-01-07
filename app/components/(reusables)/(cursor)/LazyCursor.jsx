'use client';

import React, { useEffect, useRef } from 'react';

const LazyCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const speed = 0.1; // Adjust smoothness speed

    // Track mouse movement
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Animate the cursor to "lag" behind the mouse position
    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      requestAnimationFrame(animateCursor);
    };

    // Add event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Start animation
    animateCursor();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 bg-primary rounded-full pointer-events-none z-50 opacity-80 transform -translate-x-1/2 -translate-y-1/2 transition-all"
    />
  );
};

export default LazyCursor;
