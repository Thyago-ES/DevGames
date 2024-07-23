import { Support } from "./components/Support";
import { Features } from "./components/Features";
import { Feedback } from "./components/Feedback";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Partners } from "./components/Partners";
import { ProductView } from "./components/ProductView";
import { PageContainer } from "./layouts/PageContainer";

function App() {
	return (
		<>
			<Header />

			<PageContainer>
				<Hero />
				<Partners /> {/* Posso inverter essa */}
				<ProductView /> {/* Com essa */}
				<Features />
				<Feedback />
				<Support />
			</PageContainer>

			<Footer />
		</>
	);
}

export default App;
