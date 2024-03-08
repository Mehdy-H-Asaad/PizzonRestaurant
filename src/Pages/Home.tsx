import AboutPizzon from "../Sections/AboutPizzon";
import Booking from "../Sections/Booking";

import Chefs from "../Sections/Chefs";
import Footer from "../Sections/Footer";
import Header from "../Sections/Header";
import Landing from "../Sections/Landing";
import Menu from "../Sections/Menu";
import Reviews from "../Sections/Reviews";
import Skills from "../Sections/Skills";
import WhyUs from "../Sections/WhyUs";

function Home() {
	return (
		<>
			<Header />
			<Landing />
			<WhyUs />
			<Menu />
			<Booking />
			<Chefs />
			<Skills />
			<Reviews />
			<AboutPizzon />
			<Footer />
		</>
	);
}

export default Home;
