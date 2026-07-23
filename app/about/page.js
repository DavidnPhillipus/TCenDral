import SiteFooter from '../components/SiteFooter';
import TeamSlideshow from '../components/TeamSlideshow';
import { profiles } from '../data';

export const metadata = { title: 'About | TCenDral' };

export default function AboutPage() {
  return <><main className="main about-page"><section className="section hero"><div className="container about-hero-layout"><div className="about-hero-copy"><p className="section__label">About us</p><h1>Meet the people behind <span>TCenDral</span>.</h1><p className="section__description">A team of builders from NUST combining study, creativity, and hands-on product experience.</p></div><TeamSlideshow profiles={profiles} /></div></section></main><SiteFooter /></>;
}
