import './index.css';

function OurStory() {
	return (
		<section className="our-story" id="about">
			<div className="story-visual">
				<img src="/Assets/hero_section_image/medical_consultation_web_optimized.webp" alt="Doctor consulting with a dental patient" />
				<div className="certified-card">
					<span className="certified-icon" aria-hidden="true">&#10003;</span>
					<span><strong>Certified Clinic</strong><small>ISO 9001:2020 Compliant</small></span>
				</div>
			</div>

			<div className="story-copy">
				<span className="story-eyebrow">OUR STORY</span>
				<h2>Modern Dentistry With a <em>Human Touch.</em></h2>
				<p>Modern tools, gentle care, and a plan that makes sense for you.</p>

				<ul className="story-benefits">
					<li><span aria-hidden="true">&#10003;</span><div><strong>Clear digital diagnosis</strong><small>See the problem and understand your options.</small></div></li>
					<li><span aria-hidden="true">&#10003;</span><div><strong>Calm, human appointments</strong><small>Comfort and communication at every step.</small></div></li>
				</ul>

				<a className="story-link" href="/about">Meet Ma Dental <span aria-hidden="true">&rarr;</span></a>
			</div>
		</section>
	);
}

export default OurStory;
