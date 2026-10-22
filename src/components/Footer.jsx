import { useT } from '../i18n.jsx';
import { footer, credits, nav, EMAIL } from '../content.js';
import { Logo } from './Header.jsx';

export default function Footer() {
  const t = useT();
  const pd = t({ fr: 'domaine public', en: 'public domain' });
  return (
    <footer className="footer">
      <div className="wrap footer__cols">
        <div>
          <Logo />
          <p className="footer__about">{t(footer.fullName)}</p>
        </div>
        <ul>
          <li className="footer__head">{t(footer.pages)}</li>
          {nav.map((l) => <li key={l.href}><a href={l.href}>{t(l.label)}</a></li>)}
        </ul>
        <ul>
          <li className="footer__head">Contact</li>
          <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          <li>{t(footer.replies)}</li>
        </ul>
      </div>
      <div className="footer__base">
      <div className="wrap footer__bottom">
        <p className="footer__legal">© LGE International</p>
        {/* The CC BY and CC BY-SA licences require a credit; it stays one click away instead of on show. */}
        <details className="footer__credits">
          <summary>{t({ fr: 'Crédits photos', en: 'Photo credits' })}</summary>
          <p>
            {credits.map((c, i) => (
              <span key={i}>
                <a href={c.url}>{c.title}</a>, {c.by},{' '}
                {c.licence === 'pd' ? pd : c.licenceUrl ? <a href={c.licenceUrl}>{c.licence}</a> : c.licence}.{' '}
              </span>
            ))}
          </p>
        </details>
      </div>
      </div>
    </footer>
  );
}
