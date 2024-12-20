import { useParams } from "react-router-dom";
export default function Article() {
	const articles = [
		{
			id: 1,
			title: "Article 1",
		},
		{
			id: 2,
			title: "Article 2",
		},
		{
			id: 3,
			title: "Article 3",
		},
	];
	console.log(useParams());
	// const articleId = useParams().id;

	const { id } = useParams();
	return (
		<>
			<h1>Voici l' article numéro {id}</h1>
			<p>
				{articles
					.filter((article) => article.id === Number(id))
					.map((article) => article.title)}
			</p>
		</>
	);
}
