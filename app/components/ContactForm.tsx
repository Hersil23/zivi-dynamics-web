"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [state, setState] = useState<"idle"|"sending"|"ready"|"error">("idle");
  const [fallbackUrl, setFallbackUrl] = useState("");
  const [message, setMessage] = useState("");

  // El sitio se sirve como HTML estático desde cPanel, así que no hay servidor
  // que atienda /api/contacto. Tampoco hace falta: aquella ruta no mandaba
  // ningún correo — validaba los campos y devolvía un enlace de wa.me. Todo eso
  // se hace aquí igual de bien, porque lo único que sale de este formulario es
  // un enlace que la persona tiene que pulsar. No hay nada que proteger.
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");
    const form = event.currentTarget;
    try {
      const raw = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
      const limpiar = (v: unknown, max = 2000) => typeof v === "string" ? v.trim().slice(0, max) : "";

      // Trampa para robots: es un campo oculto. Si viene relleno, lo escribió un
      // bot. Se responde como si todo hubiera ido bien y no se hace nada.
      if (limpiar(raw.website)) { setState("ready"); setFallbackUrl(""); return; }

      const d = {
        name: limpiar(raw.name, 120), company: limpiar(raw.company, 160),
        email: limpiar(raw.email, 180), phone: limpiar(raw.phone, 80),
        service: limpiar(raw.service, 120), budget: limpiar(raw.budget, 80),
        startDate: limpiar(raw.startDate, 80), message: limpiar(raw.message, 3000),
      };
      const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email);
      // El <form> lleva noValidate, que anula el `required` nativo del navegador
      // — incluido el de la casilla de consentimiento. Y sin atributo `name` esa
      // casilla ni siquiera entraba en el FormData: se podia enviar sin aceptar
      // nada. La politica dice que se recoge consentimiento; aqui se recoge.
      const consintio = raw.consent === "si";
      if (!d.name || !correoValido || !d.phone || !d.service || d.message.length < 20 || !consintio) {
        throw new Error(consintio
          ? "Revisa los campos obligatorios y describe el proyecto con mayor detalle."
          : "Debes aceptar la política de privacidad para continuar.");
      }

      const texto = [
        "Hola Zivi Dynamics, deseo solicitar una cotización.", "",
        `Nombre: ${d.name}`,
        `Empresa: ${d.company || "No indicada"}`,
        `Correo: ${d.email}`,
        `Teléfono: ${d.phone}`,
        `Tipo de proyecto: ${d.service}`,
        `Presupuesto: ${d.budget || "Por definir"}`,
        `Inicio estimado: ${d.startDate || "Por definir"}`,
        `Descripción: ${d.message}`,
      ].join("\n");

      setFallbackUrl(`https://wa.me/584127065848?text=${encodeURIComponent(texto)}`);
      setState("ready");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Ocurrió un error inesperado.");
      setState("error");
    }
  }

  return <form className="lead-form" onSubmit={submit} noValidate>
    <div className="form-intro"><span>Solicitud de proyecto</span><h2>Cuéntanos qué necesitas transformar.</h2><p>Estos datos nos permiten preparar una primera conversación más útil y enfocada.</p></div>
    <div className="form-row"><label>Nombre completo<input name="name" required autoComplete="name" placeholder="Tu nombre y apellido"/></label><label>Empresa<input name="company" autoComplete="organization" placeholder="Nombre de la organización"/></label></div>
    <div className="form-row"><label>Correo electrónico<input name="email" type="email" required autoComplete="email" placeholder="correo@empresa.com"/></label><label>Teléfono<input name="phone" required autoComplete="tel" placeholder="+58 ..."/></label></div>
    <div className="form-row"><label>Tipo de proyecto<select name="service" required defaultValue="Aplicación o sistema"><option>Aplicación o sistema</option><option>Página o plataforma web</option><option>Inteligencia artificial</option><option>Tecnología NFC</option><option>Automatización empresarial</option><option>Soporte y evolución</option><option>Otro</option></select></label><label>Presupuesto estimado<select name="budget" defaultValue="Por definir"><option>Por definir</option><option>Menos de USD 1.000</option><option>USD 1.000 – 3.000</option><option>USD 3.000 – 8.000</option><option>Más de USD 8.000</option></select></label></div>
    <label>Fecha estimada de inicio<input name="startDate" type="month"/></label>
    <label>Descripción del proyecto<textarea name="message" required minLength={20} rows={6} placeholder="Describe el problema, el proceso actual, los usuarios y el resultado que esperas obtener."/></label>
    <label className="form-honeypot" aria-hidden="true">Sitio web<input name="website" tabIndex={-1} autoComplete="off"/></label>
    <label className="form-consent"><input type="checkbox" name="consent" value="si" required/><span>Acepto que Zivi Dynamics utilice estos datos para responder mi solicitud, conforme a la política de privacidad.</span></label>
    <button className="btn form-submit" type="submit" disabled={state === "sending"}>{state === "sending" ? "Procesando solicitud…" : "Enviar solicitud"}</button>
    {state === "ready" && <div className="form-fallback"><p className="form-status success">✓ Tu solicitud quedó lista con todos los datos.</p><p>Pulsa para enviarla por WhatsApp y te respondemos de inmediato.</p><a className="btn secondary" href={fallbackUrl} target="_blank" rel="noreferrer">Enviar por WhatsApp</a></div>}
    {state === "error" && <p className="form-status error">{message}</p>}
  </form>;
}
