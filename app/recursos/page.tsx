import type { Metadata } from "next";
import Link from "next/link";
import { resources } from "../lib/resources";

export const metadata: Metadata = {
  title: { absolute: "Guías de tecnología para empresas | Zivi Dynamics" },
  description: "Guías prácticas sobre digitalización, automatización de procesos y tecnología NFC, escritas desde proyectos reales en Venezuela.",
  alternates: { canonical: "/recursos" },
  openGraph: {
    title: "Guías de tecnología para empresas | Zivi Dynamics",
    description: "Guías prácticas sobre digitalización, automatización de procesos y tecnología NFC, escritas desde proyectos reales en Venezuela.",
    url: "/recursos",
  },
};

export default function ResourcesPage(){return <>
  <section className="pageHero"><div className="container"><span className="eyebrow">Centro de recursos</span><h1>Ideas prácticas para tomar mejores decisiones tecnológicas.</h1><p className="lead">Contenido dirigido a empresas e instituciones que buscan digitalizar procesos, automatizar operaciones y construir productos sostenibles.</p></div></section>
  <section className="resource-section"><div className="container resource-grid">{resources.map((resource,index)=><Link href={`/recursos/${resource.slug}`} className="resource-card" key={resource.slug}><div className="resource-visual"><span>0{index+1}</span><i/><i/></div><div><span className="resource-category">{resource.category} · {resource.read}</span><h2>{resource.title}</h2><p>{resource.description}</p><strong>Leer guía →</strong></div></Link>)}</div></section>
  <section className="section"><div className="container cta"><div><span className="eyebrow">Aplicación práctica</span><h2>¿Necesitas llevar estas ideas a un proyecto real?</h2></div><Link href="/contacto" className="btn">Solicitar evaluación</Link></div></section>
</>}
