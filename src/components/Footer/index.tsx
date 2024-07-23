import "./styles.css";

export function Footer() {
	return (
		<footer className="footer">
			<section className="footer-content">
				<span className="logo">DevGames</span>
				<div className="links">
					<a href="#">&copy; DevGames 2024</a>
					<a href="#">Privacy policy</a>
					<a href="#">Cookies policy</a>
					<a href="#">Terms of use</a>
				</div>
			</section>
			<section className="footer-email">
				<span>Enter the closed beta</span>
				<div className="footer-insert">
					<input type="text" placeholder="Email Address" />
					<button className="btn cold-btn">Send</button>
				</div>
			</section>
		</footer>
	);
}
