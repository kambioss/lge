import { useT } from '../i18n.jsx';
import { commitments } from '../content.js';

export default function Commitments() {
  const t = useT();
  return (
    <section className="section" aria-labelledby="engagements-title">
      <div className="wrap">
        <div className="section__head section__head--row">
          <h2 className="h2" id="engagements-title" data-reveal>{t(commitments.title)}</h2>
        </div>
        <ul className="commit">
          {commitments.items.map((c, i) => (
            <li key={i} data-reveal style={{ '--d': i }}>
              <h3>{t(c.name)}</h3>
              <p>{t(c.text)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
