import "./styles.css";

export function Header() {
	return (
		<header className="header">
			<span className="logo">DevGames</span>
			<div className="header-bts">
				<button className="btn simple-btn">Sign up</button>
				<button className="btn cold-btn">Log in</button>
			</div>
		</header>
	);
}
