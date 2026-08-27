"use client";

import { useEffect, useRef } from "react";

export default function CursorSprinkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Only run on desktop devices to prevent performance issues and weird touch behaviors on mobile
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: any[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Space theme colors: Gold, Teal, Purple, White, Pink
    const colors = ["#FFD27A", "#3FE0D0", "#7C5CFF", "#ffffff", "#ff7ac6"];

    const handleMouseMove = (e: MouseEvent) => {
      // Spawn 2-3 particles per mouse move event
      const particleCount = Math.floor(Math.random() * 2) + 2;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: e.clientX,
          y: e.clientY,
          // Random velocity spreading outward
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3 + 1, // Slight gravity effect downwards
          size: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1, // Opacity
          decay: Math.random() * 0.02 + 0.015 // How fast it fades
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        
        // Draw a soft glowing star/circle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
      }
      
      // Reset shadow for next frame to avoid performance hit
      ctx.shadowBlur = 0;
      
      // Remove dead particles
      particles = particles.filter(p => p.life > 0);
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[100] hidden md:block"
    />
  );
}
