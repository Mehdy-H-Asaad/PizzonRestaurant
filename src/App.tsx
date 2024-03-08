import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import MenuPage from "./Pages/MenuPage";
import Contact from "./Pages/Contact";
import ItemInfo from "./Sections/ItemInfo";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/menu" element={<MenuPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/item/:cuisine/:itemId" element={<ItemInfo />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
