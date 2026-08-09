import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Software por sector: salud, seguros y comercio | Zivi" },
  description: "Software diseñado por sector: salud, asociaciones profesionales, seguros, movilidad, restaurantes y eventos. Casos reales operando en Venezuela.",
  alternates: { canonical: "/soluciones" },
  openGraph: {
    title: "Software por sector: salud, seguros y comercio | Zivi",
    description: "Software diseñado por sector: salud, asociaciones profesionales, seguros, movilidad, restaurantes y eventos. Casos reales operando en Venezuela.",
    url: "/soluciones",
  },
};
const sectors=[
  ["Salud y medicina","Sociedades médicas, consultorios, jornadas, pacientes y eventos científicos.",["Membresías y colegiatura","Jornadas de salud","Gestión de pacientes","Eventos y acreditación"]],
  ["Asociaciones profesionales","Afiliación, pagos, solvencias, directorios, documentos y comunicación con miembros.",["Registro de afiliados","Estados de cuenta","Eventos","Panel administrativo"]],
  ["Seguros y movilidad","Pólizas, asistencia, documentos, aliados, mantenimiento y acceso mediante NFC.",["Portal del asegurado","Asistencia vial","Documentos","Llaveros NFC"]],
  ["Restaurantes y comercios","Menús, catálogos, pedidos, promociones, fidelización y experiencias por mesa.",["Menú digital","QR y NFC","Promociones","Analítica"]],
  ["Eventos y congresos","Registro, pagos, entradas, agendas, acreditación y control de acceso.",["Landing del evento","Entradas digitales","Escaneo QR","Reportes"]],
  ["Empresas de servicios","CRM, operaciones, reportes, automatización y atención al cliente.",["Gestión de clientes","Flujos operativos","Dashboards","Integraciones"]],
];

export default function SolutionsPage(){return <>
  <section className="pageHero"><div className="container"><span className="eyebrow">Soluciones por industria</span><h1>Cada sector requiere tecnología diseñada con contexto.</h1><p className="lead">Adaptamos la arquitectura, los flujos y la experiencia a las personas, riesgos y objetivos de cada organización.</p></div></section>
  <section className="positioning-section"><div className="container sector-position-grid">{sectors.map(([title,text,items],index)=><article key={title as string}><div className="sector-index">0{index+1}</div><span className="eyebrow">Industria</span><h2>{title as string}</h2><p>{text as string}</p><ul>{(items as string[]).map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>
  <section className="positioning-process"><div className="container positioning-split"><div><span className="eyebrow">Principio de diseño</span><h2>No forzamos procesos dentro de una plantilla.</h2></div><div><p>Estudiamos cómo funciona la organización, qué información utiliza, dónde ocurren las demoras y qué necesitan sus usuarios. A partir de ese diagnóstico definimos una solución que pueda implementarse y evolucionar de forma responsable.</p><Link href="/portafolio">Revisar casos de proyecto →</Link></div></div></section>
  <section className="section"><div className="container cta"><div><span className="eyebrow">Analicemos tu sector</span><h2>Una necesidad específica merece una solución específica.</h2></div><Link href="/contacto" className="btn">Conversar sobre el proyecto</Link></div></section>
</>}
