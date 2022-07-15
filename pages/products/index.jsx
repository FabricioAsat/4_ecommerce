import { useState } from "react";
import Head from "next/head";
import { useIsDark } from "../../context/darkContext";
import { useFetch } from "../../hooks/useFetch";
import CardsContainer from "../../components/CardsContainer/CardsContainer";

const Products = () => {
	// * States
	const [url, setUrl] = useState(process.env.BASE_URL);
	const [category, setCategory] = useState("Todos");

	// * Hooks
	const [isDark] = useIsDark();

	// * Fetch
	const datos = useFetch(url);

	return (
		<div className="flex flex-col gap-y-8 items-center mx-auto py-4 md:w-10/12 xl:w-9/12 h-full max-w-5xl">
			<Head>
				<title>Products | {category}</title>
			</Head>

			{/* Button - Externo a los productos */}
			<div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4">
				<Button
					value={"Todos"}
					isDark={isDark}
					category=""
					setUrl={setUrl}
					setCategory={setCategory}
				/>
				<Button
					value={"Hombre"}
					isDark={isDark}
					category="men's clothing"
					setUrl={setUrl}
					setCategory={setCategory}
				/>
				<Button
					value={"Mujer"}
					isDark={isDark}
					category="women's clothing"
					setUrl={setUrl}
					setCategory={setCategory}
				/>
				<Button
					value={"Joyería"}
					isDark={isDark}
					category="jewelery"
					setUrl={setUrl}
					setCategory={setCategory}
				/>
				<Button
					value={"Electrónica"}
					isDark={isDark}
					category="electronics"
					setUrl={setUrl}
					setCategory={setCategory}
				/>
			</div>

			<CardsContainer datos={datos} />
		</div>
	);
};

function Button({ isDark, value, category, setUrl, setCategory }) {
	function changeUrl(e, category) {
		if (category.length === 0) {
			setUrl(process.env.BASE_URL);
			setCategory(e.target.textContent);
			return;
		}
		setUrl(process.env.BASE_URL + `category/${category}`);
		setCategory(e.target.textContent);
	}

	return (
		<button
			className={`${isDark ? "darkButton" : "ligthButton"}`}
			onClick={(e) => changeUrl(e, category)}>
			{value}
		</button>
	);
}

export default Products;
