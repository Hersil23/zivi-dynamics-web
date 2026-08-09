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
      url: `${base}${path}`,
      lastModified,
      changeFrequency: path === "/recursos" ? "weekly" as const : "monthly" as const,
      priority: path === "" ? 1 : path === "/nfc" || path === "/contacto" ? 0.9 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `${base}/portafolio/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...resourceSlugs.map((slug) => ({
      url: `${base}/recursos/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
