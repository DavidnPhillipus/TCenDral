'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function TeamSlideshow({ profiles }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProfile = profiles[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % profiles.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [profiles.length]);

  return (
    <div className="team-slideshow" aria-label="TCenDral team slideshow">
      <div className="team-slideshow__media">
        {profiles.map((profile, index) => (
          <div key={profile.name} className={`team-slideshow__slide ${index === activeIndex ? 'active' : ''}`}>
            <Image src={profile.image} alt={profile.title} fill priority={index === 0} sizes="(max-width: 899px) 100vw, 40vw" />
          </div>
        ))}
        <div className="hero__slide-caption">{activeProfile.title}</div>
        <div className="hero__slide-dots" aria-label="Choose team member">
          {profiles.map((profile, index) => (
            <button key={profile.name} type="button" className={index === activeIndex ? 'active' : ''} onClick={() => setActiveIndex(index)} aria-label={`Show ${profile.title}`} />
          ))}
        </div>
      </div>
      <article className="team-slideshow__details">
        <p className="about__eyebrow">Team member</p>
        <h2>{activeProfile.title}</h2>
        <p>{activeProfile.text1}</p>
        <p>{activeProfile.text2}</p>
        <div className="about__chips">
          {activeProfile.chips.map((chip) => <span key={chip}>{chip}</span>)}
        </div>
      </article>
    </div>
  );
}
