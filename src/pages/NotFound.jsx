import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<article className="text-left prose prose-xl mx-auto">
			<h1>Page not found</h1>
			<p>
				<Link to="/">Go home</Link>
			</p>
		</article>
	);
}
