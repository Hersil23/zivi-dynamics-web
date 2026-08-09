import type { MetadataRoute } from "next";
import { projects } from "./lib/projects";

// Con output:"export" estos metadatos se generan en compilacion, no por peticion.
// Sin esta linea Next aborta el build: no sabe si la ruta es estatica o dinamica.
export const dynamic = "force-static";

const resourceSlugs = [
  "digitalizacion-empresas-venezuela",
  "automatizacion-procesos-empresariales",
  "tecnologia-nfc-empresas",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zividynamics.com";

  // trailingSlash:true => la URL real es /servicios/, no /servicios. Sin la barra
  // las 34 entradas del sitemap apuntan a un 301 de mod_dir, y Search Console
  // avisa en TODAS. La canonica que emite Next si la lleva: hay que igualarla.
  const url = (path: string) => `${base}${path}/`;
  const pages = [
    "",
    "/servicios",
    "/soluciones",
    "/portafolio",
    "/nfc",
    "/inteligencia-artificial",
    "/nosotros",
    "/contacto",
    "/recursos",
    "/politica-de-privacidad",
    "/terminos-y-condiciones",
  ];
  const lastModified = new Date("2026-07-28");

  return [
    ...pages.map((path) => ({
      url: url(path),
      lastModified,
      changeFrequency: path === "/recursos" ? "weekly" as const : "monthly" as const,
      priority: path === "" ? 1 : path === "/nfc" || path === "/contacto" ? 0.9 : 0.8,
    })),
    ...projects.map((project) => ({
      url: url(`/portafolio/${project.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...resourceSlugs.map((slug) => ({
      url: url(`/recursos/${slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
