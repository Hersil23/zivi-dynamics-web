import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Desarrollo de software a la medida en Venezuela | Zivi" },
  description: "Apps móviles, plataformas web, sistemas empresariales e integraciones con IA para empresas en Venezuela. Diagnóstico previo y soporte incluido.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Desarrollo de software a la medida en Venezuela | Zivi",
    description: "Apps móviles, plataformas web, sistemas empresariales e integraciones con IA para empresas en Venezuela. Diagnóstico previo y soporte incluido.",
    url: "/servicios",
  },
};
const services=[
  ["01","Aplicaciones móviles","Productos para Android, iOS y PWA con flujos adaptados a usuarios, dispositivos y operación real.",["Experiencia responsive","Notificaciones e integraciones","Panel administrativo","Publicación y soporte"]],
  ["02","Páginas y plataformas web","Sitios corporativos, portales, catálogos y sistemas web rápidos, seguros y preparados para posicionamiento.",["SEO técnico","Diseño responsive","Gestión de contenido","Analítica y conversión"]],
  ["03","Sistemas empresariales","Herramientas para organizar usuarios, ventas, pagos, inventario, eventos, membresías y reportes.",["Roles y permisos","Dashboards","Automatización","Trazabilidad"]],
  ["04","Software a la medida","Arquitecturas creadas alrededor del proceso, las reglas y el crecimiento esperado de la organización.",["Diagnóstico funcional","Arquitectura escalable","Integraciones","Evolución continua"]],
  ["05","Inteligencia artificial","Asistentes y automatizaciones conectados con información, sistemas y reglas de negocio.",["Chatbots","Búsqueda documental","Análisis","Automatización de tareas"]],
  ["06","Tecnología NFC","Objetos físicos conectados con perfiles, documentos, servicios, promociones y plataformas medibles.",["Tarjetas","Llaveros","Credenciales","Habladores"]],
];
const faq=[{"@type":"Question",name:"¿Zivi trabaja con sistemas existentes?",acceptedAnswer:{"@type":"Answer",text:"Sí. Evaluamos la arquitectura disponible y definimos integraciones, migraciones o módulos complementarios según el caso."}},{"@type":"Question",name:"¿Los proyectos incluyen soporte?",acceptedAnswer:{"@type":"Answer",text:"El alcance puede incluir despliegue, capacitación, soporte, mantenimiento y evolución continua definidos en la propuesta comercial."}},{"@type":"Question",name:"¿Atienden proyectos fuera de Venezuela?",acceptedAnswer:{"@type":"Answer",text:"La operación está ubicada en Venezuela y los productos digitales pueden desarrollarse y gestionarse para organizaciones de otros mercados."}}];

export default function ServicesPage(){return <>
  <section className="pageHero service-hero"><div className="container"><span className="eyebrow">Servicios tecnológicos</span><h1>Construimos productos digitales completos.</h1><p className="lead">Integramos estrategia, diseño, desarrollo, automatización y soporte para convertir necesidades operativas en tecnología útil.</p></div></section>
  <section className="positioning-section"><div className="container service-position-grid">{services.map(([number,title,description,items])=><article key={title as string}><span>{number as string}</span><h2>{title as string}</h2><p>{description as string}</p><ul>{(items as string[]).map(item=><li key={item}>✓ {item}</li>)}</ul><Link href="/contacto">Solicitar evaluación →</Link></article>)}</div></section>
  <section className="positioning-process"><div className="container"><div className="positioning-head"><div><span className="eyebrow">Cómo trabajamos</span><h2>Una metodología orientada al resultado.</h2></div><p>Antes de seleccionar tecnología, comprendemos el problema, los usuarios, los datos y las condiciones de operación.</p></div><div className="positioning-steps"><div><strong>Diagnóstico</strong><span>Procesos, usuarios y objetivos.</span></div><div><strong>Arquitectura</strong><span>Alcance, seguridad e integraciones.</span></div><div><strong>Implementación</strong><span>Diseño, desarrollo y pruebas.</span></div><div><strong>Evolución</strong><span>Despliegue, soporte y mejoras.</span></div></div></div></section>
  <section className="faq-section"><div className="container"><span className="eyebrow">Preguntas frecuentes</span><h2>Información para iniciar un proyecto.</h2><div className="faq-grid">{faq.map(item=><details key={item.name}><summary>{item.name}</summary><p>{item.acceptedAnswer.text}</p></details>)}</div></div></section>
  <section className="section"><div className="container cta"><div><span className="eyebrow">Siguiente paso</span><h2>Definamos la solución correcta para tu operación.</h2></div><Link href="/contacto" className="btn diagnosticCta">Solicitar diagnóstico <span aria-hidden="true">↗</span></Link></div></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faq})}}/>
</>}
