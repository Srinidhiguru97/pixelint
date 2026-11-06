"use client";

import React, { useEffect, useRef } from "react";

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReduced = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReduced = e.matches;
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      targetX = x * 0.4;
      targetY = y * 0.4;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Particle nodes for ambient field
    const PARTICLE_COUNT = 36;
    const particles: {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      radius: number;
      color: string;
      alpha: number;
    }[] = [];

    const colors = ["#397BFF", "#875BFF", "#60A5FA", "#C084FC"];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 320,
        y: (Math.random() - 0.5) * 320,
        z: (Math.random() - 0.5) * 320,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    // Mathematical 3D Geodesic / Wireframe Sphere vertices
    const LAT_BANDS = 10;
    const LON_BANDS = 18;
    const SPHERE_RADIUS = 120;
    const sphereVertices: { x: number; y: number; z: number }[] = [];

    for (let lat = 0; lat <= LAT_BANDS; lat++) {
      const theta = (lat * Math.PI) / LAT_BANDS;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);

      for (let lon = 0; lon <= LON_BANDS; lon++) {
        const phi = (lon * 2 * Math.PI) / LON_BANDS;
        const x = SPHERE_RADIUS * sinTheta * Math.cos(phi);
        const y = SPHERE_RADIUS * cosTheta;
        const z = SPHERE_RADIUS * sinTheta * Math.sin(phi);
        sphereVertices.push({ x, y, z });
      }
    }

    let angleX = 0.3;
    let angleY = 0.5;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Damp mouse parallax
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      const centerX = width / 2;
      const centerY = height / 2;

      if (!isReduced) {
        angleX += 0.003 + mouseY * 0.01;
        angleY += 0.005 + mouseX * 0.01;
      }

      // Draw Depth Horizon / Studio Grid Floor
      const gridY = centerY + 140;
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
      ctx.lineWidth = 1;
      for (let i = -7; i <= 7; i++) {
        ctx.beginPath();
        const startX = centerX + i * 25;
        ctx.moveTo(startX, gridY);
        ctx.lineTo(centerX + i * 85, height);
        ctx.stroke();
      }
      for (let j = 0; j < 5; j++) {
        const y = gridY + j * j * 3.5 + j * 8;
        ctx.beginPath();
        ctx.moveTo(centerX - 300, y);
        ctx.lineTo(centerX + 300, y);
        ctx.stroke();
      }
      ctx.restore();

      // Soft Ambient Glow Behind Central Object
      const glowGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        10,
        centerX,
        centerY,
        180
      );
      glowGrad.addColorStop(0, "rgba(57, 123, 255, 0.22)");
      glowGrad.addColorStop(0.4, "rgba(135, 91, 255, 0.12)");
      glowGrad.addColorStop(1, "transparent");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 180, 0, Math.PI * 2);
      ctx.fill();

      // 3D rotation projection helper
      const project = (x: number, y: number, z: number) => {
        // Rotate around X
        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const y1 = y * cosX - z * sinX;
        const z1 = y * sinX + z * cosX;

        // Rotate around Y
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        const x2 = x * cosY + z1 * sinY;
        const z2 = -x * sinY + z1 * cosY;

        const fov = 350;
        const distance = fov / (fov + z2);
        return {
          px: centerX + x2 * distance,
          py: centerY + y1 * distance,
          scale: distance,
          depth: z2,
        };
      };

      // Render Floating Particles in 3D Space
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!isReduced) {
          p.x += p.vx;
          p.y += p.vy;
          p.z += p.vz;

          if (p.x < -160) p.x = 160;
          if (p.x > 160) p.x = -160;
          if (p.y < -160) p.y = 160;
          if (p.y > 160) p.y = -160;
          if (p.z < -160) p.z = 160;
          if (p.z > 160) p.z = -160;
        }

        const proj = project(p.x, p.y, p.z);
        const alpha = Math.max(0.1, Math.min(0.8, p.alpha * proj.scale));

        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(proj.px, proj.py, p.radius * proj.scale, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with subtle filament lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dz = p.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < 65) {
            const proj2 = project(p2.x, p2.y, p2.z);
            ctx.strokeStyle = "rgba(57, 123, 255, 0.12)";
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(proj.px, proj.py);
            ctx.lineTo(proj2.px, proj2.py);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // Draw Wireframe Sphere Latitudes and Longitudes
      ctx.lineWidth = 0.8;
      for (let lat = 0; lat <= LAT_BANDS; lat++) {
        ctx.beginPath();
        let first = true;
        for (let lon = 0; lon <= LON_BANDS; lon++) {
          const idx = lat * (LON_BANDS + 1) + lon;
          const v = sphereVertices[idx];
          if (!v) continue;
          const proj = project(v.x, v.y, v.z);

          // Fade lines that are on the back side of sphere
          const backRatio = Math.max(0, (proj.depth + SPHERE_RADIUS) / (SPHERE_RADIUS * 2));
          ctx.strokeStyle = `rgba(57, 123, 255, ${0.05 + backRatio * 0.22})`;

          if (first) {
            ctx.moveTo(proj.px, proj.py);
            first = false;
          } else {
            ctx.lineTo(proj.px, proj.py);
          }
        }
        ctx.stroke();
      }

      for (let lon = 0; lon <= LON_BANDS; lon++) {
        ctx.beginPath();
        let first = true;
        for (let lat = 0; lat <= LAT_BANDS; lat++) {
          const idx = lat * (LON_BANDS + 1) + lon;
          const v = sphereVertices[idx];
          if (!v) continue;
          const proj = project(v.x, v.y, v.z);
          const backRatio = Math.max(0, (proj.depth + SPHERE_RADIUS) / (SPHERE_RADIUS * 2));
          ctx.strokeStyle = `rgba(135, 91, 255, ${0.04 + backRatio * 0.18})`;

          if (first) {
            ctx.moveTo(proj.px, proj.py);
            first = false;
          } else {
            ctx.lineTo(proj.px, proj.py);
          }
        }
        ctx.stroke();
      }

      // Draw Inner Translucent Core Glass Sphere
      const coreGrad = ctx.createRadialGradient(
        centerX - 25,
        centerY - 30,
        15,
        centerX,
        centerY,
        75
      );
      coreGrad.addColorStop(0, "rgba(255, 255, 255, 0.4)");
      coreGrad.addColorStop(0.3, "rgba(57, 123, 255, 0.28)");
      coreGrad.addColorStop(0.7, "rgba(135, 91, 255, 0.15)");
      coreGrad.addColorStop(1, "rgba(8, 9, 13, 0.65)");

      ctx.save();
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 72, 0, Math.PI * 2);
      ctx.fill();

      // Specular highlight on glass sphere
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Orbital Rings at an angle
      const ringAngle = angleY * 0.6;
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(ringAngle);
      ctx.scale(1, 0.38);

      ctx.strokeStyle = "rgba(57, 123, 255, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, 150, 0, Math.PI * 2);
      ctx.stroke();

      // Ring Orbiting Beacon Dot
      const beaconAngle = angleY * 2;
      const bx = Math.cos(beaconAngle) * 150;
      const by = Math.sin(beaconAngle) * 150;
      ctx.fillStyle = "#397BFF";
      ctx.shadowColor = "#397BFF";
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(bx, by, 3.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
      ctx.restore();

      if (!isReduced) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[540px] flex items-center justify-center select-none pointer-events-none">
      {/* Decorative fine geometric alignment rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full border border-white/[0.04] pointer-events-none" />
        <div className="absolute w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] rounded-full border border-dashed border-white/[0.06] pointer-events-none animate-[spin_60s_linear_infinite]" />
      </div>

      {/* Center 3D Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10"
        aria-label="3D geometric centerpiece symbolizing digital technology and design innovation"
        role="img"
      />

      {/* Floating subtle telemetry label */}
      <div className="absolute bottom-4 right-4 sm:right-8 z-20 flex items-center gap-2 px-2.5 py-1 rounded bg-[#11131A]/70 border border-white/5 text-[10px] font-mono tracking-widest text-slate-400">
        <span className="w-1.5 h-1.5 rounded-full bg-[#875BFF] animate-ping" />
        <span>SYS.CORE // ACTIVE</span>
      </div>
    </div>
  );
}

