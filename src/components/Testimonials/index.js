import './index.css';

const testimonials = [
	{
		quote: 'The smile preview gave me so much confidence. The result is beautiful.',
		name: 'Sailaja',
		service: 'Aesthetic Veneers',
		time: '2 wks ago',
		image: '/Assets/specialists_images/doctor-4-compressed.webp'
	},
	{
		quote: 'I had severe dental anxiety. The visit was completely painless.',
		name: 'Sekhar Reddy',
		service: 'Dental Implants',
		time: '1 mo ago',
		image: '/Assets/specialists_images/doctor-1-compressed.webp'
	},
	{
		quote: 'My crown was finished in one visit and fits perfectly.',
		name: 'Rajesh Kudala',
		service: 'Same-Day Crown',
		time: '3 wks ago',
		image: '/Assets/specialists_images/doctor-3-compressed.webp'
	}
];

function Testimonials() {
	return (
		<section className="testimonials-section" id="reviews">
			<div className="testimonials-heading">
				<span className="testimonials-eyebrow">PATIENT EXPERIENCES</span>
				<h2>Life-Changing Smiles</h2>
				<div className="overall-rating"><strong>★★★★★</strong><b>4.9/5 from 655+ reviews</b></div>
			</div>

			<div className="testimonials-grid">
				{testimonials.slice(0, 2).map((testimonial) => (
					<article className="testimonial-card" key={testimonial.name}>
						<div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
						<p>“{testimonial.quote}”</p>
						<div className="reviewer">
							<img src={testimonial.image} alt="" />
							<div><strong>{testimonial.name}</strong><small>{testimonial.service} • {testimonial.time}</small></div>
						</div>
					</article>
				))}
			</div>

			<div className="cta-band">
				<div className="cta-band__copy">
					<span>Elevate your dental experience</span>
					<h3>Experience the New Standard of Dental Care</h3>
				</div>
				<div className="cta-band__actions">
					<a className="primary-cta" href="#contact">Book Your Consultation</a>
					<a className="secondary-cta" href="#treatments">Explore Our Specialties</a>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;