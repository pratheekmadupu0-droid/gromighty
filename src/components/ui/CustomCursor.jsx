import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setIsVisible(true);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsHovered(true);
        const text = target.getAttribute('data-cursor');
        setCursorText(text !== 'true' ? text : '');
      } else if (e.target.closest('a, button, input, select, textarea, [role="button"]')) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Circle */}
      <div
        className={`fixed top-0 left-0 rounded-full transition-transform duration-150 ease-out border flex items-center justify-center pointer-events-none ${
          isHovered
            ? 'w-24 h-24 bg-primary/10 border-primary text-primary text-[10px] font-bold uppercase tracking-wider scale-100 backdrop-blur-[2px]'
            : 'w-8 h-8 border-primary/40 bg-transparent scale-75'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {cursorText && (
          <span className="animate-fade-in text-center px-1 leading-tight">
            {cursorText}
          </span>
        )}
      </div>

      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          opacity: isHovered && cursorText ? 0 : 1,
        }}
      />
    </div>
  );
};

export default CustomCursor;
