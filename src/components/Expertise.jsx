import { useT } from '../i18n.jsx';
import { expertise } from '../content.js';

export default function Expertise() {
  const t = useT();
  return (
    <section className="section section--tint" id="expertises" aria-labelledby="expertises-title">
      <div className="wrap">
        <div className="section__head">
          <h2 className="h2" id="expertises-title" data-reveal>{t(expertise.title)}</h2>
          <p className="section__intro" data-reveal style={{ '--d': 1 }}>{t(expertise.intro)}</p>
        </div>
        <ul className="cards">
          {expertise.items.map((item, i) => (
            <li className="card" key={i} data-reveal style={{ '--d': i % 3 }}>
              <div className="card__img">
                <img src={item.photo.src} width={item.photo.w} height={item.photo.h} alt={t(item.photo.alt)} loading="lazy" />
              </div>
              <div className="card__body">
                <h3>{t(item.name)}</h3>
                <p>{t(item.text)}</p>
              </div>
            </li>
          ))}
          <li className="card card--other" data-reveal style={{ '--d': 2 }}>
            <div className="card__body">
              <h3>{t(expertise.other.title)}</h3>
              <p>{t(expertise.other.text)}</p>
              <a className="btn btn--light" href="#contact">{t(expertise.other.action)}</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
