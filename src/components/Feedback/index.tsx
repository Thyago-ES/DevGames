import "./styles.css";
import userImage from "../../assets/images/user-feedback.png";

import { Stars } from "./Stars";
export function Feedback() {
	return (
		<section className="feedback">
			<section className="feedback-content">
				<p>
					“DevGames exceeded all my expectations as an on-demand gaming
					platform. It is a complete, high-quality solution for those looking
					for an accessible, varied and high-performance gaming experience. I
					highly recommend it to any game lover!”
				</p>
				<div className="user-feedback">
					<figure>
						<img src={userImage} alt="Imagem do usuário" />
					</figure>
					<div className="user-details">
						<span>Johnny Owens</span>
						<Stars />
					</div>
				</div>
			</section>
		</section>
	);
}
