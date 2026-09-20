import './index.css';

const reviews = [
  {
    quote: 'The team made me feel informed, calm, and confident from day one.',
    name: 'Sailaja',
    service: 'Aesthetic Veneers',
    time: '2 weeks ago'
  },
  {
    quote: 'A pain-free experience that felt more like a wellness visit.',
    name: 'Sekhar Reddy',
    service: 'Dental Implants',
    time: '1 month ago'
  },
  {
    quote: 'My crown was placed in one visit and fits beautifully.',
    name: 'Rajesh Kudala',
    service: 'Same-Day Crown',
    time: '3 weeks ago'
  },
  {
    quote: 'Every cost and option was explained clearly. No pressure.',
    name: 'Priya Menon',
    service: 'Smile Makeover',
    time: '5 weeks ago'
  },
  {
    quote: 'My son was relaxed throughout the visit and left smiling.',
    name: 'Naveen Kumar',
    service: 'Pediatric Care',
    time: '6 days ago'
  },
  {
    quote: 'The communication was transparent and warm from start to finish.',
    name: 'Anusha P',
    service: 'Clear Aligners',
    time: '2 months ago'
  }
];

function ReviewsPage() {
  return (
    <div className="reviews-shell">
      <div className="page-breadcrumb">
        <span className="crumb-icon">⌂</span>
        <span>Home</span>
        <span className="crumb-separator">/</span>
        <span>Reviews</span>
      </div>

      <main className="reviews-page">
        <section className="reviews-hero">
          <span className="section-kicker">Patient experiences</span>
          <h1>Life-Changing Smiles</h1>
          <p>A few words from patients who left smiling.</p>
        </section>

        <div className="reviews-grid">
          {reviews.slice(0, 4).map((review) => (
            <article className="review-card" key={review.name}>
              <div className="review-stars">★★★★★</div>
              <p>“{review.quote}”</p>
              <div className="reviewer-box">
                <div className="review-avatar">{review.name.charAt(0)}</div>
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.service} • {review.time}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ReviewsPage;
