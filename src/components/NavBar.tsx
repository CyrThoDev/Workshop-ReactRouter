import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/article/1">Article1</Link>
				<Link to="/article/2">Article2</Link>
			</nav>
		</>
	);
}
