import { useLoaderData, useParams } from "react-router-dom";
export default function Article() {
	// const { id } = useLoaderData(); // Hier on avait const {id} = useParams()

	const article = useLoaderData();
	console.log(article);
	return (
		<>
			<h1>Voici l' article numéro </h1>
			{/*Ici je vais afficher les détails de mon article*/}
			<p>{article.title}</p>
		</>
	);
}
