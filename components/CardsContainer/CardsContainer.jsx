import React from "react";
import Loader from "../Loader";
import Card from "./Card";

const CardsContainer = ({ datos }) => {
	const { data, isPending, error } = datos;

	if (!!error) return <Error error={error} />;

	if (isPending)
		return (
			<div className="w-full flex justify-center">
				<Loader />
			</div>
		);

	return (
		<div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(208px,_1fr))] w-full justify-items-center">
			{data.map((product) => (
				<Card key={product.id} data={product} />
			))}
		</div>
	);
};

function Error({ error }) {
	return (
		<div className="flex flex-col text-center">
			<h2 className="subtitleSize">Error {error.status || "404"}</h2>
			<small className="descriptionSize">{error.statusText || "Fetch error"}</small>
		</div>
	);
}

export default CardsContainer;
