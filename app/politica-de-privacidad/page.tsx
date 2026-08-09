import type { Metadata } from "next";

export const metadata: Metadata = { title:"Política de privacidad", description:"Información sobre el tratamiento de datos personales y analítica en el portal de Zivi Dynamics C.A.", alternates:{canonical:"/politica-de-privacidad"} };

const sections=[
  ["Responsable","Zivi Dynamics C.A., RIF J-508175123, con domicilio operativo en San Antonio de los Altos, Miranda, Venezuela. Para consultas relacionadas con privacidad puede escribir a contacto@zividynamics.com."],
  ["Datos suministrados","Cuando una persona completa el formulario de contacto podemos recibir nombre, empresa, correo electrónico, teléfono, tipo de proyecto, presupuesto estimado, fecha prevista y descripción de la necesidad."],
  ["Finalidad","Utilizamos la información para responder solicitudes, preparar propuestas, organizar conversaciones comerciales, ejecutar servicios contratados y brindar soporte relacionado con el proyecto."],
  ["Analítica técnica","El sitio puede utilizar herramientas de analítica y rendimiento de Vercel para conocer visitas, rutas consultadas, rendimiento y errores técnicos. Esta información se utiliza para mejorar la experiencia y la estabilidad del portal."],
  ["Proveedores","La infraestructura funciona sobre Vercel. Cuando el envío automático de correo esté habilitado, Resend podrá procesar el contenido del formulario para entregarlo al equipo de Zivi. Los enlaces externos, como WhatsApp e Instagram, se rigen por sus propias políticas."],
  ["Conservación","Los datos se conservan durante el tiempo necesario para atender la solicitud, desarrollar la relación comercial, cumplir obligaciones contractuales o mantener registros razonables de soporte y comunicación."],
  ["Seguridad","Aplicamos controles técnicos razonables, validación de formularios, conexiones cifradas y restricciones de seguridad. Ningún sistema conectado a Internet puede garantizar riesgo cero."],
  ["Derechos y contacto","Puede solicitar acceso, corrección o eliminación de los datos que haya suministrado escribiendo a contacto@zividynamics.com. La solicitud deberá permitir verificar razonablemente la identidad y la información involucrada."],
  ["Actualizaciones","Esta política puede actualizarse cuando cambien las funciones del portal, los proveedores o los requisitos aplicables. Última actualización: julio de 2026."],
];

export default function PrivacyPage(){return <main className="legal-page"><section className="pageHero"><div className="container"><span className="eyebrow">Información legal</span><h1>Política de privacidad.</h1><p className="lead">Explicamos qué información puede tratar Zivi Dynamics y cómo se utiliza dentro del portal corporativo.</p></div></section><section className="legal-content"><div className="container legal-grid"><aside><strong>Zivi Dynamics C.A.</strong><span>RIF: J-508175123</span><a href="mailto:contacto@zividynamics.com">contacto@zividynamics.com</a></aside><article>{sections.map(([title,text],index)=><section key={title}><span>0{index+1}</span><h2>{title}</h2><p>{text}</p></section>)}</article></div></section></main>}
