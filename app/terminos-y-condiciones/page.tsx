import type { Metadata } from "next";

export const metadata: Metadata = { title:"Términos y condiciones", description:"Condiciones generales de uso del portal corporativo de Zivi Dynamics C.A.", alternates:{canonical:"/terminos-y-condiciones"} };

const sections=[
  ["Objeto del portal","Este sitio presenta la identidad, experiencia, servicios y proyectos de Zivi Dynamics C.A. Su contenido es informativo y no sustituye una propuesta técnica, comercial o contractual específica."],
  ["Cotizaciones y contratos","El alcance, cronograma, inversión, entregables, responsabilidades, condiciones de pago, soporte y licencias de cada proyecto se definen por escrito en la propuesta o contrato correspondiente."],
  ["Información suministrada","La persona que solicita una cotización debe procurar que los datos y requisitos proporcionados sean correctos. Las estimaciones pueden cambiar cuando se identifiquen nuevas necesidades, dependencias o restricciones."],
  ["Propiedad intelectual","La identidad de Zivi Dynamics, el diseño del portal, textos y componentes propios están protegidos por las normas aplicables. La titularidad del código, diseños, contenidos, licencias y entregables de un proyecto se establece en el contrato respectivo."],
  ["Proyectos y marcas de terceros","Los nombres, marcas y referencias de clientes o proyectos pertenecen a sus respectivos titulares. Su presentación en el portafolio tiene fines descriptivos y no implica transferencia de derechos."],
  ["Servicios externos","Dominios, hosting, mensajería, analítica, almacenamiento, pasarelas, inteligencia artificial y otras plataformas pueden depender de proveedores externos, suscripciones, límites y políticas independientes."],
  ["Disponibilidad","Zivi procura mantener el portal disponible y actualizado, pero puede realizar mantenimiento, correcciones o cambios. No se garantiza disponibilidad ininterrumpida frente a fallas de red, proveedores o eventos fuera de control razonable."],
  ["Enlaces externos","El portal puede enlazar a proyectos, redes sociales, WhatsApp y servicios de terceros. Zivi no controla el contenido, seguridad o funcionamiento de sitios externos."],
  ["Limitación informativa","Las descripciones de servicios y resultados esperados son generales. La viabilidad, seguridad, rendimiento y alcance de una solución dependen del diagnóstico y de las condiciones específicas del proyecto."],
  ["Contacto y actualización","Para consultas escriba a contacto@zividynamics.com. Estos términos pueden actualizarse cuando cambien el portal o los servicios. Última actualización: julio de 2026."],
];

export default function TermsPage(){return <main className="legal-page"><section className="pageHero"><div className="container"><span className="eyebrow">Información legal</span><h1>Términos y condiciones.</h1><p className="lead">Condiciones generales aplicables al uso del portal corporativo y a la información publicada.</p></div></section><section className="legal-content"><div className="container legal-grid"><aside><strong>Zivi Dynamics C.A.</strong><span>RIF: J-508175123</span><a href="mailto:contacto@zividynamics.com">contacto@zividynamics.com</a></aside><article>{sections.map(([title,text],index)=><section key={title}><span>{String(index+1).padStart(2,"0")}</span><h2>{title}</h2><p>{text}</p></section>)}</article></div></section></main>}
