'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Stop any in-progress spring
      animationRef.current?.stop();

      const from = window.scrollY;
      const to = Math.max(0, Math.min(from + e.deltaY * 2.5, document.body.scrollHeight - window.innerHeight));

animationRef.current = animate(from, to, {
  type: 'spring',
  stiffness: 120,
  damping: 20,
  mass: 0.5,
  restDelta: 0.5,
  onUpdate: (v) => window.scrollTo(0, v),
});
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      animationRef.current?.stop();
    };
  }, []);

  return <>{children}</>;
}

