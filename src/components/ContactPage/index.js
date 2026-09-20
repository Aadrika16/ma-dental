import './index.css';

const contactDetails = [
  {
    label: 'Phone',
    value: '7799234108',
    icon: '☎'
  },
  {
    label: 'Email',
    value: 'madental999@gmail.com',
    icon: '✉'
  },
  {
    label: 'Location',
    value: 'Pileru, Andhra Pradesh',
    icon: '⌂'
  },
  {
    label: 'Hours',
    value: 'Mon - Sat, 9 AM - 9 PM',
    icon: '⏰'
  }
];

function ContactPage() {
  return (
    <div className="contact-shell">
      <div className="page-breadcrumb">
        <span className="crumb-icon">⌂</span>
        <span>Home</span>
        <span className="crumb-separator">/</span>
        <span>Contact</span>
      </div>

      <main className="contact-page">
        <section className="contact-hero">
          <span className="section-kicker">Dental concierge &amp; triage</span>
          <h1>Let’s talk about your smile.</h1>
          <p>Ask a question, request a callback, or come by the clinic.</p>
        </section>

        <div className="contact-layout">
          <div className="contact-card info-card">
            <h2>Contact Details</h2>
            {contactDetails.map((item) => (
              <div className="info-row" key={item.label}>
                <span className="info-icon">{item.icon}</span>
                <div>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-card form-card">
            <h2>Request a Call Back</h2>
            <form className="contact-form">
              <input type="text" placeholder="Full name" />
              <input type="email" placeholder="Email address" />
              <input type="tel" placeholder="Phone number" />
              <textarea rows="3" placeholder="How can we help?" />
              <button type="submit">Request a callback</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactPage;
