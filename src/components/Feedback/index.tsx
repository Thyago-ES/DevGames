import "./styles.css";
import userImage from "../../assets/images/user-feedback.png";

import { Stars } from "./Stars";
export function Feedback() {
	return (
		<section className="feedback">
			<section className="feedback-content">
				<p>
					“Wallet is a great product! All of my most important information is
					there - credit cards, transit cards, boarding passes, tickets, and
					more. And I don't need to worry because it's all in one place!
					thanks!”
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
