import { useT } from '../i18n.jsx';
import { about } from '../content.js';

export default function About() {
  const t = useT();
  return (
    <section className="section about" id="cabinet" aria-labelledby="cabinet-title">
      <div className="wrap about__grid">
        <div className="about__media" data-reveal>
          <img className="about__main" src={about.photo.src} width={about.photo.w} height={about.photo.h} alt={t(about.photo.alt)} loading="lazy" />
          <img className="about__second" src={about.photo2.src} width={about.photo2.w} height={about.photo2.h} alt={t(about.photo2.alt)} loading="lazy" />
        </div>
        <div className="about__text">
          <h2 className="h2" id="cabinet-title" data-reveal>{t(about.title)}</h2>
          {about.paragraphs.map((p, i) => <p key={i} data-reveal style={{ '--d': i + 1 }}>{t(p)}</p>)}
          <dl className="facts" data-reveal style={{ '--d': 3 }}>
            {about.facts.map((f, i) => (
              <div key={i}><dt>{t(f.label)}</dt><dd>{t(f.value)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
