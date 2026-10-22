// All page copy, in French and English. French typography uses a non-breaking space before : ; ? !
const nb = ' ';
const A = 'assets/';

export const EMAIL = 'contact@lge-international.org';

export const nav = [
  { href: '#cabinet', label: { fr: 'Le cabinet', en: 'The firm' } },
  { href: '#expertises', label: { fr: 'Expertises', en: 'Expertise' } },
  { href: '#prestations', label: { fr: 'Prestations', en: 'Services' } },
  { href: '#demarche', label: { fr: 'Démarche', en: 'Approach' } },
  { href: '#lire', label: { fr: 'Outil', en: 'Tool' } },
];

export const topbar = {
  tagline: { fr: 'Conseil et laboratoire en environnement', en: 'Environmental consulting and laboratory' },
  languages: { fr: 'Français, anglais', en: 'French, English' },
};

export const hero = {
  title: { fr: 'Conseil et analyses en environnement', en: 'Environmental advice and analysis' },
  lead: {
    fr: "LGE International réalise les études d'impact, les audits et les analyses de l'eau, des sols et de l'air dont vos projets ont besoin pour être autorisés, financés et suivis.",
    en: 'LGE International carries out the impact studies, audits and water, soil and air analyses your projects need to be permitted, funded and monitored.',
  },
  primary: { fr: 'Demander un devis', en: 'Request a quote' },
  secondary: { fr: 'Nos expertises', en: 'Our expertise' },
  points: [
    { fr: 'Prélèvements et mesures sur le terrain', en: 'Field sampling and measurement' },
    { fr: 'Analyses dans notre laboratoire', en: 'Analysis in our own laboratory' },
    { fr: 'Rapports en français et en anglais', en: 'Reports in French and English' },
  ],
  photo: {
    src: A + 'lab-team-nairobi.jpg', w: 1920, h: 1280,
    alt: { fr: 'Trois scientifiques en blouse blanche préparent des échantillons dans un laboratoire à Nairobi.', en: 'Three scientists in white coats prepare samples in a laboratory in Nairobi.' },
  },
  inset: {
    src: A + 'borehole-water-test.jpg', w: 1920, h: 1440,
    alt: { fr: "Une équipe contrôle la qualité de l'eau d'un forage sur le chantier.", en: 'A crew checks the water quality of a borehole on site.' },
  },
  insetCaption: { fr: 'Contrôle sur le terrain', en: 'Checks in the field' },
};

export const pillars = [
  { name: { fr: 'Eau', en: 'Water' }, text: { fr: 'Surface, nappes, eau potable, rejets', en: 'Surface, groundwater, drinking water, discharges' } },
  { name: { fr: 'Sols', en: 'Soil' }, text: { fr: 'Diagnostic, pollution, réhabilitation', en: 'Diagnosis, pollution, remediation' } },
  { name: { fr: 'Air', en: 'Air' }, text: { fr: 'Air ambiant, poussières, émissions', en: 'Ambient air, dust, emissions' } },
  { name: { fr: 'Milieux naturels', en: 'Natural habitats' }, text: { fr: "Zones humides, cours d'eau, biodiversité", en: 'Wetlands, rivers, biodiversity' } },
];

export const about = {
  title: { fr: 'Un cabinet adossé à son laboratoire', en: 'A consultancy with its own laboratory' },
  paragraphs: [
    {
      fr: "La gestion de l'environnement commence par un chiffre fiable. Notre métier est de le produire, de dire jusqu'où s'y fier et d'expliquer ce qu'il implique pour votre projet.",
      en: 'Environmental management starts with a reliable figure. Our work is to produce it, to say how far it can be trusted and to explain what it means for your project.',
    },
    {
      fr: `Nous travaillons pour celui qui a une décision à prendre${nb}: une commune qui choisit une ressource en eau, une usine qui prépare un audit, un projet financé sous condition d'étude d'impact.`,
      en: 'We work for whoever has a decision to make: a municipality choosing a water source, a factory preparing an audit, a project financed on condition of an impact study.',
    },
  ],
  facts: [
    { label: { fr: 'Nom complet', en: 'Full name' }, value: { fr: "Laboratoire International de Gestion de l'Environnement", en: 'International Laboratory of Environmental Management' } },
    { label: { fr: 'Clients', en: 'Clients' }, value: { fr: 'Collectivités, industriels, bailleurs de fonds', en: 'Local authorities, industry, funders' } },
    { label: { fr: 'Langues de travail', en: 'Working languages' }, value: { fr: 'Français, anglais', en: 'French, English' } },
  ],
  photo: {
    src: A + 'lab-scientist-nairobi.jpg', w: 1920, h: 1280,
    alt: { fr: 'Un scientifique pipette des échantillons à la paillasse.', en: 'A scientist pipettes samples at the bench.' },
  },
  photo2: {
    src: A + 'lab-analyst-nairobi.jpg', w: 1920, h: 1280,
    alt: { fr: 'Une analyste manipule un portoir d\'échantillons.', en: 'An analyst handles a sample rack.' },
  },
};

