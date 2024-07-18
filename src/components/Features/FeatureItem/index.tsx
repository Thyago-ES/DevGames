import "./styles.css";

type Item = {
	icon: string;
	title: string;
	description: string;
};

type Props = {
	item: Item;
};

export function FeatureItem({ item }: Props) {
	return (
		<section className="feature-item">
			<figure className="feature-img">
				<img src={item.icon} alt="Icone de Cartões" />
			</figure>
			<h4>{item.title}</h4>
			<p className="subtitle">{item.description}</p>
		</section>
	);
}
