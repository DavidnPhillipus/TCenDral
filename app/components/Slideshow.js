'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Slideshow({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="hero__slideshow" aria-label="TCenDral photo slideshow">
      {slides.map((slide, index) => (
        <div key={slide.src} className={`hero__slide ${index === activeIndex ? 'active' : ''}`}>
          <Image src={slide.src} alt={slide.alt} fill priority={index === 0} sizes="(max-width: 1150px) 100vw, 50vw" />
          <div className="hero__slide-caption">{slide.caption}</div>
        </div>
      ))}
      <div className="hero__slide-dots" aria-label="Choose slideshow image">
        {slides.map((slide, index) => (
          <button key={slide.caption} type="button" className={index === activeIndex ? 'active' : ''} onClick={() => setActiveIndex(index)} aria-label={`Show ${slide.caption}`} />
        ))}
      </div>
    </div>
  );
}
