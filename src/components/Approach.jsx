import { useEffect, useRef } from 'react';
import { useT } from '../i18n.jsx';
import { approach } from '../content.js';

export default function Approach() {
  const t = useT();
  const video = useRef(null);
  const line = useRef(null);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { video.current?.pause(); return; }
    // The line under the steps fills as the section crosses the screen.
    let frame = 0;
    const update = () => {
      const el = line.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = Math.min(Math.max((innerHeight * 0.85 - r.top) / (innerHeight * 0.5), 0), 1);
      el.style.setProperty('--p', p.toFixed(3));
    };
    const on = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update();
    addEventListener('scroll', on, { passive: true });
    return () => { removeEventListener('scroll', on); cancelAnimationFrame(frame); };
  }, []);

  return (
    <section className="approach" id="demarche" aria-labelledby="demarche-title">
      <video ref={video} className="approach__video" src={approach.video.src} poster={approach.video.poster}
        autoPlay muted loop playsInline aria-hidden="true" />
      <div className="wrap approach__in">
        <div className="section__head section__head--light">
          <h2 className="h2" id="demarche-title" data-reveal>{t(approach.title)}</h2>
          <p className="section__intro" data-reveal style={{ '--d': 1 }}>{t(approach.intro)}</p>
        </div>
        <ol className="steps" ref={line}>
          {approach.steps.map((s, i) => (
            <li key={i} data-reveal style={{ '--d': i }}>
              <span className="steps__dot">{i + 1}</span>
              <h3>{t(s.name)}</h3>
              <p>{t(s.text)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
