import "./styles.css";
import partners from "../../assets/images/partners.png";
import partnersM from "../../assets/images/partners-mobile.png";

export function Partners() {
	return (
		<section className="partners">
			<img src={partners} alt="Parceiros da empresa" className="pc" />
			<img src={partnersM} alt="Parceiros da empresa" className="mobile" />
		</section>
	);
}
