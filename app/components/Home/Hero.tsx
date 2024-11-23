'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';


export default function Hero() {
  const [inView, setInView] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background */}
      <div
        className={`absolute inset-0 w-full h-full ${inView ? 'animate-slideInBack' : ''}`}
      >
        <Image
          src="/assets/image3.jpg"
          alt="Background"
          fill
          className={`object-cover ${inView ? 'animate-scaleIn' : ''}`}
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 text-white space-y-6">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400" style={{ fontFamily: 'cursive' }}>
    ILLA CHANDRA VIRAT
  </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl font-medium font-[Metropolis] text-gray-600">
          Full Stack Developer | Blogs Writer
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl bg-opacity-80">
          Creating functional, scalable, and innovative solutions. Let’s build extraordinary experiences together.
        </p>
      </div>

      {/* Decorations */}
      <div className="decorations"></div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInBack {
          from {
            transform: scale(1.2);
          }
          to {
            transform: scale(1);
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 1.5s ease-in-out forwards;
        }
        .animate-slideInBack {
          animation: slideInBack 2s ease-in-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 2s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
}
