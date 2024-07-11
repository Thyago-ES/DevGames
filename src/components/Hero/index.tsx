import heroImg from "../../assets/images/hero-img.png";

export function Hero() {
	return (
		<main>
			<section>
				<h1>Very Fun Games & Beyond</h1>
				<p>
					This is a simple Landing Page developed with React and TypeScript.
				</p>
				<button>Get started</button>
			</section>
			<img src={heroImg} alt="Imagem do Hero" />
		</main>
	);
}
