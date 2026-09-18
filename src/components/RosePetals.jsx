import { useEffect, useRef } from 'react';

export default function RosePetals() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let petals = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createPetal() {
      return {
        x: Math.random() * canvas.width,
        y: -20,
        size: Math.random() * 18 + 10,
        speedY: Math.random() * 1.4 + 0.7,
        speedX: Math.random() * 1.0 - 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.05,
        // brighter petal opacity on white bg
        opacity: Math.random() * 0.55 + 0.35,
        sway: Math.random() * 0.018,
        swayOffset: Math.random() * Math.PI * 2,
        // hue between hot pink (#330°) and magenta (#300°)
        hue: 300 + Math.random() * 40,
        sat: 80 + Math.random() * 20,
        tick: 0,
      };
    }

    function drawPetal(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;

      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size);
      grad.addColorStop(0, `hsla(${p.hue}, ${p.sat}%, 88%, 1)`);
      grad.addColorStop(0.5, `hsla(${p.hue}, ${p.sat}%, 70%, 0.9)`);
      grad.addColorStop(1, `hsla(${p.hue}, ${p.sat}%, 55%, 0.5)`);

      ctx.fillStyle = grad;

      const s = p.size;
      ctx.beginPath();
      ctx.moveTo(0, s * 0.3);
      ctx.bezierCurveTo(-s * 0.8, -s * 0.2, -s * 1.2, s * 0.6, 0, s);
      ctx.bezierCurveTo(s * 1.2, s * 0.6, s * 0.8, -s * 0.2, 0, s * 0.3);
      ctx.fill();

      // subtle vein
      ctx.strokeStyle = `hsla(${p.hue}, ${p.sat}%, 50%, 0.3)`;
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(0, s * 0.3);
      ctx.quadraticCurveTo(s * 0.1, s * 0.65, 0, s);
      ctx.stroke();

      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (petals.length < 60 && Math.random() < 0.18) {
        petals.push(createPetal());
      }

      petals.forEach((p) => {
        p.tick += 1;
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.tick * p.sway + p.swayOffset) * 0.8;
        p.rotation += p.rotSpeed;
        drawPetal(p);
      });

      petals = petals.filter(
        (p) => p.y < canvas.height + 30 && p.x > -60 && p.x < canvas.width + 60
      );

      animId = requestAnimationFrame(animate);
    }

    resize();
    animate();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.65 }}
    />
  );
}
