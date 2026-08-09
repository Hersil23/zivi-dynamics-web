import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import "./phase1.css";
import "./phase2.css";
import "./phase3.css";
import "./legal.css";
import "./fixes.css";
import "./mobile-fixes.css";
import "./service-cards.css";
import "./nfc-media.css";
import "./production-media.css";
import "./brand-official.css";
import "./brand-inline.css";
import "./epic.css";
import "./visual-system-v2.css";
import "./nfc-commerce-v3.css";
// EL ULTIMO A PROPOSITO: correcciones de accesibilidad de la auditoria. Con 15
// hojas y 33 selectores repetidos en 3+ ficheros, cargar antes seria repetir el
// error de fixes.css, cuyas reglas de cabecera son codigo muerto porque epic.css
// carga despues y las pisa.
import "./accesibilidad.css";
import { Header } from "./components/Header";
import { MobileActions } from "./components/MobileActions";
import { BrandLogo } from "./components/BrandLogo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zividynamics.com";

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zivi Dynamics | Software, IA y NFC en Venezuela",
    template: "%s | Zivi Dynamics",
  },
  description: "Diseñamos productos digitales, aplicaciones, sistemas empresariales, automatización con IA y soluciones NFC para empresas en Venezuela y Latinoamérica.",
  keywords: [
    "desarrollo de software Venezuela",
    "empresa de tecnología Venezuela",
    "aplicaciones móviles Venezuela",
    "sistemas empresariales",
    "automatización con inteligencia artificial",
    "soluciones NFC Venezuela",
    "tarjetas NFC personalizadas",
  ],
  authors: [{ name: "Zivi Dynamics C.A.", url: siteUrl }],
  creator: "Zivi Dynamics C.A.",
  publisher: "Zivi Dynamics C.A.",
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: "/",
    siteName: "Zivi Dynamics C.A.",
    title: "Zivi Dynamics — Software que mueve organizaciones",
    description: "Productos digitales, IA y NFC construidos para operar en el mundo real.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zivi Dynamics",
    description: "Software que mueve organizaciones. NFC que conecta el mundo físico.",
  },
  icons: {
    icon: [{ url: "/brand/zivi-app-icon-real-v2.png", sizes: "1024x1024", type: "image/png" }],
    apple: [{ url: "/brand/zivi-app-icon-real-v2.png", sizes: "1024x1024", type: "image/png" }],
    shortcut: "/brand/zivi-app-icon-real-v2.png",
  },
  manifest: "/manifest.webmanifest",
};

/**
 * Datos estructurados del sitio, en un solo @graph.
 *
 * Los @id conectan las entidades entre si: la Person "founder" apunta a la
 * Organization y el WebSite declara su publisher. Sin eso, Google ve entidades
 * sueltas y no puede construir el panel de conocimiento.
 *
 * PENDIENTE de datos reales antes de que rinda del todo:
 *  - streetAddress: sin calle, Google NO puede usar esto para resultados locales.
 *  - geo: las coordenadas de abajo son el centro de San Antonio de los Altos, no
 *    la sede. Deben coincidir con lo que se declare en Google Business Profile;
 *    si no coinciden, la inconsistencia resta en vez de sumar.
 */
