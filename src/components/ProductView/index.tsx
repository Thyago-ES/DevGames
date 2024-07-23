import "./styles.css";
import productView from "../../assets/images/product-view.png";

export function ProductView() {
	return (
		<section className="product-view">
			<figure className="product-img">
				<img src={productView} alt="Produto" />
			</figure>
		</section>
	);
}
