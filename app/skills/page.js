import { FaBrain, FaCloud, FaCode, FaDatabase, FaGitAlt, FaPaintBrush, FaRobot, FaServer } from 'react-icons/fa';
import { SiDocker, SiFigma, SiJavascript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import SiteFooter from '../components/SiteFooter';

export const metadata = { title: 'Skills | TCenDral' };

const groups = [
  ['Languages', <FaCode />, [['JavaScript', <SiJavascript />], ['TypeScript', <SiTypescript />], ['Python', <SiPython />], ['SQL', <FaDatabase />]]],
  ['Frontend', <SiReact />, [['React', <SiReact />], ['Next.js', <SiNextdotjs />], ['Tailwind CSS', <SiTailwindcss />], ['Responsive UI', <FaPaintBrush />]]],
  ['Backend', <FaServer />, [['Node.js', <SiNodedotjs />], ['REST APIs', <FaServer />], ['JWT & Sessions', <FaServer />]]],
  ['Databases & ORM', <FaDatabase />, [['PostgreSQL', <SiPostgresql />], ['Prisma ORM', <SiPrisma />], ['MongoDB', <FaDatabase />]]],
  ['AI & Automation', <FaRobot />, [['OpenAI API', <FaRobot />], ['AI Chatbots', <FaBrain />], ['RAG', <FaBrain />]]],
  ['DevOps & Cloud', <FaCloud />, [['Docker', <SiDocker />], ['Linux', <FaCloud />], ['Vercel', <SiNextdotjs />]]],
  ['Version Control', <FaGitAlt />, [['Git', <FaGitAlt />], ['GitHub', <FaGitAlt />]]],
  ['UI/UX', <FaPaintBrush />, [['Figma', <SiFigma />], ['Wireframing', <FaPaintBrush />]]],
];

export default function SkillsPage() {
  return <><main className="main"><section className="section hero"><div className="container"><div className="section__header"><p className="section__label">Skills</p><h1>Our toolkit for modern digital products.</h1><p className="section__description">The technologies we use to design, build, and launch high-quality experiences.</p></div><div className="skills__page-grid">{groups.map(([title, icon, skills]) => <article className="skills__card" key={title}><div className="skills__card-head"><span className="skills__icon">{icon}</span><h2>{title}</h2></div><div className="skills__chips">{skills.map(([name, skillIcon]) => <span className="skills__chip" key={name}><span className="skills__chip-icon">{skillIcon}</span>{name}</span>)}</div></article>)}</div></div></section></main><SiteFooter /></>;
}
