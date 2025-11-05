// src/components/AnimateOnScroll.tsx
"use client";

import { useInView } from 'react-intersection-observer';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string; //
  animationClassName: string; //
  triggerOnce?: boolean; //
}

export default function AnimateOnScroll({
  children,
  className,
  animationClassName,
  triggerOnce = false, // Default: animasi berulang setiap kali scroll
}: AnimateOnScrollProps) {
  const { ref, inView } = useInView({
    threshold: 0.2, // Elemen dianggap terlihat jika 20% bagiannya masuk layar
    triggerOnce: triggerOnce,
  });

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-500 ${inView ? `opacity-100 ${animationClassName}` : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}