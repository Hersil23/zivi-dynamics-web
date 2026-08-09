import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExperienceLayer } from "../components/ExperienceLayer";
import { projects } from "../lib/projects";

export const metadata: Metadata = {
  title: { absolute: "Proyectos: apps, sistemas y NFC en Venezuela | Zivi" },
  description: "20 proyectos que ya operan: HealthTech, membresías, seguros, NFC, comercio y gastronomía. Software venezolano en producción, no maquetas.",
  alternates: { canonical: "/portafolio" },
  openGraph: {
    title: "Proyectos: apps, sistemas y NFC en Venezuela | Zivi",
    description: "20 proyectos que ya operan: HealthTech, membresías, seguros, NFC, comercio y gastronomía. Software venezolano en producción, no maquetas.",
    url: "/portafolio",
  },
};

export default function PortfolioPage() {
  const sectors = [...new Set(projects.map((project) => project.sector))];

  return (
    <>
      <ExperienceLayer />
      <section className="portfolioEpicHero">
        <div className="container" data-reveal>
          <div className="heroKicker">
            <span>SELECTED WORK / {projects.length} CASOS</span>
            <i />
            <span>Productos en operación</span>
          </div>
          <h1>Trabajo que ya está <em>moviendo organizaciones.</em></h1>
          <div className="portfolioHeroBottom">
            <p>
              Casos construidos alrededor de procesos reales, usuarios reales y
              resultados que necesitan sostenerse más allá de una presentación.
            </p>
            <div>
              <span><strong>{projects.length}</strong> proyectos</span>
              <span><strong>{sectors.length}</strong> sectores</span>
              <span><strong>4</strong> capas: web, apps, IA, NFC</span>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolioEpicBody">
        <div className="container">
          <div className="portfolioFilterRail" data-reveal>
            <span>ÍNDICE DE TRABAJO</span>
            <div>{sectors.map((sector) => <span key={sector}>{sector}</span>)}</div>
          </div>

          <div className="portfolioMosaic">
            {projects.map((project, index) => (
              <Link
                href={`/portafolio/${project.slug}`}
                className={`portfolioEpicCard portfolioEpicCard-${(index % 5) + 1} accent-${project.accent}`}
                key={project.slug}
                data-reveal
              >
                <div className="portfolioEpicMedia">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? project.name}
                      fill
                      sizes={index % 5 === 0 ? "(max-width: 760px) 100vw, 62vw" : "(max-width: 760px) 100vw, 38vw"}
                    />
                  ) : (
                    <div className="projectMonogram" aria-hidden="true">
                      <span>{project.name.slice(0, 1)}</span>
                      <i /><i /><i />
                    </div>
                  )}
                  <div className="portfolioMediaLabel">
                    <span>CASE {String(index + 1).padStart(2, "0")}</span>
                    <span>{project.status}</span>
                  </div>
                </div>
                <div className="portfolioEpicCopy">
                  <span>{project.category}</span>
                  <h2>{project.name}</h2>
                  <p>{project.summary}</p>
                  <div>
                    <small>{project.sector}</small>
                    <strong>Explorar caso ↗</strong>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="methodEpic">
        <div className="container">
          <div className="editorialHeading" data-reveal>
            <div>
              <span className="epicEyebrow">Cómo trabajamos</span>
              <h2>De problema complejo<br /><em>a sistema claro.</em></h2>
            </div>
            <p>
              El diseño no comienza con una pantalla. Comienza entendiendo qué
              debe cambiar en la operación y cómo sabremos que funcionó.
            </p>
          </div>
          <div className="methodTimeline">
            {[
              ["01", "Descubrir", "Proceso, personas, restricciones y oportunidad."],
              ["02", "Modelar", "Experiencia, datos, arquitectura y prioridades."],
              ["03", "Construir", "Producto funcional, pruebas y despliegue."],
              ["04", "Evolucionar", "Medición, soporte y nuevas capacidades."],
            ].map(([number, title, description]) => (
              <article key={number} data-reveal>
                <span>{number}</span><i />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="epicContact epicContactLight">
        <div className="container epicContactGrid" data-reveal>
          <div>
            <span className="epicEyebrow">Tu caso puede ser el siguiente</span>
            <h2>Construyamos evidencia, no otra promesa.</h2>
          </div>
          <div>
            <p>Si tienes un proceso que necesita orden, velocidad o una mejor experiencia, conversemos.</p>
            <Link className="epicButton epicButtonDark" href="/contacto">
              Iniciar un proyecto <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
