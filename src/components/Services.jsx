import { useState } from 'react';
import { useT } from '../i18n.jsx';
import { services } from '../content.js';

export default function Services() {
  const t = useT();
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="section" id="prestations" aria-labelledby="prestations-title">
      <div className="wrap services__grid">
        <div className="services__side">
          <h2 className="h2" id="prestations-title" data-reveal>{t(services.title)}</h2>
          <p className="section__intro" data-reveal style={{ '--d': 1 }}>{t(services.intro)}</p>
          <img className="services__photo" data-reveal style={{ '--d': 2 }} src={services.photo.src} width={services.photo.w}
            height={services.photo.h} alt={t(services.photo.alt)} loading="lazy" />
        </div>
        <ol className="accordion" data-reveal>
          {services.items.map((s, i) => {
            const open = openIdx === i;
            return (
              <li key={i} className={open ? 'is-open' : undefined}>
                <h3>
                  <button type="button" aria-expanded={open} aria-controls={`svc-${i}`} onClick={() => setOpenIdx(open ? -1 : i)}>
                    <span className="accordion__name">{t(s.name)}</span>
                    <span className="accordion__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div className="accordion__panel" id={`svc-${i}`} role="region">
                  <div><p>{t(s.text)}</p></div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
