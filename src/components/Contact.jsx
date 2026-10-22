import { useState } from 'react';
import { useLang, useT } from '../i18n.jsx';
import { contact, services, EMAIL, mailto } from '../content.js';

export default function Contact() {
  const t = useT();
  const { lang } = useLang();
  const [form, setForm] = useState({ name: '', org: '', service: 0, medium: 0, message: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const f = contact.fields;

  const submit = (e) => {
    e.preventDefault();
    const sep = lang === 'fr' ? ' : ' : ': ';
    const lines = [
      `${t(f.name)}${sep}${form.name}`,
      `${t(f.org)}${sep}${form.org}`,
      `${t(f.service)}${sep}${t(services.items[form.service].name)}`,
      `${t(f.medium)}${sep}${t(contact.media[form.medium])}`,
      '',
      form.message,
    ];
    const subject = `${t(contact.subject)}, ${t(services.items[form.service].name)}`;
    location.href = mailto(lang, subject, lines.join('\n'));
  };

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact__grid">
        <div className="contact__side">
          <h2 className="h2" id="contact-title" data-reveal>{t(contact.title)}</h2>
          <p data-reveal style={{ '--d': 1 }}>{t(contact.intro)}</p>
          <dl className="contact__info" data-reveal style={{ '--d': 2 }}>
            <div><dt>{t(contact.emailLabel)}</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
            <div><dt>{t(contact.langLabel)}</dt><dd>{t(contact.langValue)}</dd></div>
            <div><dt>{t(contact.zoneLabel)}</dt><dd>{t(contact.zoneValue)}</dd></div>
          </dl>
          <img className="contact__photo" data-reveal style={{ '--d': 3 }} src={contact.photo.src} width={contact.photo.w}
            height={contact.photo.h} alt={t(contact.photo.alt)} loading="lazy" />
        </div>
        <form className="form" onSubmit={submit} data-reveal style={{ '--d': 1 }}>
          <label><span>{t(f.name)}</span><input className="field" required value={form.name} onChange={set('name')} autoComplete="name" /></label>
          <label><span>{t(f.org)}</span><input className="field" value={form.org} onChange={set('org')} autoComplete="organization" /></label>
          <label>
            <span>{t(f.service)}</span>
            <select className="field" value={form.service} onChange={set('service')}>
              {services.items.map((s, i) => <option key={i} value={i}>{t(s.name)}</option>)}
            </select>
          </label>
          <label>
            <span>{t(f.medium)}</span>
            <select className="field" value={form.medium} onChange={set('medium')}>
              {contact.media.map((m, i) => <option key={i} value={i}>{t(m)}</option>)}
            </select>
          </label>
          <label className="form__wide">
            <span>{t(f.message)}</span>
            <textarea className="field" rows="6" required value={form.message} onChange={set('message')} placeholder={t(f.placeholder)} />
          </label>
          <button className="btn form__wide" type="submit">{t(contact.action)}</button>
        </form>
      </div>
    </section>
  );
}
