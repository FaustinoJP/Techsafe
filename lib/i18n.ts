export const defaultLocale = "en" as const
export const locales = ["en", "pt", "fr", "it"] as const

export type Locale = (typeof locales)[number]

export const translations = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",

    // Hero Section
    heroTitle: "Advanced Solutions in Electricity and Industrial Automation",
    heroSubtitle:
      "We provide complete solutions in electrical installations, fire safety, industrial automation and integrated systems for the Oil & Gas sector.",
    heroButton: "Discover Our Services",
    heroStats1: "15+ Years",
    heroStats2: "500+ Projects",
    heroStats3: "100+ Clients",

    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "We offer complete and specialized solutions for various industrial sectors",
    seeDetails: "See Details",
    contractService: "Contract Service",

    // Service Cards
    electricalInstallation: "Electrical Installation",
    electricalDesc: "Studies, design and installation of electrical networks according to international standards.",
    electricalDetails:
      "We offer complete electrical network studies, high and low voltage equipment installation, preventive and corrective maintenance, manufacturing of electrical distribution panels according to NF C 15-100 and IEC 60364 standards. Our specialized team ensures safety and compliance in all installations.",

    fireSafety: "Fire Safety",
    fireDesc: "Complete fire detection and suppression systems with advanced technology.",
    fireDetails:
      "We supply and install smoke detectors, toxic gases, heat, alarms and automatic suppression systems with CO₂, inert gases, foam and dry chemical powder. We perform maintenance, inspection and personnel training according to NFPA, ISO 45001 and EN standards.",

    industrialAutomation: "Industrial Automation",
    automationDesc: "PLC programming, SCADA and IoT solutions for process optimization.",
    automationDetails:
      "Programming of industrial controllers (PLC, SCADA), IoT implementation for monitoring, integration of remote control and supervision solutions. We use Siemens, Schneider, Rockwell, ABB equipment for maximum reliability and efficiency.",

    oilGas: "Oil & Gas Solutions",
    oilGasDesc: "Specialized safety and automation for the oil and gas sector.",
    oilGasDetails:
      "Specialists in oil installation safety, monitoring system automation, maintenance and energy optimization. We comply with API and ATEX regulations, offering robust solutions for demanding industrial environments.",

    electricalManufacturing: "Electrical Manufacturing",
    manufacturingDesc: "Manufacturing of distribution panels and industrial electrical enclosures.",
    manufacturingDetails:
      "We manufacture electrical distribution panels, electrical enclosures and panels for asynchronous motor starting. All products follow strict industrial standards, ensuring reliability and robustness for industrial applications.",

    // About Section
    aboutTitle: "About TechSafe Solutions",
    aboutText:
      "TechSafe Solutions Sen is a company specialized in advanced solutions for electricity, fire protection and industrial automation. Our mission is to offer electrical installations according to international standards, ensure fire safety and develop automation solutions that increase industrial productivity and safety.",

    // Mission
    missionTitle: "Our Mission",
    mission1: "Provide electrical installations according to international standards",
    mission2: "Ensure fire safety of industrial buildings",
    mission3: "Develop advanced industrial automation solutions",
    mission4: "Integrate solutions for the Oil & Gas sector",

    // Contact
    contactTitle: "Get in Touch",
    contactSubtitle: "We are ready to develop the ideal solution for your project",
    contactButton: "Contact Us",
    requestQuote: "Request Quote",

    // Contact Form
    formName: "Full Name",
    formEmail: "Email",
    formPhone: "Phone",
    formCompany: "Company",
    formService: "Service of Interest",
    formMessage: "Message",
    formSubmit: "Send Request",
    selectService: "Select a service",

    // Footer
    footerText: "Advanced solutions in electricity, safety and industrial automation.",
    allRightsReserved: "All rights reserved.",

    // WhatsApp
    whatsappMessage: "Hello! I would like to contract the service of",
  },
  pt: {
    // Navigation
    home: "Início",
    services: "Serviços",
    about: "Sobre",
    contact: "Contato",

    // Hero Section
    heroTitle: "Soluções Avançadas em Eletricidade e Automação Industrial",
    heroSubtitle:
      "Fornecemos soluções completas em instalações elétricas, segurança contra incêndios, automação industrial e sistemas integrados para o setor Oil & Gas.",
    heroButton: "Conheça Nossos Serviços",
    heroStats1: "15+ Anos",
    heroStats2: "500+ Projetos",
    heroStats3: "100+ Clientes",

    // Services
    servicesTitle: "Nossos Serviços",
    servicesSubtitle: "Oferecemos soluções completas e especializadas para diversos setores industriais",
    seeDetails: "Ver Detalhes",
    contractService: "Contratar Serviço",

    // Service Cards
    electricalInstallation: "Instalação Elétrica",
    electricalDesc: "Estudos, concepção e instalação de redes elétricas conforme normas internacionais.",
    electricalDetails:
      "Oferecemos estudos completos de redes elétricas, instalação de equipamentos de alta e baixa tensão, manutenção preventiva e corretiva, fabricação de quadros de distribuição elétrica conforme normas NF C 15-100 e IEC 60364. Nossa equipe especializada garante segurança e conformidade em todas as instalações.",

    fireSafety: "Segurança Contra Incêndio",
    fireDesc: "Sistemas completos de detecção e supressão de incêndios com tecnologia avançada.",
    fireDetails:
      "Fornecemos e instalamos detectores de fumaça, gases tóxicos, calor, alarmes e sistemas automáticos de supressão por CO₂, gases inertes, espuma e pó químico seco. Realizamos manutenção, inspeção e treinamento de pessoal conforme padrões NFPA, ISO 45001 e EN.",

    industrialAutomation: "Automação Industrial",
    automationDesc: "Programação de PLCs, SCADA e soluções IoT para otimização de processos.",
    automationDetails:
      "Programação de autômatos industriais (PLC, SCADA), implementação de IoT para monitoramento, integração de soluções de controle e supervisão remota. Utilizamos equipamentos Siemens, Schneider, Rockwell, ABB para máxima confiabilidade e eficiência.",

    oilGas: "Soluções Oil & Gas",
    oilGasDesc: "Segurança e automação especializada para o setor petrolífero e de gás.",
    oilGasDetails:
      "Especialistas em segurança de instalações petrolíferas, automação de sistemas de monitoramento, manutenção e otimização energética. Cumprimos regulamentações API e ATEX, oferecendo soluções robustas para ambientes industriais exigentes.",

    electricalManufacturing: "Fabricação Elétrica",
    manufacturingDesc: "Fabricação de quadros de distribuição e cofres elétricos industriais.",
    manufacturingDetails:
      "Fabricamos quadros de distribuição elétrica, cofres elétricos e quadros para arranque de motores assíncronos. Todos os produtos seguem normas industriais rigorosas, garantindo confiabilidade e robustez para aplicações industriais.",

    // About Section
    aboutTitle: "Sobre a TechSafe Solutions",
    aboutText:
      "A TechSafe Solutions Sen é uma empresa especializada em soluções avançadas para eletricidade, proteção contra incêndio e automação industrial. Nossa missão é oferecer instalações elétricas conforme normas internacionais, assegurar a segurança contra incêndios e desenvolver soluções de automação que aumentem a produtividade e segurança industrial.",

    // Mission
    missionTitle: "Nossa Missão",
    mission1: "Oferecer instalações elétricas conforme normas internacionais",
    mission2: "Assegurar a segurança contra incêndios de edifícios industriais",
    mission3: "Desenvolver soluções de automação industrial avançadas",
    mission4: "Integrar soluções para o setor de Oil & Gas",

    // Contact
    contactTitle: "Entre em Contato",
    contactSubtitle: "Estamos prontos para desenvolver a solução ideal para seu projeto",
    contactButton: "Fale Conosco",
    requestQuote: "Solicitar Orçamento",

    // Contact Form
    formName: "Nome Completo",
    formEmail: "Email",
    formPhone: "Telefone",
    formCompany: "Empresa",
    formService: "Serviço de Interesse",
    formMessage: "Mensagem",
    formSubmit: "Enviar Solicitação",
    selectService: "Selecione um serviço",

    // Footer
    footerText: "Soluções avançadas em eletricidade, segurança e automação industrial.",
    allRightsReserved: "Todos os direitos reservados.",

    // WhatsApp
    whatsappMessage: "Olá! Gostaria de contratar o serviço de",
  },
  fr: {
    // Navigation
    home: "Accueil",
    services: "Services",
    about: "À propos",
    contact: "Contact",

    // Hero Section
    heroTitle: "Solutions Avancées en Électricité et Automatisation Industrielle",
    heroSubtitle:
      "Nous fournissons des solutions complètes en installations électriques, sécurité incendie, automatisation industrielle et systèmes intégrés pour le secteur Oil & Gas.",
    heroButton: "Découvrez Nos Services",
    heroStats1: "15+ Années",
    heroStats2: "500+ Projets",
    heroStats3: "100+ Clients",

    // Services
    servicesTitle: "Nos Services",
    servicesSubtitle: "Nous offrons des solutions complètes et spécialisées pour divers secteurs industriels",
    seeDetails: "Voir Détails",
    contractService: "Contracter Service",

    // Service Cards
    electricalInstallation: "Installation Électrique",
    electricalDesc: "Études, conception et installation de réseaux électriques selon les normes internationales.",
    electricalDetails:
      "Nous offrons des études complètes de réseaux électriques, installation d'équipements haute et basse tension, maintenance préventive et corrective, fabrication de tableaux de distribution électrique selon les normes NF C 15-100 et IEC 60364. Notre équipe spécialisée garantit sécurité et conformité dans toutes les installations.",

    fireSafety: "Sécurité Incendie",
    fireDesc: "Systèmes complets de détection et suppression d'incendie avec technologie avancée.",
    fireDetails:
      "Nous fournissons et installons des détecteurs de fumée, gaz toxiques, chaleur, alarmes et systèmes automatiques de suppression par CO₂, gaz inertes, mousse et poudre chimique sèche. Nous effectuons maintenance, inspection et formation du personnel selon les standards NFPA, ISO 45001 et EN.",

    industrialAutomation: "Automatisation Industrielle",
    automationDesc: "Programmation PLC, SCADA et solutions IoT pour l'optimisation des processus.",
    automationDetails:
      "Programmation d'automates industriels (PLC, SCADA), implémentation IoT pour surveillance, intégration de solutions de contrôle et supervision à distance. Nous utilisons des équipements Siemens, Schneider, Rockwell, ABB pour une fiabilité et efficacité maximales.",

    oilGas: "Solutions Oil & Gas",
    oilGasDesc: "Sécurité et automatisation spécialisées pour le secteur pétrolier et gazier.",
    oilGasDetails:
      "Spécialistes en sécurité d'installations pétrolières, automatisation de systèmes de surveillance, maintenance et optimisation énergétique. Nous respectons les réglementations API et ATEX, offrant des solutions robustes pour environnements industriels exigeants.",

    electricalManufacturing: "Fabrication Électrique",
    manufacturingDesc: "Fabrication de tableaux de distribution et coffrets électriques industriels.",
    manufacturingDetails:
      "Nous fabriquons des tableaux de distribution électrique, coffrets électriques et tableaux pour démarrage de moteurs asynchrones. Tous les produits suivent des normes industrielles strictes, garantissant fiabilité et robustesse pour applications industrielles.",

    // About Section
    aboutTitle: "À propos de TechSafe Solutions",
    aboutText:
      "TechSafe Solutions Sen est une entreprise spécialisée dans les solutions avancées pour l'électricité, la protection incendie et l'automatisation industrielle. Notre mission est d'offrir des installations électriques selon les normes internationales, assurer la sécurité incendie et développer des solutions d'automatisation qui augmentent la productivité et sécurité industrielles.",

    // Mission
    missionTitle: "Notre Mission",
    mission1: "Fournir des installations électriques selon les normes internationales",
    mission2: "Assurer la sécurité incendie des bâtiments industriels",
    mission3: "Développer des solutions d'automatisation industrielle avancées",
    mission4: "Intégrer des solutions pour le secteur Oil & Gas",

    // Contact
    contactTitle: "Contactez-nous",
    contactSubtitle: "Nous sommes prêts à développer la solution idéale pour votre projet",
    contactButton: "Nous Contacter",
    requestQuote: "Demander un Devis",

    // Contact Form
    formName: "Nom Complet",
    formEmail: "Email",
    formPhone: "Téléphone",
    formCompany: "Entreprise",
    formService: "Service d'Intérêt",
    formMessage: "Message",
    formSubmit: "Envoyer Demande",
    selectService: "Sélectionner un service",

    // Footer
    footerText: "Solutions avancées en électricité, sécurité et automatisation industrielle.",
    allRightsReserved: "Tous droits réservés.",

    // WhatsApp
    whatsappMessage: "Bonjour! Je souhaiterais contracter le service de",
  },
  it: {
    // Navigation
    home: "Home",
    services: "Servizi",
    about: "Chi Siamo",
    contact: "Contatto",

    // Hero Section
    heroTitle: "Soluzioni Avanzate in Elettricità e Automazione Industriale",
    heroSubtitle:
      "Forniamo soluzioni complete in installazioni elettriche, sicurezza antincendio, automazione industriale e sistemi integrati per il settore Oil & Gas.",
    heroButton: "Scopri i Nostri Servizi",
    heroStats1: "15+ Anni",
    heroStats2: "500+ Progetti",
    heroStats3: "100+ Clienti",

    // Services
    servicesTitle: "I Nostri Servizi",
    servicesSubtitle: "Offriamo soluzioni complete e specializzate per vari settori industriali",
    seeDetails: "Vedi Dettagli",
    contractService: "Contratta Servizio",

    // Service Cards
    electricalInstallation: "Installazione Elettrica",
    electricalDesc: "Studi, progettazione e installazione di reti elettriche secondo standard internazionali.",
    electricalDetails:
      "Offriamo studi completi di reti elettriche, installazione di apparecchiature ad alta e bassa tensione, manutenzione preventiva e correttiva, fabbricazione di quadri di distribuzione elettrica secondo norme NF C 15-100 e IEC 60364. Il nostro team specializzato garantisce sicurezza e conformità in tutte le installazioni.",

    fireSafety: "Sicurezza Antincendio",
    fireDesc: "Sistemi completi di rilevazione e soppressione incendi con tecnologia avanzata.",
    fireDetails:
      "Forniamo e installiamo rilevatori di fumo, gas tossici, calore, allarmi e sistemi automatici di soppressione con CO₂, gas inerti, schiuma e polvere chimica secca. Eseguiamo manutenzione, ispezione e formazione del personale secondo standard NFPA, ISO 45001 e EN.",

    industrialAutomation: "Automazione Industriale",
    automationDesc: "Programmazione PLC, SCADA e soluzioni IoT per l'ottimizzazione dei processi.",
    automationDetails:
      "Programmazione di controllori industriali (PLC, SCADA), implementazione IoT per monitoraggio, integrazione di soluzioni di controllo e supervisione remota. Utilizziamo apparecchiature Siemens, Schneider, Rockwell, ABB per massima affidabilità ed efficienza.",

    oilGas: "Soluzioni Oil & Gas",
    oilGasDesc: "Sicurezza e automazione specializzate per il settore petrolifero e del gas.",
    oilGasDetails:
      "Specialisti in sicurezza di installazioni petrolifere, automazione di sistemi di monitoraggio, manutenzione e ottimizzazione energetica. Rispettiamo le normative API e ATEX, offrendo soluzioni robuste per ambienti industriali esigenti.",

    electricalManufacturing: "Produzione Elettrica",
    manufacturingDesc: "Produzione di quadri di distribuzione e armadi elettrici industriali.",
    manufacturingDetails:
      "Produciamo quadri di distribuzione elettrica, armadi elettrici e quadri per avviamento motori asincroni. Tutti i prodotti seguono rigorose norme industriali, garantendo affidabilità e robustezza per applicazioni industriali.",

    // About Section
    aboutTitle: "Chi è TechSafe Solutions",
    aboutText:
      "TechSafe Solutions Sen è un'azienda specializzata in soluzioni avanzate per elettricità, protezione antincendio e automazione industriale. La nostra missione è offrire installazioni elettriche secondo standard internazionali, garantire sicurezza antincendio e sviluppare soluzioni di automazione che aumentino produttività e sicurezza industriali.",

    // Mission
    missionTitle: "La Nostra Missione",
    mission1: "Fornire installazioni elettriche secondo standard internazionali",
    mission2: "Garantire sicurezza antincendio di edifici industriali",
    mission3: "Sviluppare soluzioni di automazione industriale avanzate",
    mission4: "Integrare soluzioni per il settore Oil & Gas",

    // Contact
    contactTitle: "Contattaci",
    contactSubtitle: "Siamo pronti a sviluppare la soluzione ideale per il tuo progetto",
    contactButton: "Contattaci",
    requestQuote: "Richiedi Preventivo",

    // Contact Form
    formName: "Nome Completo",
    formEmail: "Email",
    formPhone: "Telefono",
    formCompany: "Azienda",
    formService: "Servizio di Interesse",
    formMessage: "Messaggio",
    formSubmit: "Invia Richiesta",
    selectService: "Seleziona un servizio",

    // Footer
    footerText: "Soluzioni avanzate in elettricità, sicurezza e automazione industriale.",
    allRightsReserved: "Tutti i diritti riservati.",

    // WhatsApp
    whatsappMessage: "Ciao! Vorrei contrattare il servizio di",
  },
} as const

export function getTranslation(locale: Locale) {
  return translations[locale] || translations[defaultLocale]
}
