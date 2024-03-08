import { Link } from "react-router-dom";
import { PagePath } from "../GlobalComponents/GlobalComponents";
import Header from "../Sections/Header";
import Menu from "../Sections/Menu";
import Reviews from "../Sections/Reviews";
import Booking from "../Sections/Booking";
import Footer from "../Sections/Footer";
import Skills from "../Sections/Skills";
import AboutPizzon from "../Sections/AboutPizzon";

function MenuPage() {
	return (
		<>
			<Header />
			<PagePath>
				<h3>Menu</h3>
				<h6>
					<Link className="home-link" to={"/"}>
						Home
					</Link>{" "}
					/ Menu
				</h6>
			</PagePath>
			<Skills />
			<Menu />
			<Booking />
			<Reviews />
			<AboutPizzon />
			<Footer />
		</>
	);
}

export default MenuPage;
