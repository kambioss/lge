import { useState } from 'react';
import { useLang, useT } from '../i18n.jsx';
import { parameters, reader, mailto } from '../content.js';

const fmt = (n, lang) => n.toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-GB', { maximumFractionDigits: 3 });

export default function Reader() {
  const t = useT();
  const { lang } = useLang();
  const [paramId, setParamId] = useState(parameters[0].id);
  const [raw, setRaw] = useState(String(parameters[0].sample));

  const param = parameters.find((p) => p.id === paramId);
  const value = Number.parseFloat(raw.replace(',', '.').replace(/\s/g, ''));
  const valid = Number.isFinite(value) && value >= 0;
  const ratio = valid ? value / param.limit : 0;
  const pct = Math.round(ratio * 100);
  const state = !valid ? 'empty' : ratio < 1 ? 'below' : ratio === 1 ? 'at' : 'above';
  const unit = (n) => `${fmt(n, lang)} ${param.unit}`;

  const choose = (id) => {
    const next = parameters.find((p) => p.id === id);
    setParamId(id);
    setRaw(fmt(next.sample, lang));
  };

  return (
    <section className="section section--tint" id="lire" aria-labelledby="lire-title">
      <div className="wrap reader">
      <div className="reader__side" data-reveal>
        <table className="ref">
          <caption>{t(reader.tableCaption)}</caption>
          <thead><tr><th scope="col">{t(reader.colParam)}</th><th scope="col">{t(reader.colValue)}</th></tr></thead>
          <tbody>
            {parameters.map((p) => (
              <tr key={p.id} className={p.id === paramId ? 'is-current' : undefined}>
                <td>
                  <button type="button" className="ref__pick" onClick={() => choose(p.id)}>{t(p.name)}</button>
                </td>
                <td className="nums">{fmt(p.limit, lang)}&nbsp;{p.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="reader__main">
        <h2 className="h2" id="lire-title" data-reveal>{t(reader.title)}</h2>
        <p className="reader__intro" data-reveal style={{ '--d': 1 }}>{t(reader.intro)}</p>

        <form className="reader__form" data-reveal style={{ '--d': 2 }} onSubmit={(e) => e.preventDefault()}>
          <label className="reader__field">
            <span>{t(reader.fieldParam)}</span>
            <select className="field" value={paramId} onChange={(e) => choose(e.target.value)}>
              {parameters.map((p) => <option key={p.id} value={p.id}>{t(p.name)}</option>)}
            </select>
          </label>
          <label className="reader__field">
            <span>{t(reader.fieldValue)}</span>
            <span className="reader__input">
              <input className="field nums" type="text" inputMode="decimal" autoComplete="off"
                value={raw} onChange={(e) => setRaw(e.target.value)} />
              <span className="reader__unit">{param.unit}</span>
            </span>
          </label>
        </form>

        <div className={`reader__out is-${state}`} aria-live="polite" data-reveal style={{ '--d': 3 }}>
          <p className="reader__verdict">{t(reader[state])}</p>
          <div className="gauge" aria-hidden="true">
            <span className="gauge__fill" style={{ transform: `scaleX(${Math.min(ratio, 2) / 2})` }} />
            <span className="gauge__limit" />
          </div>
          <p className="reader__detail nums">
            {valid ? reader.detail[lang](unit(value), fmt(pct, lang), unit(param.limit)) : t(reader.emptyDetail)}
          </p>
          <p className="reader__note">{t(reader.note)}</p>
          <a className="btn btn--ghost" href={mailto(lang)}>{t(reader.ask)}</a>
        </div>
      </div>
      </div>
    </section>
  );
}
