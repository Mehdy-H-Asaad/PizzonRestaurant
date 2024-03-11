import { Suspense, lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Spinner } from "./GlobalComponents/GlobalComponents";

// CODE SPLITTING IMPLEMENTATION
const Home = lazy(() => import("./Pages/Home"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const MenuPage = lazy(() => import("./Pages/MenuPage"));
const Contact = lazy(() => import("./Pages/Contact"));
const ItemInfo = lazy(() => import("./Sections/ItemInfo"));

function App() {
	return (
		<HashRouter>
			<Suspense fallback={<Spinner></Spinner>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/menu" element={<MenuPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/item/:cuisine/:itemId" element={<ItemInfo />} />
				</Routes>
			</Suspense>
		</HashRouter>
	);
}

export default App;
