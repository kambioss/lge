import { useT } from '../i18n.jsx';
import { cta } from '../content.js';

export default function Cta() {
  const t = useT();
  return (
    <section className="cta" aria-labelledby="cta-title">
      <img className="cta__bg drift" src={cta.photo.src} width={cta.photo.w} height={cta.photo.h} alt={t(cta.photo.alt)} loading="lazy" />
      <div className="wrap cta__in" data-reveal>
        <h2 className="h2" id="cta-title">{t(cta.title)}</h2>
        <p>{t(cta.text)}</p>
        <a className="btn btn--light" href="#contact">{t(cta.action)}</a>
      </div>
    </section>
  );
}
