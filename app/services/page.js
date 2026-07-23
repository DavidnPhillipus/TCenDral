import SiteFooter from '../components/SiteFooter';
import { services } from '../data';

export const metadata = { title: 'Services | TCenDral' };

export default function ServicesPage() {
  return <><main className="main services-page"><section className="section hero"><div className="container"><div className="section__header"><p className="section__label">Services</p><h1>We build for every screen and smart experience.</h1><p className="section__description">Desktop, mobile, web, AI, and machine learning.</p></div><div className="services-grid">{services.map((service) => <article key={service.label} className="service-card"><div className="service-card__icon"><i className={service.icon} /></div><h2>{service.label}</h2></article>)}</div></div></section></main><SiteFooter /></>;
}