export const expertise = {
  title: { fr: "Domaines d'expertise", en: 'Areas of expertise' },
  intro: {
    fr: 'Chaque mission associe un chef de projet, des techniciens de terrain et le laboratoire, sur un ou plusieurs milieux.',
    en: 'Every assignment brings together a project lead, field technicians and the laboratory, on one or more media.',
  },
  items: [
    {
      name: { fr: 'Eau et assainissement', en: 'Water and sanitation' },
      text: { fr: "Qualité des eaux de surface et des nappes, eau potable, eaux usées et rejets industriels.", en: 'Surface and groundwater quality, drinking water, wastewater and industrial discharges.' },
      photo: { src: A + 'boat-turquoise.jpg', w: 1600, h: 1000, alt: { fr: 'Une barque sur une eau claire et turquoise.', en: 'A small boat on clear turquoise water.' } },
    },
    {
      name: { fr: 'Sols et sites pollués', en: 'Soil and polluted sites' },
      text: { fr: 'Diagnostic des sols, pollution aux hydrocarbures et aux métaux, plans de réhabilitation.', en: 'Soil diagnosis, hydrocarbon and metal pollution, remediation plans.' },
      photo: { src: A + 'wf-bodenprofil-2.jpg', w: 1920, h: 1280, alt: { fr: 'Profil de sol dans une fosse étayée.', en: 'A soil profile in a shored pit.' } },
    },
    {
      name: { fr: 'Air et émissions', en: 'Air and emissions' },
      text: { fr: 'Mesure de l\'air ambiant, des poussières, des gaz et des émissions des installations.', en: 'Measurement of ambient air, dust, gases and plant emissions.' },
      photo: { src: A + 'mobile-air-quality-monitoring-station-in-zurich.jpg', w: 1920, h: 2044, alt: { fr: "Station mobile de mesure de l'air à Zurich.", en: 'A mobile air monitoring station in Zurich.' } },
    },
    {
      name: { fr: 'Milieux naturels', en: 'Natural habitats' },
      text: { fr: "Inventaires des zones humides, des cours d'eau et de la biodiversité des sites étudiés.", en: 'Surveys of wetlands, rivers and the biodiversity of the sites we study.' },
      photo: { src: A + 'wetland-reserve-in-al-azraq.jpg', w: 1600, h: 1200, alt: { fr: "Réserve humide d'Azraq, en Jordanie.", en: 'The Azraq wetland reserve in Jordan.' } },
    },
    {
      name: { fr: 'Eaux souterraines', en: 'Groundwater' },
      text: { fr: 'Conception et suivi de réseaux de piézomètres, campagnes de mesure dans la durée.', en: 'Design and monitoring of observation well networks, long-term measurement campaigns.' },
      photo: { src: A + 'stephen-c-foster-state-park-usgs-observation.jpg', w: 1920, h: 1440, alt: { fr: "Station de suivi d'une nappe en forêt.", en: 'A groundwater monitoring station in woodland.' } },
    },
  ],
  other: {
    title: { fr: 'Un autre besoin ?', en: 'Something else?' },
    text: { fr: 'Décrivez-nous votre site et votre question, nous vous dirons comment y répondre.', en: 'Tell us about your site and your question, and we will tell you how to answer it.' },
    action: { fr: 'Nous écrire', en: 'Write to us' },
  },
};

