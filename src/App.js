import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Students from "./Files/Student";
import Home from "./Components/Home";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Navigation />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/students/:name" exact element={<Students />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
