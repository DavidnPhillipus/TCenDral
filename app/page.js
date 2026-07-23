import Link from 'next/link';
import Slideshow from './components/Slideshow';
import SiteFooter from './components/SiteFooter';
import { slides } from './data';

export default function HomePage() {
  return (
    <>
      <main className="main">
        <section className="hero section" id="home">
          <div className="container hero__grid">
            <div className="hero__content">
              <p className="hero__eyebrow">We build digital products across every layer</p>
              <h1>Meet <span>TCenDral</span> — a sharp team.</h1>
              <p className="hero__subtitle"><i className="ri-global-line" /><i className="ri-smartphone-line" /><i className="ri-computer-line" /><i className="ri-robot-line" /></p>
              <p className="hero__text">From responsive web platforms to native apps, desktop tools, machine-learning experiences, and AI-powered products, we turn ambitious ideas into reliable software.</p>
              <div className="hero__buttons"><Link href="/work" className="button">See our work</Link><Link href="/about" className="button button--secondary">Meet the team</Link></div>
              <div className="hero__stats"><div><strong>3</strong><span>Creators</span></div><div><strong>100%</strong><span>Passion</span></div><div><strong>24/7</strong><span>Support</span></div></div>
            </div>
            <div className="hero__image-card"><Slideshow slides={slides} /></div>
          </div>
        </section>
        <section className="contact section" id="contact">
          <div className="container contact__wrapper">
            <div>
              <p className="section__label">Contact us</p>
              <h2>Send us a message.</h2>
              <p className="section__description">Tell us about your idea, project, or question and we’ll get back to you.</p>
              <p className="contact__details"><a href="tel:+264814184911">+264 81 418 4911</a><br /><a href="mailto:david.n.phillipus@gmail.com">david.n.phillipus@gmail.com</a></p>
            </div>
            <form className="contact__form" id="contact-form" action="mailto:david.n.phillipus@gmail.com" method="post" encType="text/plain">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" placeholder="Your name" required />
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" placeholder="you@example.com" required />
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={5} placeholder="Tell us about your idea" required />
              <button type="submit" className="button">Send message</button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