export const services = {
  title: { fr: 'Nos prestations', en: 'Our services' },
  intro: {
    fr: 'Des missions ponctuelles ou un accompagnement sur toute la durée du projet, de l\'autorisation au suivi.',
    en: 'One-off assignments or support over the whole life of a project, from permit to monitoring.',
  },
  photo: {
    src: A + 'lab-bench-nairobi.jpg', w: 1920, h: 1276,
    alt: { fr: 'Des analystes au travail dans un laboratoire équipé.', en: 'Analysts at work in an equipped laboratory.' },
  },
  items: [
    {
      name: { fr: "Études d'impact environnemental et social", en: 'Environmental and social impact studies' },
      text: { fr: "État initial du site, analyse des impacts, mesures d'évitement et de compensation, plan de gestion. Conformes aux exigences nationales et à celles des bailleurs.", en: 'Site baseline, impact analysis, avoidance and offset measures, management plan. In line with national requirements and those of funders.' },
    },
    {
      name: { fr: 'Audits environnementaux et de conformité', en: 'Environmental and compliance audits' },
      text: { fr: 'Visite des installations, revue documentaire, écarts réglementaires et plan de mise en conformité chiffré.', en: 'Site inspection, document review, regulatory gaps and a costed compliance plan.' },
    },
    {
      name: { fr: 'Plans de gestion environnementale', en: 'Environmental management plans' },
      text: { fr: 'Mesures concrètes, responsables, calendrier et indicateurs de suivi pour la phase de travaux et d\'exploitation.', en: 'Practical measures, owners, timetable and monitoring indicators for construction and operation.' },
    },
    {
      name: { fr: "Analyses de l'eau, des sols et de l'air", en: 'Water, soil and air analysis' },
      text: { fr: "Prélèvements, analyses physico-chimiques et bulletins de résultats comparés aux valeurs de référence.", en: 'Sampling, physical and chemical analysis and result reports compared with reference values.' },
    },
    {
      name: { fr: 'Conception de réseaux de suivi', en: 'Monitoring network design' },
      text: { fr: 'Choix des points, des paramètres et des fréquences, puis campagnes de mesure dans la durée.', en: 'Choice of points, parameters and frequencies, then long-term measurement campaigns.' },
    },
    {
      name: { fr: 'Formation des équipes techniques', en: 'Training for technical teams' },
      text: { fr: 'Prélèvement, conservation des échantillons, lecture des résultats, sur site ou dans nos locaux.', en: 'Sampling, sample preservation and reading results, on site or at our premises.' },
    },
  ],
};

export const approach = {
  title: { fr: 'Notre démarche', en: 'Our approach' },
  intro: { fr: 'Quatre étapes, les mêmes pour chaque mission.', en: 'Four steps, the same for every assignment.' },
  video: {
    src: A + 'river-rwizi-and-its-vegetation-and-the.webm',
    poster: A + 'river-rwizi-and-its-vegetation-and-the-poster.jpg',
  },
  steps: [
    { name: { fr: 'Cadrage', en: 'Scoping' }, text: { fr: "Votre question, le site, la réglementation applicable et un devis détaillé.", en: 'Your question, the site, the applicable rules and a detailed quote.' } },
    { name: { fr: 'Terrain', en: 'Field' }, text: { fr: "Visite, plan d'échantillonnage, prélèvements et mesures, une fiche par point.", en: 'Visit, sampling plan, samples and measurements, one record per point.' } },
    { name: { fr: 'Laboratoire', en: 'Laboratory' }, text: { fr: 'Analyses selon des méthodes écrites, avec blancs, doublons et contrôles qualité.', en: 'Analyses to written methods, with blanks, duplicates and quality controls.' } },
    { name: { fr: 'Rapport', en: 'Report' }, text: { fr: "Résultats, cartes, conclusions et plan d'action, présentés à vos équipes.", en: 'Results, maps, conclusions and an action plan, presented to your teams.' } },
  ],
};

export const commitments = {
  title: { fr: 'Nos engagements', en: 'Our commitments' },
  items: [
    { name: { fr: 'Traçabilité', en: 'Traceability' }, text: { fr: "Chaque échantillon suit une chaîne de traçabilité, du point de prélèvement au bulletin.", en: 'Every sample follows a chain of custody, from sampling point to report.' } },
    { name: { fr: 'Contrôle qualité', en: 'Quality control' }, text: { fr: 'Blancs, doublons et étalons à chaque série d\'analyses.', en: 'Blanks, duplicates and standards in every batch of analyses.' } },
    { name: { fr: 'Indépendance', en: 'Independence' }, text: { fr: 'Nous mesurons et concluons sans rien vendre d\'autre que l\'étude.', en: 'We measure and conclude without selling anything but the study.' } },
    { name: { fr: 'Clarté', en: 'Clarity' }, text: { fr: 'Des rapports lisibles par un décideur, avec leurs annexes techniques.', en: 'Reports a decision maker can read, with their technical annexes.' } },
  ],
};

