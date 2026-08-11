"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "./cn";

export function ScrollReveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 500,
  threshold = 0.1,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const animations = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-in": "opacity-0",
    "zoom-in": "scale-95 opacity-0",
    "slide-in-right": "translate-x-8 opacity-0",
    "slide-in-left": "-translate-x-8 opacity-0",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        !isVisible ? animations[animation] : "translate-y-0 translate-x-0 scale-100 opacity-100",
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}
