import "./styles.css";
import heroImg from "../../assets/images/hero-img.png";

export function Hero() {
	return (
		<section className="hero">
			<header className="hero-container">
				<section className="hero-content">
					<h1 className="title">Incredible Games on Demand</h1>
					<p className="subtitle">
						This is a simple Landing Page developed with React and TypeScript.
					</p>
				</section>
				<button className="btn hot-btn">Get started</button>
			</header>
			<figure className="hero-img">
				<img src={heroImg} alt="Imagem do Hero" />
			</figure>
		</section>
	);
}
