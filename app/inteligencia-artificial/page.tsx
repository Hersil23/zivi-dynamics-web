import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Automatización con IA y chatbots en Venezuela | Zivi" },
  description: "Asistentes, chatbots de WhatsApp, búsqueda documental y automatización de procesos integrados con los sistemas que ya usa tu empresa.",
  alternates: { canonical: "/inteligencia-artificial" },
  openGraph: {
    title: "Automatización con IA y chatbots en Venezuela | Zivi",
    description: "Asistentes, chatbots de WhatsApp, búsqueda documental y automatización de procesos integrados con los sistemas que ya usa tu empresa.",
    url: "/inteligencia-artificial",
  },
};
const capabilities=[["Asistentes empresariales","Respuestas y acciones basadas en información, reglas y procesos internos."],["Chatbots de atención","Orientación, captación y soporte inicial en canales digitales."],["Automatización de flujos","Clasificación, seguimiento, notificaciones y tareas repetitivas conectadas."],["Análisis inteligente","Interpretación de información y generación de apoyo para decisiones."],["Búsqueda documental","Consulta contextual de manuales, políticas y bases de conocimiento."],["Integración con sistemas","IA conectada con CRM, inventarios, agendas, formularios y plataformas."]];
const principles=[["Contexto","La IA debe comprender información relevante y límites definidos."],["Seguridad","Los datos, accesos y responsabilidades se diseñan desde el inicio."],["Validación","Las respuestas y acciones críticas requieren controles apropiados."],["Medición","Definimos indicadores para comprobar productividad y valor generado."]];

export default function AiPage(){return <>
  <section className="pageHero ai-position-hero"><div className="container"><span className="eyebrow">Inteligencia artificial aplicada</span><h1>IA integrada con procesos, no añadida como decoración.</h1><p className="lead">Diseñamos asistentes y automatizaciones que trabajan con contexto, reglas de negocio y fuentes de información reales.</p><div className="ai-flow"><span>Datos</span><b>→</b><span>Contexto</span><b>→</b><span>Automatización</span><b>→</b><span>Resultado</span></div></div></section>
  <section className="positioning-section"><div className="container capability-position-grid">{capabilities.map(([title,text],index)=><article key={title}><span>0{index+1}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section>
  <section className="positioning-process"><div className="container"><div className="positioning-head"><div><span className="eyebrow">Implementación responsable</span><h2>Primero identificamos dónde la IA produce valor.</h2></div><p>Evaluamos tareas, información, riesgos y retorno esperado antes de seleccionar un modelo o diseñar la integración.</p></div><div className="positioning-steps">{principles.map(([title,text],index)=><div key={title}><span>0{index+1}</span><strong>{title}</strong><p>{text}</p></div>)}</div></div></section>
  <section className="positioning-section"><div className="container positioning-split"><div><span className="eyebrow">Casos de uso</span><h2>Automatización conectada con la operación.</h2></div><div className="use-list"><span>Atención y calificación de solicitudes</span><span>Consulta de documentos empresariales</span><span>Generación y análisis de reportes</span><span>Clasificación de información</span><span>Seguimiento de procesos</span><span>Asistencia interna para equipos</span></div></div></section>
  <section className="section"><div className="container cta"><div><span className="eyebrow">Evaluación de IA</span><h2>Analicemos el proceso antes de automatizarlo.</h2></div><Link href="/contacto" className="btn">Solicitar evaluación</Link></div></section>
</>}
