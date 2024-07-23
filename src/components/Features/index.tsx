import "./styles.css";
import connection from "../../assets/icons/connection.png";
import quality from "../../assets/icons/8k.png";
import pin from "../../assets/icons/pin.png";
import { FeatureItem } from "./FeatureItem";

export function Features() {
	return (
		<section className="features">
			<FeatureItem
				item={{
					icon: connection,
					title: "Fast connection",
					description:
						"A fast connection so you don't waste time on loading screens.",
				}}
			/>
			<FeatureItem
				item={{
					icon: quality,
					title: "High Quality",
					description: "Play with up to 8k quality. (8k support required).",
				}}
			/>
			<FeatureItem
				item={{
					icon: pin,
					title: "All in one place",
					description:
						"Games from different platforms such as Xbox, Playstation, Nintendo and more.",
				}}
			/>
		</section>
	);
}
