import './index.css';

const exploreItems = [
	{
		image: '/Assets/explore_images/dental-team-reviewing-scans-compressed.webp',
		title: '3D CBCT Imaging',
		description: 'High-resolution anatomical modeling for flawless implant planning and root canal precision.',
		alt: 'Dental team reviewing 3D scans'
	},
	{
		image: '/Assets/explore_images/intraoral-scanning-compressed.webp',
		title: 'Intraoral Scanning',
		description: 'Say goodbye to messy dental impressions. Digital scanning provides comfort with millimeter-level accuracy.',
		alt: 'Dentist using an intraoral scanner'
	}
];

function Explore() {
	return (
		<section className="explore-section" id="explore">
			<div className="explore-intro">
				<span className="explore-eyebrow">DIGITAL DENTISTRY</span>
				<h2>Driven By <em>Innovation.</em></h2>
				<p>Simple scans. Better conversations. More confident decisions.</p>
				<a className="explore-button" href="#contact">Explore Our Tech <span aria-hidden="true">&rarr;</span></a>
			</div>

			<div className="explore-grid">
				{exploreItems.slice(0, 2).map((item) => (
					<article className="explore-card" key={item.title}>
						<img src={item.image} alt={item.alt} />
						<h3>{item.title}</h3>
						<p>{item.title === '3D CBCT Imaging' ? 'A clearer view beneath the surface.' : 'A comfortable digital alternative to impressions.'}</p>
					</article>
				))}
			</div>
		</section>
	);
}

export default Explore;
