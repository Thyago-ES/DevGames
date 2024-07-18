import "./styles.css";
import actionImage from "../../assets/images/action-img.png";

export function Action() {
	return (
		<section className="action">
			<header className="action-container">
				<section className="action-content">
					<h2 className="title">Questions? Let's talk</h2>
					<p className="subtitle">
						Contact us through our 24/7 live chat. We're always happy to help!
					</p>
				</section>
				<button className="btn hot-btn">Get started</button>
			</header>
			<figure className="action-img">
				<img src={actionImage} alt="Imagem do action" />
			</figure>
		</section>
	);
}
