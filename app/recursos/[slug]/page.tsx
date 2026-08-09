import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { resources } from "../../lib/resources";

export function generateStaticParams(){return resources.map(resource=>({slug:resource.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const resource=resources.find(item=>item.slug===slug);if(!resource)return{};return{title:{absolute:resource.seoTitle},description:resource.description,alternates:{canonical:`/recursos/${resource.slug}`},openGraph:{type:"article",url:`/recursos/${resource.slug}`,title:resource.seoTitle,description:resource.description}};}

export default async function ResourcePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const resource=resources.find(item=>item.slug===slug);if(!resource)notFound();return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[
    {"@type":"ListItem",position:1,name:"Inicio",item:"https://zividynamics.com/"},
    {"@type":"ListItem",position:2,name:"Recursos",item:"https://zividynamics.com/recursos/"},
    {"@type":"ListItem",position:3,name:resource.title}]})}}/>
  {/* Article con autor y fechas. Sin esto los tres articulos son anonimos, que
      es lo peor que se puede presentar bajo el sistema de contenido util. El
      autor DEBE verse tambien en pantalla (ver la linea de firma mas abajo):
      declarar en el schema algo que el usuario no ve resta en vez de sumar. */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Article",
    headline:resource.title, description:resource.description, inLanguage:"es-VE",
    datePublished:resource.datePublished, dateModified:resource.dateModified,
    author:{"@type":"Person","@id":"https://zividynamics.com/nosotros/#joswald",name:"Joswald Alejandro López Luna",jobTitle:"CEO y Fundador",url:"https://zividynamics.com/nosotros/"},
    publisher:{"@id":"https://zividynamics.com/#organizacion"},
    mainEntityOfPage:{"@type":"WebPage","@id":`https://zividynamics.com/recursos/${resource.slug}/`},
    articleSection:resource.category})}}/>
  <article className="article-page"><header className="article-header"><div className="container"><Link href="/recursos" className="case-back">← Volver a recursos</Link><span className="eyebrow">{resource.category} · {resource.read}</span><h1>{resource.title}</h1><p>{resource.description}</p></div></header><div className="container article-layout"><aside><strong>Contenido</strong>{resource.sections.map(([title],index)=><a key={title} href={`#seccion-${index+1}`}>{String(index+1).padStart(2,"0")} · {title}</a>)}</aside><div className="article-body"><p className="article-lead">La tecnología genera valor cuando se conecta con una necesidad clara, un proceso comprensible y una forma responsable de medir resultados.</p>{resource.sections.map(([title,text],index)=><section id={`seccion-${index+1}`} key={title}><span>0{index+1}</span><h2>{title}</h2><p>{text}</p></section>)}<div className="article-cta"><h2>Convierte el diagnóstico en una hoja de ruta.</h2><p>Zivi Dynamics puede analizar el proceso y definir una propuesta técnica alineada con la realidad de la organización.</p><Link href="/contacto" className="btn">Solicitar evaluación</Link></div></div></div></article>
</>}
