import { useEffect, useState } from 'react';
import { useLang, useT } from '../i18n.jsx';
import { nav, topbar, hero, EMAIL } from '../content.js';

export function Logo() {
  return (
    <span className="logo">
      <svg className="logo__mark" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="6" />
        <path d="M20 8c-6 7-9 12-9 16a9 9 0 0 0 18 0c0-4-3-9-9-16Z" />
        <path className="logo__vein" d="M20 33V20m0 6 4-4m-4 0-3-3" />
      </svg>
      <span className="logo__text">
        <strong>LGE International</strong>
        <small lang="fr">Gestion de l'environnement</small>
      </span>
    </span>
  );
}

export default function Header() {
  const t = useT();
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(scrollY > 40);
    on();
    addEventListener('scroll', on, { passive: true });
    return () => removeEventListener('scroll', on);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar__in">
          <span>{t(topbar.tagline)}</span>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>
      <header className={`header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
        <div className="wrap header__in">
          <a href="#top" aria-label={t({ fr: 'LGE International, accueil', en: 'LGE International, home' })}><Logo /></a>
          <nav className="nav" id="nav" aria-label={t({ fr: 'Navigation principale', en: 'Main navigation' })}>
            <ul>
              {nav.map((item) => (
                <li key={item.href}><a href={item.href} onClick={() => setOpen(false)}>{t(item.label)}</a></li>
              ))}
            </ul>
          </nav>
          <div className="header__end">
            <div className="lang" role="group" aria-label={t({ fr: 'Langue', en: 'Language' })}>
              {['fr', 'en'].map((code) => (
                <button key={code} type="button" lang={code} aria-pressed={lang === code} onClick={() => setLang(code)}>
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <a className="btn btn--small" href="#contact">{t(hero.primary)}</a>
            <button type="button" className="burger" aria-expanded={open} aria-controls="nav"
              aria-label={open ? t({ fr: 'Fermer le menu', en: 'Close menu' }) : t({ fr: 'Ouvrir le menu', en: 'Open menu' })}
              onClick={() => setOpen((v) => !v)}>
              <span /><span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