const orgId = `${siteUrl}/#organizacion`;

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
      "@id": orgId,
      name: "Zivi Dynamics C.A.",
      alternateName: "Zivi Dynamics",
      legalName: "Zivi Dynamics C.A.",
      taxID: "J-508175123",
      vatID: "J-508175123",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/brand/zivi-mark-real-v2.png`,
      },
      // Con .png: en Vercel /opengraph-image era una funcion que generaba la
      // imagen al vuelo; aqui es un fichero estatico y sin extension da 404.
      image: `${siteUrl}/opengraph-image.png`,
      description:
        "Empresa venezolana de desarrollo de software, inteligencia artificial y tecnología NFC para empresas e instituciones en Venezuela y Latinoamérica.",
      email: "contacto@zividynamics.com",
      telephone: "+58-412-706-5848",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        // streetAddress: "…",   <-- rellenar si se publica la direccion
        addressLocality: "San Antonio de los Altos",
        addressRegion: "Miranda",
        addressCountry: "VE",
      },
      geo: { "@type": "GeoCoordinates", latitude: 10.3556, longitude: -66.9436 },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+58-412-706-5848",
          email: "contacto@zividynamics.com",
          availableLanguage: ["Spanish"],
          areaServed: ["VE", "CO", "PA", "EC", "PE", "CL", "MX"],
        },
      ],
      sameAs: [
        "https://www.instagram.com/zivi.ve",
        "https://linktr.ee/Zividynamics",
      ],
      founder: {
        "@type": "Person",
        "@id": `${siteUrl}/nosotros/#joswald`,
        name: "Joswald Alejandro López Luna",
        jobTitle: "CEO y Fundador",
        worksFor: { "@id": orgId },
      },
      employee: [
        {
          "@type": "Person",
          "@id": `${siteUrl}/nosotros/#herasi`,
          name: "Herasi Silva",
          jobTitle: "Desarrollador web full stack",
          knowsAbout: ["React", "Next.js", "TypeScript", "Laravel", "Node.js", "MySQL", "MongoDB", "Docker"],
          worksFor: { "@id": orgId },
        },
      ],
      areaServed: [
        { "@type": "Country", name: "Venezuela" },
        { "@type": "Place", name: "Latinoamérica" },
      ],
      knowsAbout: [
        "Desarrollo de software a la medida",
        "Aplicaciones móviles",
        "Sistemas empresariales",
        "Inteligencia artificial aplicada",
        "Tecnología NFC",
        "HealthTech",
      ],
      serviceType: [
        "Desarrollo de software a la medida",
        "Aplicaciones móviles",
        "Sistemas empresariales",
        "Automatización con inteligencia artificial",
        "Soluciones NFC para empresas",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#sitio`,
      url: siteUrl,
      name: "Zivi Dynamics C.A.",
      inLanguage: "es-VE",
      publisher: { "@id": orgId },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido principal</a>
        <Header />
        <main id="contenido">{children}</main>
        <footer className="footer epicFooter">
          <div className="container footerGrid">
            <div>
              <Link className="brand officialFooterBrand" href="/">
                <BrandLogo variant="full" />
              </Link>
              <p>Software que mueve organizaciones. NFC que conecta el mundo físico.</p>
              <p className="footerLocation">San Antonio de los Altos / Venezuela / LATAM</p>
            </div>
            <div>
              <h4>Explorar</h4>
              <Link href="/portafolio">Trabajo</Link>
              <Link href="/nfc">NFC</Link>
              <Link href="/servicios">Servicios</Link>
              <Link href="/recursos">Ideas</Link>
            </div>
            <div>
              <h4>Iniciar una conversación</h4>
              <a className="footerLinkHub" href="https://linktr.ee/Zividynamics" target="_blank" rel="noreferrer">
                Todos nuestros enlaces <span>↗</span>
              </a>
              <a href="https://wa.me/584127065848">+58 412 706 5848 ↗</a>
              <a href="mailto:contacto@zividynamics.com">contacto@zividynamics.com</a>
              <a href="https://www.instagram.com/zivi.ve">@zivi.ve ↗</a>
              <p>RIF: J-508175123</p>
              <Link href="/politica-de-privacidad">Privacidad</Link>
              <Link href="/terminos-y-condiciones">Términos</Link>
            </div>
          </div>
        </footer>
        <MobileActions />
        {/* Se quitaron <Analytics /> y <SpeedInsights /> de Vercel: sus scripts
            se sirven desde /_vercel/, que solo existe en Vercel. Aqui daban 404
            en cada visita y ensuciaban la consola sin medir nada. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      </body>
    </html>
  );
}
