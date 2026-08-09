import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";

export const metadata: Metadata = {
  title: { absolute: "Cotiza tu proyecto de software | Zivi Dynamics" },
  description: "Cuéntanos qué necesitas digitalizar. Respondemos por WhatsApp al +58 412 706 5848 con una propuesta ajustada a tu operación.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Cotiza tu proyecto de software | Zivi Dynamics",
    description: "Cuéntanos qué necesitas digitalizar. Respondemos por WhatsApp al +58 412 706 5848 con una propuesta ajustada a tu operación.",
    url: "/contacto",
  },
};

export default function ContactPage() {
  return <>
    <section className="pageHero"><div className="container"><span className="eyebrow">Contacto</span><h1>Conversemos sobre tu próximo proyecto.</h1><p className="lead">Cuéntanos qué necesitas digitalizar, automatizar o conectar. Prepararemos una propuesta alineada con tus objetivos.</p></div></section>
    <section className="contact-section"><div className="container contact-layout">
      <aside className="contact-company"><span className="eyebrow">Datos corporativos</span><h2>Zivi Dynamics C.A.</h2><p className="contact-rif">RIF: J-508175123</p><p>Joswald Alejandro López Luna — CEO y Fundador</p>
        <div className="contact-links"><a href="https://linktr.ee/Zividynamics" target="_blank" rel="noreferrer"><small>Centro de enlaces</small><strong>Todos nuestros canales ↗</strong></a><a href="https://wa.me/584127065848" target="_blank" rel="noreferrer"><small>WhatsApp</small><strong>+58 412 706 5848</strong></a><a href="mailto:contacto@zividynamics.com"><small>Correo</small><strong>contacto@zividynamics.com</strong></a><a href="https://www.instagram.com/zivi.ve" target="_blank" rel="noreferrer"><small>Instagram</small><strong>@zivi.ve</strong></a><span><small>Ubicación</small><strong>San Antonio de los Altos, Miranda, Venezuela</strong></span></div>
        <div className="contact-note"><strong>Respuesta orientada a soluciones</strong><p>Revisamos el contexto del proyecto antes de recomendar tecnología, alcance o inversión.</p></div>
      </aside>
      <ContactForm />
    </div></section>
  </>;
}
