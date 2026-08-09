import type { MetadataRoute } from "next";

// Con output:"export" estos metadatos se generan en compilacion, no por peticion.
// Sin esta linea Next aborta el build: no sabe si la ruta es estatica o dinamica.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zividynamics.com";
  return {
    rules: { userAgent: "*", allow: "/", disallow: [] },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
