import type { Metadata } from "next";
import Link from "next/link";

/**
 * Pagina 404 propia.
 *
 * Sin este fichero, Next sirve su pantalla por defecto: "404: This page could
 * not be found." — en ingles, sin cabecera, sin pie y sin un solo enlace. Un
 * callejon sin salida en un sitio en espanol para Venezuela.
 *
 * Y aqui no es hipotetico: la empresa reparte tarjetas y llaveros NFC con
 * direcciones impresas. Una errata en un lote de tarjetas fisicas no se corrige
 * — lo unico que queda es que quien llegue encuentre por donde seguir.
 *
 * El status 404 real lo devuelve Apache con ErrorDocument (ver public/.htaccess);
 * el noindex de aqui es por si alguien entra a /404/ directamente.
 */
export const metadata: Metadata = {
  title: { absolute: "Página no encontrada | Zivi Dynamics" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <span className="eyebrow">Error 404</span>
          <h1>Esta página no existe.</h1>
          <p className="lead">
            Puede que el enlace haya cambiado o que la dirección tenga una errata.
            Desde aquí puedes seguir hacia lo que probablemente buscabas.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid">
            <article className="card"><h3><Link href="/servicios/">Servicios</Link></h3><p>Aplicaciones, plataformas web, sistemas empresariales, IA y NFC.</p></article>
            <article className="card"><h3><Link href="/nfc/">Tecnología NFC</Link></h3><p>Tarjetas, carnets, llaveros y credenciales conectados con un toque.</p></article>
            <article className="card"><h3><Link href="/portafolio/">Proyectos</Link></h3><p>Veinte soluciones que ya operan en Venezuela.</p></article>
            <article className="card"><h3><Link href="/contacto/">Contacto</Link></h3><p>Cuéntanos qué necesitas y preparamos una propuesta.</p></article>
          </div>
          <div className="actions center">
            <a className="btn" href="https://wa.me/584127065848" target="_blank" rel="noreferrer">Escribir por WhatsApp</a>
            <Link className="btn secondary" href="/">Volver al inicio</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
