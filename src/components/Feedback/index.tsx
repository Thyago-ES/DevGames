import userImage from "../../assets/images/user-feedback.png";

import { Stars } from "./Stars";
export function Feedback() {
	return (
		<section>
			<div>
				<p>
					“Wallet is a great product! All of my most important information is
					there - credit cards, transit cards, boarding passes, tickets, and
					more. And I don't need to worry because it's all in one place!
					thanks!”
				</p>
				<div>
					<img src={userImage} alt="Imagem do usuário" />
					<div>
						<span>Johnny Owens</span>
						<Stars />
					</div>
				</div>
			</div>
		</section>
	);
}
