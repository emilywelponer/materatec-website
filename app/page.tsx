"use client";

import { useState } from "react";
import Image from "next/image";

type Language = "de" | "it";

export default function Home() {
  const [language, setLanguage] = useState<Language>("de");

  const content = {
    de: {
      construction:
        "Unsere neue Website entsteht gerade. Weitere Inhalte und Informationen folgen in Kürze.",
      nav: {
        company: "Unternehmen",
        services: "Dienstleistungen",
        projects: "Projekte",
        contact: "Kontakt",
      },
      heroEyebrow: "TECHNISCHE LÖSUNGEN FÜR IHR PROJEKT",
      heroTitle1: "Paneele.",
      heroTitle2: "Beratung.",
      heroTitle3: "Systemlösungen.",
      heroText:
        "Technische Beratung, hochwertige Paneelsysteme und durchdachte Lösungen für anspruchsvolle Bauprojekte.",
      heroPrimary: "Dienstleistungen entdecken",
      areasLabel: "DIENSTLEISTUNGEN",
      areasTitle: "Von der Beratung zur passenden Lösung.",
      panels: "Paneele",
      panelsText:
        "Hochwertige Paneel- und Systemprodukte für unterschiedlichste Anforderungen.",
      advice: "Beratung",
      adviceText:
        "Persönliche und technisch fundierte Beratung von der Planung bis zur Umsetzung.",
      systems: "Systemlösungen",
      systemsText:
        "Durchdachte Gesamtlösungen, abgestimmt auf die Anforderungen Ihres Projekts.",
      companyLabel: "UNTERNEHMEN",
      companyTitle: "Erfahrung trifft neue Perspektiven.",
      companyText:
        "MateraTec steht für persönliche Betreuung, technisches Know-how und zuverlässige Lösungen. Mehr über unser Unternehmen, unsere Geschichte und unsere Arbeitsweise erfahren Sie in Kürze.",
      moreSoon: "Mehr erfahren – in Kürze",
      projectsLabel: "PROJEKTE & REFERENZEN",
      projectsTitle: "Lösungen in der Praxis.",
      projectsText:
        "Hier zeigen wir Ihnen künftig ausgewählte Projekte, Anwendungen und Referenzen.",
      projectPlaceholder: "Projekt folgt in Kürze",
      contactLabel: "KONTAKT",
      contactTitle: "Sie haben ein Projekt?",
      contactSubtitle: "Sprechen wir darüber.",
      contactText:
        "Wir beraten Sie gerne persönlich und finden gemeinsam die passende Lösung für Ihr Vorhaben.",
      footerTagline: "Paneele · Beratung · Systemlösungen",
      legal: "Impressum",
      privacy: "Datenschutz",
    },

    it: {
      construction:
        "Il nostro nuovo sito web è attualmente in fase di realizzazione. Ulteriori contenuti e informazioni saranno disponibili a breve.",
      nav: {
        company: "Azienda",
        services: "Servizi",
        projects: "Progetti",
        contact: "Contatti",
      },
      heroEyebrow: "SOLUZIONI TECNICHE PER IL VOSTRO PROGETTO",
      heroTitle1: "Pannelli.",
      heroTitle2: "Consulenza.",
      heroTitle3: "Soluzioni.",
      heroText:
        "Consulenza tecnica, sistemi di pannelli di qualità e soluzioni studiate per progetti edilizi esigenti.",
      heroPrimary: "Scopri i servizi",
      areasLabel: "SERVIZI",
      areasTitle: "Dalla consulenza alla soluzione più adatta.",
      panels: "Pannelli",
      panelsText:
        "Pannelli e sistemi di qualità per le più diverse esigenze progettuali.",
      advice: "Consulenza",
      adviceText:
        "Consulenza personale e tecnicamente competente, dalla progettazione alla realizzazione.",
      systems: "Soluzioni",
      systemsText:
        "Soluzioni complete e studiate su misura per le esigenze del vostro progetto.",
      companyLabel: "AZIENDA",
      companyTitle: "Esperienza e nuove prospettive.",
      companyText:
        "MateraTec è sinonimo di assistenza personale, competenza tecnica e soluzioni affidabili. Presto potrete scoprire di più sulla nostra azienda, la nostra storia e il nostro modo di lavorare.",
      moreSoon: "Scopri di più – a breve",
      projectsLabel: "PROGETTI & REFERENZE",
      projectsTitle: "Le nostre soluzioni nella pratica.",
      projectsText:
        "Qui presenteremo prossimamente una selezione di progetti, applicazioni e referenze.",
      projectPlaceholder: "Progetto disponibile a breve",
      contactLabel: "CONTATTI",
      contactTitle: "Avete un progetto?",
      contactSubtitle: "Parliamone.",
      contactText:
        "Saremo lieti di offrirvi una consulenza personale e di trovare insieme la soluzione più adatta al vostro progetto.",
      footerTagline: "Pannelli · Consulenza · Soluzioni",
      legal: "Note legali",
      privacy: "Privacy",
    },
  };

  const t = content[language];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main>
      {/* UNDER CONSTRUCTION */}
      <div className="construction-banner">
        <span className="construction-dot"></span>
        <p>{t.construction}</p>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="container header-inner">
        <button
          className="brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src="/materatec-logo.png"
            alt="MateraTec"
            width={1774}
            height={887}
            priority
            className="brand-logo"
          />
        </button>

          <nav className="nav">
            <button onClick={() => scrollTo("unternehmen")}>
              {t.nav.company}
            </button>
            <button onClick={() => scrollTo("leistungen")}>
              {t.nav.services}
            </button>
            <button onClick={() => scrollTo("projekte")}>
              {t.nav.projects}
            </button>
            <button
              className="nav-contact"
              onClick={() => scrollTo("kontakt")}
            >
              {t.nav.contact}
            </button>
          </nav>

          <div className="language-switcher">
            <button
              className={language === "de" ? "active" : ""}
              onClick={() => setLanguage("de")}
            >
              DE
            </button>
            <span>/</span>
            <button
              className={language === "it" ? "active" : ""}
              onClick={() => setLanguage("it")}
            >
              IT
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">{t.heroEyebrow}</p>

            <h1>
              <span>{t.heroTitle1}</span>
              <span>{t.heroTitle2}</span>
              <span className="green">{t.heroTitle3}</span>
            </h1>

            <p className="hero-text">{t.heroText}</p>

            <button
              className="button button-primary hero-cta"
              onClick={() => scrollTo("leistungen")}
            >
              {t.heroPrimary}
              <span>→</span>
            </button>
          </div>

          <div className="hero-visual">
            <Image
              src="/materatec-panel.png"
              alt={language === "de" ? "MateraTec Paneel" : "Pannello MateraTec"}
              width={2103}
              height={748}
              sizes="(max-width: 800px) calc(100vw - 36px), (max-width: 1200px) 58vw, 880px"
              className="hero-panel"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="leistungen" className="section services-section">
        <div className="container">
          <p className="section-label">{t.areasLabel}</p>
          <h2>{t.areasTitle}</h2>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-number">01</div>
              <div className="service-icon panel-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3>{t.panels}</h3>
              <p>{t.panelsText}</p>
              <div className="service-line"></div>
            </article>

            <article className="service-card">
              <div className="service-number">02</div>
              <div className="service-icon advice-icon">
                <span></span>
                <span></span>
              </div>
              <h3>{t.advice}</h3>
              <p>{t.adviceText}</p>
              <div className="service-line"></div>
            </article>

            <article className="service-card">
              <div className="service-number">03</div>
              <div className="service-icon system-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3>{t.systems}</h3>
              <p>{t.systemsText}</p>
              <div className="service-line"></div>
            </article>
          </div>
        </div>
      </section>

      {/* COMPANY */}
      <section id="unternehmen" className="section company-section">
        <div className="container company-grid">
          <div className="company-visual">
            <div className="company-grid-lines"></div>
            <div className="company-mark">M</div>
          </div>

          <div className="company-content">
            <p className="section-label">{t.companyLabel}</p>
            <h2>{t.companyTitle}</h2>
            <p>{t.companyText}</p>
            <span className="coming-soon">{t.moreSoon}</span>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projekte" className="section projects-section">
        <div className="container">
          <div className="projects-heading">
            <div>
              <p className="section-label">{t.projectsLabel}</p>
              <h2>{t.projectsTitle}</h2>
            </div>
            <p>{t.projectsText}</p>
          </div>

          <div className="projects-grid">
            {[1, 2, 3].map((project) => (
              <article className="project-card" key={project}>
                <div className="project-placeholder">
                  <span>0{project}</span>
                  <div className="placeholder-lines"></div>
                </div>

                <div className="project-info">
                  <p>{t.projectPlaceholder}</p>
                  <span>→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="contact-section">
        <div className="container contact-grid">
          <div>
            <p className="contact-label">{t.contactLabel}</p>
            <h2>
              {t.contactTitle}
              <br />
              <span>{t.contactSubtitle}</span>
            </h2>
          </div>

          <div className="contact-details">
            <p>{t.contactText}</p>

            <a className="contact-email" href="mailto:info@materatec.it">
              info@materatec.it
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <strong>MateraTec</strong>
            <p>{t.footerTagline}</p>
          </div>

          <div>
            <strong>MateraTec GmbH Srl</strong>
            <p>Andrianerweg 22</p>
            <p>39018 Terlan (BZ)</p>
            <p>Italia</p>
          </div>

          <div>
            <strong>Kontakt</strong>
            <a href="mailto:info@materatec.it">info@materatec.it</a>
          </div>

          <div className="footer-legal">
            <button>{t.legal}</button>
            <button>{t.privacy}</button>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 MateraTec GmbH Srl</p>
          <p>Paneele · Beratung · Systemlösungen</p>
        </div>
      </footer>
    </main>
  );
}
