import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { Contact } from "./pages/Contact";
import Layout from "./components/Layout";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="contact" element={<Contact />} />

				{/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
