import './index.css';

const treatmentCards = [
  {
    image: '/Assets/services/cosmetic-dentistry.webp',
    pill: 'AESTHETIC',
    tag: 'Veneers & Luminate',
    title: 'Cosmetic & Aesthetic Dentistry',
    description: 'Natural-looking veneers and smile design planned around your features.',
    stats: [
      { label: 'Visits', value: '1–2 Visits' },
      { label: 'Longevity', value: '15+ Years' },
      { label: 'Tech', value: 'DSD 3D' }
    ],
    price: 'Starting from',
    amount: '1999 /unit',
    cta: 'Book →'
  },
  {
    image: '/Assets/services/dental-implants.webp',
    pill: 'DIAMOND PROVIDER',
    tag: 'Invisalign Diamond',
    title: 'Orthodontics & Clear Aligners',
    description: 'A discreet, digital way to create a straighter, more confident smile.',
    stats: [
      { label: 'Timeline', value: '6–12 Mos' },
      { label: 'Diagnostics', value: 'iTero 5D' },
      { label: 'Impressions', value: '100% Digital' }
    ],
    price: 'Plans from',
    amount: '4999 /mo',
    cta: 'Book →'
  },
  {
    image: '/Assets/services/orthodontics.webp',
    pill: 'LIFETIME WARRANTY',
    tag: 'Single Implants',
    title: 'Implantology & Oral Surgery',
    description: 'Steady, computer-guided implant care for missing teeth.',
    stats: [
      { label: 'Precision', value: 'Sub- mm 3D' },
      { label: 'Material', value: 'Zirconia/Ti' },
      { label: 'Warranty', value: 'Lifetime' }
    ],
    price: 'Starting from',
    amount: '5999 /fixture',
    cta: 'Book →'
  },
  {
    image: '/Assets/services/pediatric-care.webp',
    pill: '98% SUCCESS',
    tag: 'Gentle Root Canal',
    title: 'Microscopic Endodontics',
    description: 'Gentle root canal care focused on saving your natural tooth.',
    stats: [
      { label: 'Duration', value: '45–60 Min' },
      { label: 'Preservation', value: '98% Tooth' },
      { label: 'Comfort', value: 'Pain-Free' }
    ],
    price: 'Starting from',
    amount: '2999 /canal',
    cta: 'Book →'
  },
  {
    image: '/Assets/services/dental-implants.webp',
    pill: 'MINIMALLY INVASIVE',
    tag: 'Deep Scaling',
    title: 'Periodontics & Laser Gum Care',
    description: 'Comfort-focused gum care for a healthier foundation.',
    stats: [
      { label: 'Method', value: 'LANAP Laser' },
      { label: 'Downtime', value: 'Zero Days' },
      { label: 'Anesthesia', value: 'Topical Gel' }
    ],
    price: 'Starting from',
    amount: '3999 /quadrant',
    cta: 'Book →'
  },
  {
    image: '/Assets/services/pediatric-care.webp',
    pill: 'FAMILY & KIDS',
    tag: 'Children & Fluoride',
    title: 'Preventive & Pediatric Care',
    description: 'Simple preventive care for growing smiles and busy families.',
    stats: [
      { label: 'Care Type', value: 'Biomimetic' },
      { label: 'Ages', value: 'All Ages' },
      { label: 'Recall', value: '6 Months' }
    ],
    price: 'Preventive check',
    amount: '999 /complete',
    cta: 'Book →'
  }
];

const steps = [
  {
    number: '01',
    title: '3D Digital Assessment',
    text: 'Comprehensive intraoral diagnostic imaging and 3D CBCT diagnostics for exact restorative planning.',
    foot: 'Sub-millimeter mapping'
  },
  {
    number: '02',
    title: 'Treatment Simulation',
    text: 'Preview your outcome with digital smile design and custom treatment simulation before care begins.',
    foot: 'Digital smile preview'
  },
  {
    number: '03',
    title: 'Pain-Free Procedure',
    text: 'Delivering gentle, precise treatment using advanced anesthetic protocols and minimally invasive techniques.',
    foot: 'Anxiety-free protocol'
  },
  {
    number: '04',
    title: 'Lifetime Maintenance',
    text: 'Annual reviews, digital monitoring, and long-term care guidance to preserve your smile for years.',
    foot: 'Structural warranty'
  }
];

function TreatmentsPage() {
  return (
    <div className="treatments-shell">
      <div className="page-breadcrumb treatments-breadcrumb">
        <span className="crumb-icon">⌂</span>
        <span>Home</span>
        <span className="crumb-separator">/</span>
        <span>Treatments</span>
      </div>

      <main className="treatments-page">
        <section className="treatments-hero">
          <span className="section-kicker">Comprehensive clinical care</span>
          <div className="hero-row">
            <div>
              <h1>Advanced Dental Treatments &amp; Services</h1>
              <p>Focused care for healthier teeth, calmer visits, and confident smiles.</p>
            </div>

            <div className="hero-badge">
              <span className="badge-icon">◌</span>
              <span>Price Transparency</span>
              <small>Zero hidden fees &amp; OPA available</small>
            </div>
          </div>

          <div className="category-bar">
            <button type="button" className="filter active">All Treatments (6)</button>
            <button type="button" className="filter">Cosmetic Dentistry</button>
            <button type="button" className="filter">Smile Design</button>
            <button type="button" className="filter">Restorative Care</button>
            <button type="button" className="filter">Family Care</button>
          </div>
        </section>

        <section className="treatment-grid">
          {treatmentCards.map((card) => (
            <article className="treatment-card" key={card.title}>
              <div className="treatment-image-wrap">
                <img src={card.image} alt={card.title} />
                <span className="card-pill">{card.pill}</span>
              </div>

              <div className="card-body">
                <div className="card-tag-row">
                  <span className="mini-tag">{card.tag}</span>
                </div>

                <h3>{card.title}</h3>
                <p>{card.description}</p>

                <div className="stats-row">
                  {card.stats.map((stat) => (
                    <div key={stat.label} className="stat-box">
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="card-footer">
                  <div className="price-box">
                    <small>{card.price}</small>
                    <strong>{card.amount}</strong>
                  </div>
                  <button type="button" className="book-btn">{card.cta}</button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="journey-section compact-journey">
          <div className="journey-heading">
            <span className="section-kicker">Predictable clinical workflows</span>
            <h2>Your Precision Treatment Journey</h2>
            <p>A clear three-step rhythm from first conversation to confident follow-up.</p>
          </div>

          <div className="journey-badge">
            <span className="badge-icon">✦</span>
            Powered by 3D CBCT &amp; iTero Optical Scanners
          </div>

          <div className="journey-grid">
            {steps.slice(0, 3).map((step) => (
              <article className="step-card" key={step.number}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <div className="step-foot">{step.foot}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="consult-strip">
          <div className="consult-copy">
            <span className="section-kicker">Dental concierge &amp; triage</span>
            <h2>Not sure where to begin?</h2>
            <p>Start with a calm conversation and we will help you choose the right next step.</p>
          </div>

          <div className="consult-actions">
            <button type="button" className="reserve-btn">Reserve Initial Consultation</button>
            <button type="button" className="call-btn">Speak to Doctor: +1 (800) 555-MAAR</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TreatmentsPage;
