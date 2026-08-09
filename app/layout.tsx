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

const organization = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Zivi Dynamics C.A.",
  legalName: "Zivi Dynamics C.A.",
  taxID: "J-508175123",
  url: siteUrl,
  logo: `${siteUrl}/brand/zivi-mark-real-v2.png`,
  image: `${siteUrl}/opengraph-image`,
  email: "contacto@zividynamics.com",
  telephone: "+58 412 706 5848",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Antonio de los Altos",
    addressRegion: "Miranda",
    addressCountry: "VE",
  },
  sameAs: [
    "https://www.instagram.com/zivi.ve",
    "https://linktr.ee/Zividynamics",
  ],
  founder: {
    "@type": "Person",
    name: "Joswald Alejandro López Luna",
    jobTitle: "CEO y Fundador",
  },
  areaServed: [
    { "@type": "Country", name: "Venezuela" },
    { "@type": "Place", name: "Latinoamérica" },
  ],
  serviceType: [
    "Desarrollo de software a la medida",
    "Aplicaciones móviles",
    "Sistemas empresariales",
    "Automatización con inteligencia artificial",
    "Soluciones NFC para empresas",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
