import "./styles.css";
import partners from "../../assets/images/partners.png";

export function Partners() {
	return (
		<section className="partners">
			<img src={partners} alt="Parceiros da empresa" />
		</section>
	);
}
