export const slides = [
    {
      title: t.heroTitle,
      subtitle: t.heroSubtitle,
      image: "/images/industrial-plant.jpg",
      gradient: "from-black/70 via-black/50 to-transparent",
    },
    {
      title:
        locale === "pt"
          ? "Segurança Contra Incêndios Avançada"
          : locale === "fr"
            ? "Sécurité Incendie Avancée"
            : locale === "it"
              ? "Sicurezza Antincendio Avanzata"
              : "Advanced Fire Safety Systems",
      subtitle:
        locale === "pt"
          ? "Sistemas completos de detecção e supressão de incêndios com tecnologia de ponta e monitoramento 24/7."
          : locale === "fr"
            ? "Systèmes complets de détection et suppression d'incendie avec technologie de pointe et surveillance 24/7."
            : locale === "it"
              ? "Sistemi completi di rilevazione e soppressione incendi con tecnologia all'avanguardia e monitoraggio 24/7."
              : "Complete fire detection and suppression systems with cutting-edge technology and 24/7 monitoring.",
      image: "/images/fire-safety.jpg",
      gradient: "from-red-900/70 via-red-800/50 to-transparent",
    },
    {
      title:
        locale === "pt"
          ? "Instalações Elétricas Profissionais"
          : locale === "fr"
            ? "Installations Électriques Professionnelles"
            : locale === "it"
              ? "Installazioni Elettriche Professionali"
              : "Professional Electrical Installations",
      subtitle:
        locale === "pt"
          ? "Projetos e instalações elétricas de alta qualidade seguindo rigorosamente as normas internacionais de segurança."
          : locale === "fr"
            ? "Projets et installations électriques de haute qualité suivant rigoureusement les normes internationales de sécurité."
            : locale === "it"
              ? "Progetti e installazioni elettriche di alta qualità seguendo rigorosamente le norme internazionali di sicurezza."
              : "High-quality electrical projects and installations strictly following international safety standards.",
      image: "/images/electrical-installation.jpg",
      gradient: "from-primary-900/70 via-primary-800/50 to-transparent",
    },
  ]