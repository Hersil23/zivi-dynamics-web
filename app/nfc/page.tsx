import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExperienceLayer } from "../components/ExperienceLayer";
import { NfcSignalDemo } from "../components/NfcSignalDemo";

export const metadata: Metadata = {
  title: "Soluciones y productos NFC para empresas en Venezuela",
  description: "Diseño de carnets inteligentes, lanyards, portacarnets, tarjetas, llaveros y puntos NFC conectados con accesos, perfiles, pólizas, WhatsApp, analítica y sistemas empresariales.",
  keywords: [
    "NFC Venezuela",
    "tarjetas NFC personalizadas",
    "carnets NFC personalizados",
    "lanyards personalizados",
    "credenciales NFC para eventos",
    "llaveros NFC",
    "stickers NFC",
    "menú NFC",
    "soluciones NFC para empresas",
  ],
  alternates: { canonical: "/nfc" },
  openGraph: {
    title: "Zivi NFC — Del objeto físico a una acción digital",
    description: "Productos NFC personalizados con la plataforma, automatización y analítica que ocurre después del toque.",
    url: "/nfc",
  },
};

const steps = [
  ["01", "Diseñamos el objetivo", "Definimos qué debe ocurrir: vender, informar, identificar, asistir, cobrar o automatizar."],
  ["02", "Creamos el punto físico", "Tarjeta, llavero, sticker o pieza de mostrador diseñada para el contexto real de uso."],
  ["03", "Construimos la experiencia", "Perfil, menú, póliza, catálogo, formulario, portal o sistema conectado con la operación."],
  ["04", "Medimos y evolucionamos", "El destino puede actualizarse sin reemplazar la pieza y conectarse con analítica o automatizaciones."],
] as const;

const formats = [
  {
    key: "card",
    title: "Tarjetas",
    line: "Identidad profesional y comercial",
    image: "/media/nfc-commerce/contactless-card-pexels.png",
    alt: "Tarjeta contactless acercándose a un terminal de pago en un comercio",
    spec: "PVC / NTAG 21X",
    uses: ["Perfil digital", "Catálogo", "Contacto", "Credenciales"],
  },
  {
    key: "keychain",
    title: "Llaveros",
    line: "Servicios que acompañan al usuario",
    image: "/media/lider/lider-keychain-car-hq.png",
    alt: "Llavero NFC real conectado con asistencia vehicular",
    spec: "ABS / EPOXY",
    uses: ["Seguros", "Vehículos", "Acceso", "Membresías"],
  },
  {
    key: "sticker",
    title: "Stickers",
    line: "Cualquier superficie se vuelve interactiva",
    image: "/media/nfc-commerce/nfc-tag-chip-wikimedia.png",
    alt: "Fotografía macro de una etiqueta NFC y su antena interna",
    spec: "13.56 MHZ / NDEF",
    uses: ["Wi-Fi", "Reseñas", "Soporte", "Campañas"],
  },
  {
    key: "talker",
    title: "Habladores",
    line: "Un punto de acción en mesa o mostrador",
    image: "/media/nfc-commerce/nfc-table-talker-wikimedia.png",
    alt: "Punto físico con acceso QR en una mesa comercial",
    spec: "MESA / MOSTRADOR",
    uses: ["Menús", "Pedidos", "Pagos", "Encuestas"],
  },
] as const;

const useCases = [
  ["Seguros y movilidad", "Pólizas, asistencia, documentos, mantenimiento y servicios desde las llaves del vehículo.", "01"],
  ["Restaurantes y retail", "Menús, promociones, reseñas, Wi-Fi y pedidos desde cada mesa o punto de venta.", "02"],
  ["Profesionales y empresas", "Perfiles, portafolios, catálogos, contacto y credenciales con identidad corporativa.", "03"],
  ["Eventos e instituciones", "Acreditaciones, agendas, asistencia, formularios y contenido actualizado en tiempo real.", "04"],
  ["Hospitalidad y espacios", "Información, directorios, soporte, acceso y experiencias para visitantes o huéspedes.", "05"],
  ["Marketing interactivo", "Campañas físicas conectadas con captación, promociones y datos de interacción.", "06"],
] as const;

