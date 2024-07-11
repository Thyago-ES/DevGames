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
		<div>
			<img src={item.icon} alt="Icone de Cartões" />
			<h4>{item.title}</h4>
			<p>{item.description}</p>
		</div>
	);
}
