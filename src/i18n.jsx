import { createContext, useContext, useEffect, useState } from 'react';

const LangContext = createContext({ lang: 'fr', setLang: () => {} });

const META = {
  fr: {
    title: "LGE International, Laboratoire International de Gestion de l'Environnement",
    description: "LGE International analyse l'eau, les sols et l'air, conduit des études d'impact et des audits environnementaux, et forme les équipes techniques.",
  },
  en: {
    title: 'LGE International, International Laboratory of Environmental Management',
    description: 'LGE International analyses water, soil and air, carries out environmental impact studies and audits, and trains technical teams.',
  },
};

function initialLang() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (fromUrl === 'fr' || fromUrl === 'en') return fromUrl;
  try {
    const saved = localStorage.getItem('lge-lang');
    if (saved === 'fr' || saved === 'en') return saved;
  } catch {}
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', META[lang].description);
    try { localStorage.setItem('lge-lang', lang); } catch {}
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

// Picks the string for the current language from a { fr, en } pair.
export function useT() {
  const { lang } = useLang();
  return (pair) => (typeof pair === 'string' ? pair : pair[lang]);
}
