'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/skills', label: 'Skills' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link href="/" className="nav__logo" onClick={closeMenu}>
          <span className="nav__logo-mark">T</span>
          <span className="nav__logo-text">TCenDral</span>
        </Link>

        <div className={`nav__menu ${isOpen ? 'show-menu' : ''}`} id="nav-menu">
          <button className="nav__close" type="button" onClick={closeMenu} aria-label="Close menu">
            <i className="ri-close-large-line"></i>
          </button>

          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="nav__link" onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#contact" className="nav__contact" onClick={closeMenu}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <button className="nav__toggle" type="button" onClick={() => setIsOpen(true)} aria-label="Toggle menu">
          <i className="ri-menu-line"></i>
        </button>
      </nav>
    </header>
  );
}
