import actionImage from "../../assets/images/action-img.png";

export function Action() {
	return (
		<section>
			<div>
				<h2>Questions? Let's talk</h2>
				<p>
					Contact us through our 24/7 live chat. We're always happy to help!
				</p>
				<button>Get started</button>
			</div>
			<img src={actionImage} alt="Imagem do action" />
		</section>
	);
}