// WHO Guidelines for drinking-water quality (4th edition with addenda).
export const parameters = [
  { id: 'nitrate', name: { fr: 'Nitrates (NO₃⁻)', en: 'Nitrate (NO₃⁻)' }, limit: 50, unit: 'mg/L', sample: 32 },
  { id: 'nitrite', name: { fr: 'Nitrites (NO₂⁻)', en: 'Nitrite (NO₂⁻)' }, limit: 3, unit: 'mg/L', sample: 0.4 },
  { id: 'fluoride', name: { fr: 'Fluorures', en: 'Fluoride' }, limit: 1.5, unit: 'mg/L', sample: 1.9 },
  { id: 'copper', name: { fr: 'Cuivre', en: 'Copper' }, limit: 2, unit: 'mg/L', sample: 0.3 },
  { id: 'arsenic', name: { fr: 'Arsenic', en: 'Arsenic' }, limit: 10, unit: 'µg/L', sample: 4 },
  { id: 'lead', name: { fr: 'Plomb', en: 'Lead' }, limit: 10, unit: 'µg/L', sample: 12 },
  { id: 'cadmium', name: { fr: 'Cadmium', en: 'Cadmium' }, limit: 3, unit: 'µg/L', sample: 1 },
  { id: 'mercury', name: { fr: 'Mercure', en: 'Mercury' }, limit: 6, unit: 'µg/L', sample: 2 },
];

export const reader = {
  title: { fr: 'Lire un résultat', en: 'Read a result' },
  tableCaption: { fr: "Valeurs guides de l'OMS pour l'eau de boisson", en: 'WHO guideline values for drinking water' },
  colParam: { fr: 'Paramètre', en: 'Parameter' },
  colValue: { fr: 'Valeur', en: 'Value' },
  intro: {
    fr: "Vous avez un bulletin d'analyse d'eau entre les mains. Choisissez le paramètre, entrez la valeur mesurée et voyez où elle se situe par rapport à la valeur guide de l'Organisation mondiale de la santé.",
    en: 'You have a water analysis report in hand. Choose the parameter, enter the measured value and see where it stands against the World Health Organization guideline.',
  },
  fieldParam: { fr: 'Paramètre', en: 'Parameter' },
  fieldValue: { fr: 'Valeur mesurée', en: 'Measured value' },
  below: { fr: 'Sous la valeur guide', en: 'Below the guideline value' },
  at: { fr: 'À la valeur guide', en: 'At the guideline value' },
  above: { fr: 'Au-dessus de la valeur guide', en: 'Above the guideline value' },
  empty: { fr: 'Entrez une valeur', en: 'Enter a value' },
  detail: {
    fr: (v, pct, limit) => `${v} représente ${pct}${nb}% de la valeur guide de ${limit}.`,
    en: (v, pct, limit) => `${v} is ${pct}% of the guideline value of ${limit}.`,
  },
  emptyDetail: {
    fr: 'Utilisez un nombre, par exemple 12 ou 0,8.',
    en: 'Use a number, for example 12 or 0.8.',
  },
  note: {
    fr: `À titre indicatif${nb}: une seule mesure ne suffit pas à juger une eau, et les normes nationales peuvent être plus strictes. Envoyez-nous le bulletin pour un avis.`,
    en: 'An indication only: one measurement is not enough to judge a water supply, and national standards may be stricter. Send us the report for an opinion.',
  },
  ask: { fr: 'Envoyer mon bulletin', en: 'Send my report' },
};

export const cta = {
  title: { fr: 'Un projet, une question sur un site ?', en: 'A project, a question about a site?' },
  text: { fr: 'Nous vous répondons avec une proposition et un devis.', en: 'We reply with a proposal and a quote.' },
  action: { fr: 'Demander un devis', en: 'Request a quote' },
  photo: {
    src: A + 'hero-gorge.jpg', w: 2400, h: 1500,
    alt: { fr: 'Une cascade se jette dans une gorge couverte de mousse et de forêt.', en: 'A waterfall pours into a gorge covered in moss and forest.' },
  },
};

