import cardsIcon from "../../assets/icons/cards-icon.png";
import coinIcon from "../../assets/icons/coin-icon.png";
import purseIcon from "../../assets/icons/purse-icon.png";
import { FeatureItem } from "./FeatureItem";

export function Features() {
	return (
		<section>
			<FeatureItem
				item={{
					icon: cardsIcon,
					title: "Customizable card",
					description:
						"Custom your own card for your exact incomes and expenses needs.",
				}}
			/>
			<FeatureItem
				item={{
					icon: coinIcon,
					title: "No payment fee",
					description:
						"Transfer your payment all over the world with no payment fee.",
				}}
			/>
			<FeatureItem
				item={{
					icon: purseIcon,
					title: "All in one place",
					description:
						"The right place to keep your credit and debit cards, boarding passes & more.",
				}}
			/>
		</section>
	);
}
