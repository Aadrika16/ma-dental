import './index.css';

const specialists = [
	{
		image: '/Assets/specialists_images/doctor-1-compressed.webp',
		experience: '14 Yrs Exp',
		name: 'Dr. T. BHANU PRAKASH REDDY',
		qualification: 'M.D.S. • COSMETIC DENTAL SURGEON',
		description: 'Specializing in complex full-mouth rehabilitation and advanced implant procedures.',
		category: 'Dental Surgery'
	},
	{
		image: '/Assets/specialists_images/doctor-2-compressed.webp',
		experience: '8 Yrs Exp',
		name: 'Dr. G. RISHITHA REDDY',
		qualification: 'M.D.S. • PERIODONTIST & IMPLANTITIS',
		description: 'Expert in clear aligner therapy and interceptive orthodontics for teens and adults.',
		category: 'Periodontist'
	},
	{
		image: '/Assets/specialists_images/doctor-3-compressed.webp',
		experience: '9 Yrs Exp',
		name: 'Dr. V. PRASANTH REDDY',
		qualification: 'M.D.S. • ENDODONTIST',
		description: 'Dedicated to microscopic root canal therapy and saving damaged natural dentition.',
		category: 'Endodontics'
	},
	{
		image: '/Assets/specialists_images/doctor-4-compressed.webp',
		experience: '8 Yrs Exp',
		name: 'Dr. Y. SHANTI PRIYA',
		qualification: 'B.D.S. • COSMETIC DENTAL SURGEON',
		description: 'Making dental visits fun and anxiety-free for younger smiles while building healthy habits.',
		category: 'Dental Surgeon'
	}
];

function Specialists() {
	return (
		<section className="specialists-section" id="doctors">
			<div className="specialists-heading">
				<span className="specialists-eyebrow">EXPERT TEAM</span>
				<h2>Meet Our Specialists</h2>
				<p>Experienced specialists, one coordinated team.</p>
			</div>

			<div className="specialists-grid">
				{specialists.slice(0, 3).map((specialist) => (
					<article className="specialist-card" key={specialist.name}>
						<div className="specialist-image-wrap">
							<img src={specialist.image} alt={specialist.name} />
							<span className="experience-badge">{specialist.experience}</span>
						</div>
						<div className="specialist-content">
							<h3>{specialist.name}</h3>
							<strong>{specialist.qualification}</strong>
							<p>{specialist.description}</p>
							<div className="specialist-footer">
								<span>{specialist.category}</span>
								<a href="#contact">Book Consult <span aria-hidden="true">&rarr;</span></a>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export default Specialists;
