import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
function App() {
	return (
		<>
			<NavBar />
			{/*fenêtre sur les autres pages ou composants */}
			<Outlet />

			<Footer />
		</>
	);
}

export default App;
