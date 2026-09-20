import './index.css';

function Hero() {
	return (
		<main id="home">
			<section className="hero-section">
				<div className="hero-copy">
					<span className="eyebrow"><span aria-hidden="true">&#10024;</span> Premier Dental Care Provider</span>
					<h1>Your Smile<br />Deserves<br /><em>Expert Care.</em></h1>
					<p>Advanced dental treatments, experienced specialists, and compassionate care &mdash; all under one roof at Ma Dental. We prioritize your comfort and health with state-of-the-art precision.</p>
					<div className="hero-actions">
						<a className="primary-button" href="/book-appointment">Book an Appointment <span aria-hidden="true">&rarr;</span></a>
						<a className="secondary-button" href="#contact"><span aria-hidden="true">&#9675;</span> Chat on WhatsApp</a>
					</div>
					<div className="trust-row">
						<div className="patient-avatars" aria-hidden="true"><span>R</span><span>A</span><span>M</span><span>S</span></div>
						<div><div className="rating"><strong>★★★★★</strong> <b>4.9/5</b></div><small>Trusted by 10,000+ Happy patients</small></div>
					</div>
				</div>

				<div className="hero-visual">
					<img src="/Assets/hero_section_image/hero_section_compress_image.webp" alt="Dentist caring for a patient" />
					<div className="care-card">
						<span className="care-icon">&#10003;</span>
						<span><strong>Personalized Dental Care</strong><small>Safe, painless, &amp; certified procedures</small></span>
						<b>Open Today</b>
					</div>
				</div>
			</section>

			<section className="stats-bar" aria-label="Ma Dental statistics">
				<div><strong>10+</strong><span>Years Experience</span></div>
				<div><strong>10k+</strong><span>Happy Patients</span></div>
				<div><strong>15+</strong><span>Treatments</span></div>
				<div><strong>5+</strong><span>Specialists</span></div>
			</section>
		</main>
	);
}

export default Hero;
