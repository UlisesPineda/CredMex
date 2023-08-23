

export const ContactSection = () => {
  return (
    <section 
      className="contact-section white-section"
      id="contacto"
    >
        <h2>Contáctanos</h2>
        <p>Si necesitas atención personalizada nos puedes contactar en los siguientes medios:</p>
        <div className="contact-info-container">
          <div className="contact-card">
            <a href="https://w.app/CreditoPyMeMexico" className="wapp-icon contact-icon" title="Envíanos un WP 💬"></a>
            <big className="colored-subtitle">WhatsApp</big>
            <a href="https://w.app/CreditoPyMeMexico" title="Envíanos un WP 💬">Enviar Mensaje</a>
          </div>
          <div className="contact-card">
            <a href="tel:+522224288804" className="tel-icon contact-icon" title="Llámanos 📱"></a>
            <big className="colored-subtitle">Teléfono</big>
            <a href="tel:+522224288804" title="Llámanos 📱">222 428 88 04</a>
          </div>
          <div className="contact-card">
            <a className="mail-icon contact-icon"></a>
            <big className="colored-subtitle">Correo</big>
            <a>pyme@creditopymemexico.com</a>
          </div>
        </div>
        <p>Horario de atención: Lunes a Viernes de 9:00 am a 5:00 pm</p>
    </section>
  );
};
