import { useLoaderData, Link } from "react-router-dom";

export default function Articles() {
	console.log(useLoaderData());

	const articles = useLoaderData();
	console.log("Mes articles", articles);
	return (
		<>
			<h1>Liste des articles</h1>
			{articles.map((article) => (
				<Link to={`/article/${article.id}`} key={article.id}>
					{article.title}
				</Link>
			))}
		</>
	);
}
