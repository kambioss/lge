import { useT } from '../i18n.jsx';
import { hero, pillars } from '../content.js';

function Check() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10.5 4 4 8-9" /></svg>
  );
}

export default function Hero() {
  const t = useT();
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <h1 className="hero__title" data-rise>{t(hero.title)}</h1>
          <p className="hero__lead" data-rise style={{ '--i': 1 }}>{t(hero.lead)}</p>
          <div className="hero__actions" data-rise style={{ '--i': 2 }}>
            <a className="btn" href="#contact">{t(hero.primary)}</a>
            <a className="btn btn--ghost" href="#expertises">{t(hero.secondary)}</a>
          </div>
          <ul className="checks" data-rise style={{ '--i': 3 }}>
            {hero.points.map((p, i) => <li key={i}><Check />{t(p)}</li>)}
          </ul>
        </div>
        <figure className="hero__media">
          <div className="hero__photo">
            <img src={hero.photo.src} width={hero.photo.w} height={hero.photo.h} alt={t(hero.photo.alt)} fetchPriority="high" />
          </div>
          <figcaption className="hero__inset" data-rise style={{ '--i': 3 }}>
            <img src={hero.inset.src} width={hero.inset.w} height={hero.inset.h} alt={t(hero.inset.alt)} />
            <span>{t(hero.insetCaption)}</span>
          </figcaption>
        </figure>
      </div>
      <div className="pillars">
        <ul className="wrap pillars__in">
          {pillars.map((p, i) => (
            <li key={i} data-reveal style={{ '--d': i }}>
              <strong>{t(p.name)}</strong>
              <span>{t(p.text)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
