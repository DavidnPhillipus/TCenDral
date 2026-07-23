import Image from 'next/image';
import SiteFooter from '../components/SiteFooter';
import { projects } from '../data';

export const metadata = { title: 'Work | TCenDral' };

export default function WorkPage() {
  const movingProjects = [...projects, ...projects];
  return <><main className="main"><section className="section hero"><div className="container"><div className="section__header"><p className="section__label">Selected work</p><h1>Ideas turned into useful products.</h1><p className="section__description">A selection of client work, experiments, and product concepts across modern software ecosystems.</p></div><div className="domain-marquee" aria-label="Moving project showcase"><div className="domain-marquee__track">{movingProjects.map((project, index) => <article className="domain-card" key={`${project.title}-${index}`}><div className="domain-card__media"><Image src={project.image} alt={project.title} width={800} height={600} /></div><div className="domain-card__content"><p className="section__label">Project</p><h2>{project.title}</h2><p>{project.description}</p><a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">View project</a></div></article>)}</div></div></div></section></main><SiteFooter /></>;
}