const faqs = [
  ["¿El usuario necesita instalar una aplicación?", "No. La experiencia puede abrirse directamente en el navegador, WhatsApp, Google Maps u otro servicio configurado."],
  ["¿Todos los teléfonos pueden leer NFC?", "La mayoría de los smartphones modernos son compatibles. También podemos incorporar un código QR como alternativa de acceso."],
  ["¿La información se puede cambiar después?", "Sí. Podemos usar un destino administrable para actualizar información, promociones o flujos sin reemplazar la pieza física."],
  ["¿NFC reemplaza al código QR?", "No necesariamente. NFC reduce la fricción del acceso y el QR amplía compatibilidad. Una solución bien diseñada puede utilizar ambos."],
  ["¿También fabrican lanyards y portacarnets?", "Sí. Podemos desarrollar el kit completo: carnet impreso y programado, lanyard personalizado, portacarnet, herrajes y experiencia digital conectada."],
  ["¿Zivi solo vende la pieza física?", "No. Nuestro diferencial es diseñar el sistema completo: producto físico, experiencia digital, integraciones, administración y medición."],
] as const;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Soluciones NFC para empresas",
  serviceType: "Diseño e implementación de experiencias NFC",
  provider: {
    "@type": "Organization",
    name: "Zivi Dynamics C.A.",
    url: "https://zividynamics.com",
  },
  areaServed: ["Venezuela", "Latinoamérica"],
  description: "Carnets inteligentes, lanyards, portacarnets, tarjetas, llaveros, stickers y puntos NFC conectados con accesos, perfiles, portales, pólizas, analítica y sistemas empresariales.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function NfcPage() {
  return (
    <>
      <ExperienceLayer />
      <section className="nfcEpicHero" data-signal-stage>
        <div className="nfcHeroPattern" aria-hidden="true" />
        <div className="container nfcEpicHeroGrid">
          <div className="nfcEpicIntro" data-reveal>
            <div className="heroKicker">
              <span>ZIVI / PHYGITAL LAB</span><i /><span>NFC EN VENEZUELA</span>
            </div>
            <h1>Un toque.<br /><em>Una acción real.</em></h1>
            <p>
              Convertimos objetos cotidianos en puntos de acceso a ventas,
              servicios e información. Diseñamos la pieza NFC y todo el sistema
              que se activa detrás.
            </p>
            <div className="epicActions">
              <a
                className="epicButton epicButtonPrimary"
                href="https://wa.me/584127065848?text=Hola%20Zivi%20Dynamics,%20quiero%20cotizar%20una%20solución%20NFC."
              >
                Cotizar solución NFC <span>↗</span>
              </a>
              <a className="epicButton epicButtonGhost" href="#como-funciona">Ver cómo funciona</a>
            </div>
            <div className="nfcHeroFacts">
              <span><strong>Sin app</strong> para el usuario</span>
              <span><strong>Editable</strong> después de entregar</span>
              <span><strong>NFC + QR</strong> máxima compatibilidad</span>
            </div>
          </div>
          <div data-reveal><NfcSignalDemo /></div>
        </div>
      </section>

      <section className="nfcReality">
        <div className="container">
          <div className="nfcRealityHead" data-reveal>
            <span>IMPLEMENTACIONES REALES</span>
            <p>Ya conectamos productos físicos con seguros, servicios y credenciales empresariales.</p>
          </div>
          <div className="nfcRealityGrid">
            {[
              ["/media/lider/lider-keychain-car-hq.png", "Llavero vehicular", "Seguro + asistencia"],
              ["/media/lider/lider-keychain-package.webp", "Entrega híbrida", "NFC + QR"],
              ["/media/nfc/nfc-credential-techs-sanitized.webp", "Credencial corporativa", "Identidad + acceso"],
            ].map(([image, title, label], index) => (
              <figure key={image} className={`nfcRealityItem reality-${index + 1}`} data-reveal>
                <div><Image src={image} alt={`${title}: ${label}`} fill sizes="(max-width: 760px) 100vw, 33vw" quality={95} /></div>
                <figcaption><strong>{title}</strong><span>{label}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="nfcCredentialCase">
        <div className="container nfcCredentialCaseGrid">
          <div className="nfcCredentialVisual" data-reveal>
            <Image
              src="/projects/adium-smart-credential-v2.png"
              alt="Solución de carnet inteligente NFC, lanyard y portacarnet para Adium"
              fill
              sizes="(max-width: 900px) 100vw, 56vw"
              quality={96}
            />
            <div className="nfcCredentialLabel">
              <span>03</span>
              <strong>IDENTIDAD<br />CONECTADA</strong>
            </div>
          </div>
          <div className="nfcCredentialCopy" data-reveal>
            <span className="epicEyebrow">Desarrollo de producto / Adium</span>
            <h2>La credencial también puede ser una interfaz.</h2>
            <p>
              Diseñamos una solución integral donde carnet, chip NFC, lanyard y
              portacarnet funcionan como un solo producto corporativo, listo
              para identificar, acreditar y abrir experiencias digitales.
            </p>
            <div className="nfcCredentialSpecs">
              <span>Carnet doble cara</span>
              <span>Chip de aproximación</span>
              <span>Lanyard personalizado</span>
              <span>Portacarnet resistente</span>
            </div>
            <Link href="/portafolio/adium-carnet-inteligente" className="epicButton epicButtonDark">
              Ver el desarrollo <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="nfcHow" id="como-funciona">
        <div className="container">
          <div className="editorialHeading" data-reveal>
            <div>
              <span className="epicEyebrow">Cómo funciona</span>
              <h2>Del objeto a un<br /><em>sistema útil.</em></h2>
            </div>
            <p>
              NFC es la puerta. El valor aparece cuando esa puerta abre una
              experiencia pensada para el negocio y para la persona.
            </p>
          </div>
          <div className="nfcProcess">
            {steps.map(([number, title, text]) => (
              <article key={number} data-reveal>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nfcFormats">
        <div className="container">
          <div className="nfcFormatsHead" data-reveal>
            <span className="epicEyebrow">Formatos</span>
            <h2>La interfaz empieza en la mano, la mesa o el espacio.</h2>
          </div>
          <div className="nfcFormatGrid">
            {formats.map((format, index) => (
              <article key={format.key} className={`nfcFormatCard format-${format.key}`} data-reveal>
                <div className="formatCardTop"><span>0{index + 1}</span><small>NTAG / READY</small></div>
                <div className="formatObjectPhoto">
                  <Image
                    src={format.image}
                    alt={format.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 25vw"
                    quality={94}
                  />
                  <span className="formatPhotoSpec">{format.spec}</span>
                  <span className="formatTapBadge"><i /><b>TAP</b></span>
                </div>
                <h3>{format.title}</h3>
                <p>{format.line}</p>
                <div className="formatUses">{format.uses.map((use) => <span key={use}>{use}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="nfcFormatFoot" data-reveal>
            <p>Personalización por volumen, identidad visual y experiencia digital según el caso.</p>
            <a href="https://wa.me/584127065848?text=Hola,%20quiero%20cotizar%20productos%20NFC%20personalizados.">Consultar formatos y cantidades →</a>
          </div>
          <details className="nfcPhotoCredits">
            <summary>Créditos de fotografía</summary>
            <p>
              Comercio: <a href="https://www.pexels.com/photo/close-up-of-paying-with-card-4393427/" target="_blank" rel="noreferrer">Norma Mortenson / Pexels</a>.
              Etiqueta NFC: <a href="https://commons.wikimedia.org/wiki/File:NFC_Tag_Chip.jpg" target="_blank" rel="noreferrer">HenryWortel / CC BY-SA 4.0</a>.
              Punto de mesa: <a href="https://commons.wikimedia.org/wiki/File:Table_bench_QR_Code_at_the_Madurodam,_The_Hague_(2023)_01.jpg" target="_blank" rel="noreferrer">Donald Trung / CC BY-SA 4.0</a>.
              Las imágenes se presentan recortadas para el formato editorial.
            </p>
          </details>
        </div>
      </section>

      <section className="nfcCommerceLab">
        <div className="container nfcCommerceLabGrid">
          <figure className="nfcCommercePhoto" data-reveal>
            <Image
              src="/media/nfc-commerce/contactless-commerce-pexels.png"
              alt="Interacción NFC real mediante un teléfono y un terminal comercial"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              quality={94}
            />
            <figcaption>
              <span>COMERCIO / NFC</span>
              <strong>El toque ocurre en el mundo real.</strong>
            </figcaption>
          </figure>
          <div className="nfcCommerceCopy" data-reveal>
            <span className="epicEyebrow">NFC para comercio</span>
            <h2>Cada superficie puede convertirse en un punto de venta.</h2>
            <p>
              Una mesa, vitrina, empaque o tarjeta puede abrir la acción correcta
              sin obligar al cliente a buscar, escribir o instalar una aplicación.
            </p>
            <div className="nfcCommerceActions">
              <article><span>01</span><strong>Ver menú o catálogo</strong><small>Contenido editable en tiempo real</small></article>
              <article><span>02</span><strong>Comprar o reservar</strong><small>Menos pasos hasta la conversión</small></article>
              <article><span>03</span><strong>Guardar el contacto</strong><small>WhatsApp, perfil y ubicación</small></article>
              <article><span>04</span><strong>Medir la interacción</strong><small>Aperturas, campañas y destinos</small></article>
            </div>
            <a
              className="nfcCommerceCta"
              href="https://wa.me/584127065848?text=Hola%20Zivi%20Dynamics,%20quiero%20activar%20NFC%20en%20mi%20comercio."
            >
              Activar un punto comercial <span>↗</span>
            </a>
            <small className="nfcCommerceCredit">
              Fotografía: <a href="https://www.pexels.com/photo/a-close-up-shot-of-a-person-holding-a-payment-terminal-12935072/" target="_blank" rel="noreferrer">iMin Technology / Pexels</a>
            </small>
          </div>
        </div>
      </section>

      <section className="nfcCaseFeature">
        <div className="container nfcCaseFeatureGrid">
          <div className="nfcCaseVisual" data-reveal>
            <div className="nfcCasePhoto main">
              <Image src="/media/lider/lider-keychain-car-hq.png" alt="Llavero NFC conectado con el portal de Líder de Seguros" fill sizes="(max-width: 800px) 100vw, 48vw" quality={96} />
            </div>
            <div className="nfcCasePhoto inset">
              <Image src="/media/lider/lider-admin-desktop.webp" alt="Panel administrativo conectado con la solución NFC" fill sizes="280px" />
            </div>
            <div className="nfcCaseStamp"><strong>01</strong><span>CASO<br />OPERATIVO</span></div>
          </div>
          <div className="nfcCaseCopy" data-reveal>
            <span className="epicEyebrow">Caso destacado / Líder Seguros</span>
            <h2>Un llavero que abre un ecosistema de servicio.</h2>
            <p>
              El asegurado accede a pólizas, documentos, asistencia y
              recordatorios desde sus llaves. El equipo interno administra la
              operación desde una plataforma responsive.
            </p>
            <ul>
              <li><span>01</span> Llavero físico personalizado</li>
              <li><span>02</span> Portal móvil para asegurados</li>
              <li><span>03</span> Panel administrativo y documentos</li>
              <li><span>04</span> NFC con respaldo mediante QR</li>
            </ul>
            <Link href="/portafolio/lider-seguros-nfc" className="epicButton epicButtonLight">
              Ver el caso completo <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="nfcUseCases">
        <div className="container">
          <div className="editorialHeading" data-reveal>
            <div>
              <span className="epicEyebrow">Dónde crea valor</span>
              <h2>Un gesto simple.<br /><em>Decenas de posibilidades.</em></h2>
            </div>
            <p>
              Priorizamos casos donde reducir un paso mejora la venta, el
              servicio, la seguridad o la experiencia.
            </p>
          </div>
          <div className="nfcUseCaseGrid">
            {useCases.map(([title, text, number]) => (
              <article key={number} data-reveal>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nfcCompatibility">
        <div className="container nfcCompatibilityGrid" data-reveal>
          <div>
            <span className="epicEyebrow">Diseñado para funcionar</span>
            <h2>NFC cuando es más rápido. QR cuando es necesario.</h2>
          </div>
          <div className="compatibilityDiagram" aria-label="NFC y QR conducen a una misma experiencia administrable">
            <span>NFC</span><i>+</i><span>QR</span><i>→</i><strong>Una experiencia editable</strong>
          </div>
        </div>
      </section>

      <section className="nfcFaq">
        <div className="container nfcFaqGrid">
          <div data-reveal>
            <span className="epicEyebrow">Preguntas frecuentes</span>
            <h2>Lo esencial antes de empezar.</h2>
            <p>Si tu caso necesita una evaluación técnica o comercial, hacemos el diagnóstico contigo.</p>
          </div>
          <div>
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0} data-reveal>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="nfcFinalCta">
        <div className="container" data-reveal>
          <span>ZIVI / NFC</span>
          <h2>¿Qué debería ocurrir después del toque?</h2>
          <p>Diseñemos el producto físico, la experiencia y el sistema como una sola solución.</p>
          <div className="epicActions">
            <a
              className="epicButton epicButtonPrimary"
              href="https://wa.me/584127065848?text=Hola%20Zivi%20Dynamics,%20quiero%20desarrollar%20una%20solución%20NFC."
            >
              Iniciar proyecto NFC <span>↗</span>
            </a>
            <Link className="epicButton epicButtonGhost" href="/contacto">Solicitar diagnóstico</Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
