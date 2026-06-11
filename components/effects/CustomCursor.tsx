"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Don't show on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Cursor dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:block"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.15s ease",
        }}
      >
        <div
          className={`w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-transform duration-75 ${
            isClicking ? "scale-150" : "scale-100"
          }`}
        />
      </div>

      {/* Cursor ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[99] hidden md:block"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border border-primary/50 transition-all duration-150 ${
            isClicking ? "scale-150 border-primary" : "scale-100"
          }`}
        />
      </div>
    </>
  );
}