import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import App from "./App";

const articles = [
	{
		id: 1,
		title: "Les bases de React",
		content:
			"Découvrez les fondamentaux de React, une bibliothèque JavaScript puissante pour créer des interfaces utilisateur interactives.",
		author: "Aline Dupont",
		image: "react-basics.jpg",
	},
	{
		id: 2,
		title: "Introduction à l'algorithmique",
		content:
			"Plongez dans le monde fascinant de l'algorithmique avec des concepts simples et des exemples pratiques.",
		author: "Jean Martin",
		image: "algorithm-intro.jpg",
	},
	{
		id: 3,
		title: "Optimiser votre site avec Next.js",
		content:
			"Apprenez à tirer parti des fonctionnalités de Next.js pour améliorer les performances et le SEO de vos sites.",
		author: "Marie Laurent",
		image: "nextjs-optimization.jpg",
	},
	{
		id: 4,
		title: "Guide complet sur TypeScript",
		content:
			"Un guide détaillé pour commencer avec TypeScript et renforcer la robustesse de vos projets JavaScript.",
		author: "Jeanne Marchand",
		image: "typescript-guide.jpg",
	},
];

// const displayArray = () => {
// 	return ["salut", "coucou"];
// };

const getArticleById = (params) => {
	const { id } = params;
	return articles.find((article) => article.id === Number(id));
};
const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/articles",
				element: <Articles />,
				loader: () => articles,
			},
			{
				path: "/article/:id",
				element: <Article />,
				loader: ({ params }) => getArticleById(params),
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