export const contact = {
  title: { fr: 'Nous contacter', en: 'Contact us' },
  intro: {
    fr: "Décrivez votre demande, votre messagerie s'ouvrira avec le message prêt à envoyer.",
    en: 'Describe your request and your mail app will open with the message ready to send.',
  },
  emailLabel: { fr: 'E-mail', en: 'Email' },
  langLabel: { fr: 'Langues', en: 'Languages' },
  langValue: { fr: 'Français, anglais', en: 'French, English' },
  zoneLabel: { fr: 'Interventions', en: 'Where we work' },
  zoneValue: { fr: 'Sur le terrain et au laboratoire', en: 'In the field and in the laboratory' },
  fields: {
    name: { fr: 'Nom', en: 'Name' },
    org: { fr: 'Organisation', en: 'Organisation' },
    service: { fr: 'Prestation', en: 'Service' },
    medium: { fr: 'Milieu', en: 'Medium' },
    message: { fr: 'Votre demande', en: 'Your request' },
    placeholder: { fr: 'Le site, la question posée, le calendrier souhaité.', en: 'The site, the question, the preferred timing.' },
  },
  media: [
    { fr: 'Eau', en: 'Water' },
    { fr: 'Sols', en: 'Soil' },
    { fr: 'Air', en: 'Air' },
    { fr: 'Milieux naturels', en: 'Natural habitats' },
    { fr: 'Plusieurs', en: 'Several' },
  ],
  action: { fr: 'Préparer le message', en: 'Prepare the message' },
  subject: { fr: 'Demande de devis', en: 'Quote request' },
  photo: {
    src: A + 'dock-at-dusk.jpg', w: 2400, h: 1500,
    alt: { fr: "Échelle métallique au bord d'un ponton, au-dessus d'une eau calme au crépuscule.", en: 'A metal ladder at the edge of a dock above still water at dusk.' },
  },
};

export const footer = {
  fullName: { fr: "Laboratoire International de Gestion de l'Environnement", en: 'International Laboratory of Environmental Management' },
  pages: { fr: 'Rubriques', en: 'Pages' },
  replies: { fr: 'Réponse en français ou en anglais', en: 'Replies in French or English' },
  pictures: { fr: 'Images', en: 'Pictures' },
  legal: {
    fr: '© LGE International. Les lectures de résultats proposées sur ce site sont données à titre indicatif.',
    en: '© LGE International. Result readings offered on this site are for information only.',
  },
};

// Picture credits, shown in the footer.
export const credits = [
  { title: 'WF Bodenprofil 2', by: 'TeWeBs', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0', url: 'https://commons.wikimedia.org/wiki/File:WF_Bodenprofil_2.JPG' },
  { title: 'USGS observation well, Stephen C. Foster State Park', by: 'Michael Rivera', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0', url: 'https://commons.wikimedia.org/wiki/File:Stephen_C._Foster_State_Park_USGS_observation_well,_continuous_water_monitoring_station.jpg' },
  { title: 'Mobile air quality monitoring station in Zürich', by: 'Balise42', licence: 'CC BY 4.0', licenceUrl: 'https://creativecommons.org/licenses/by/4.0', url: 'https://commons.wikimedia.org/wiki/File:Mobile_air_quality_monitoring_station_in_Z%C3%BCrich.jpg' },
  { title: 'Wetland reserve in Al Azraq', by: 'Raslan Hussein', licence: 'CC0', url: 'https://commons.wikimedia.org/wiki/File:Wetland_reserve_in_Al_Azraq.jpg' },
  { title: 'River Rwizi', by: 'BalukuBrian', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0', url: 'https://commons.wikimedia.org/wiki/File:River_Rwizi_and_its_vegetation_and_the_human_activity_around_it.webm' },
  { title: 'Africa Food Security Research (laboratoire / laboratory, ILRI Nairobi)', by: 'Kate Holt/AusAID', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0', url: 'https://commons.wikimedia.org/wiki/File:Africa_Food_Security_Research_2_(10665117885).jpg' },
  { title: 'Borehole drilling, testing the purity of the water', by: 'Obedmakolo', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0', url: 'https://commons.wikimedia.org/wiki/File:Borehole_drilling_testing_the_purity_of_the_water.jpg' },
  { title: 'Forest gorge, boat, dock', by: 'Andrew Coelho, Anton Sulsky, Griffin Keller', licence: 'Unsplash', licenceUrl: 'https://unsplash.com/license', url: 'https://unsplash.com' },
];

// Builds a mailto link. `body` defaults to a short template listing what a quote needs.
export function mailto(lang, subject = contact.subject[lang], body) {
  const fallback = lang === 'fr'
    ? 'Bonjour,\n\nSite concerné\u00a0:\nMilieu (eau, sols, air)\u00a0:\nQuestion posée\u00a0:\nCalendrier souhaité\u00a0:\n\nMerci.'
    : 'Hello,\n\nSite:\nMedium (water, soil, air):\nQuestion:\nPreferred timing:\n\nThank you.';
  const q = new URLSearchParams({ subject, body: body ?? fallback });
  return `mailto:${EMAIL}?${q.toString().replace(/\+/g, '%20')}`;
}
