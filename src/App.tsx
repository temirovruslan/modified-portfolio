import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Servises from "./pages/Servises";
import Work from "./pages/Work";
import Testimonials from "./pages/Testimonials";

function App() {
	return (
		<div className="min-h-screen w-full bg-black font-serif">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/services" element={<Servises />} />
				<Route path="/work" element={<Work />} />
				<Route path="/testimonials" element={<Testimonials />} />
			</Routes>
		</div>
	);
}

export default App;
