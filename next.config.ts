import type { NextConfig } from "next";

const securityHeaders = [
  { key:"X-Content-Type-Options", value:"nosniff" },
  { key:"Referrer-Policy", value:"strict-origin-when-cross-origin" },
  { key:"X-Frame-Options", value:"DENY" },
  { key:"Permissions-Policy", value:"camera=(), microphone=(), geolocation=(), payment=()" },
  { key:"Strict-Transport-Security", value:"max-age=63072000; includeSubDomains; preload" },
  { key:"Content-Security-Policy", value:"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self'; font-src 'none'; connect-src 'self'; object-src 'none'; frame-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests" },
];

const nextConfig: NextConfig = {
  // HTML estatico: se compila aqui y se sube la carpeta out/ al cPanel, que solo
  // sirve ficheros. El servidor tiene Node 16 y este proyecto pide >=20, asi que
  // compilar alli no era opcion — pero tampoco hace falta.
  output: "export",
  trailingSlash: true,           // /contacto/ -> /contacto/index.html en Apache
  poweredByHeader:false,
  reactStrictMode:true,
  compress:true,
  // El optimizador de imagenes necesita servidor. Sin esto, `next build` falla.
  images:{ unoptimized:true, qualities:[75,96,100] },
};

// OJO: headers() NO se aplica en export estatico — Next lo ignora en silencio.
// Las cabeceras de securityHeaders van en el .htaccess que se sube junto al sitio.
// Se deja la constante arriba como fuente de verdad de lo que debe ir alli.
void securityHeaders;

export default nextConfig;
