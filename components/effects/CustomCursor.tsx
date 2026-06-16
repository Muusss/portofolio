"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hasTouch, setHasTouch] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for touch device
    setHasTouch(
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
    );
  }, []);

  useEffect(() => {
    if (!mounted || hasTouch) return;

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
  }, [mounted, hasTouch]);

  // Don't render on server, touch devices, or before mount
  if (!mounted || hasTouch) {
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
          className={`w-2 h-2 rounded-full transition-transform duration-75 ${
            isClicking ? "scale-150" : "scale-100"
          }`}
          style={{
            background: "linear-gradient(135deg, var(--accent), var(--primary))",
          }}
        />
      </div>

      {/* Cursor ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[99] hidden md:block transition-all duration-150 ${
          isClicking ? "scale-150" : "scale-100"
        }`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        <div
          className="w-8 h-8 rounded-full"
          style={{
            border: "2px solid var(--accent)",
            opacity: 0.5,
          }}
        />
      </div>
    </>
  );
}