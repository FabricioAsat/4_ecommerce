import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Loader from "../../components/Loader";
import notFound from "../../public/notFound.webp";

import { useIsDark } from "../../context/darkContext";
import { useStoreContext } from "../../context/logicStoreContext";
import { useFetch } from "../../hooks/useFetch";

import { FiChevronsLeft } from "react-icons/fi";
import { useState } from "react";

const ProductItem = () => {
	// * Context
	const propsAboutCart = useStoreContext();

	// * States
	const [isDark] = useIsDark();

	// * id del producto
	const [id, setId] = useState(useRouter().query.id || "");

	// * Hago un fetch a ese id
	const { data, isPending, error } = useFetch(process.env.BASE_URL + id);

	if (!!error) return <Error error={error} />;

	if (isPending)
		return (
			<div className="w-full flex justify-center pt-6">
				<Loader />
			</div>
		);

	return (
		<>
			{id.length !== 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mx-auto py-2 px-8 md:w-10/12 xl:w-9/12 h-full max-w-5xl">
					<Head>
						<title>Product {data.id}</title>
					</Head>
					<Image
						src={data?.image || notFound}
						alt="Image"
						width={400}
						height={400}
						className="object-contain"
					/>
					<div className="flex flex-col items-center justify-center">
						<h2 className="titleSize pb-2">{data.title}</h2>
						<p className="descriptionSize pb-2 text-center">{data?.description}</p>
					</div>

					<aside className="flex gap-y-3 justify-between items-center md:col-span-2 py-4">
						<span>
							<small className="descriptionSize font-bold">Precio: {data?.price} U$D</small>
							<p className="descriptionSize">Categoría: {data?.category}</p>
						</span>

						<button
							className={`${isDark ? "darkButton" : "ligthButton"}`}
							onClick={() => {
								propsAboutCart.addItemToCart(data);
							}}>
							Al carrito
						</button>
					</aside>

					<Link href="/products">
						<a
							className={`flex z-10 items-center justify-center absolute subtitleSize font-bold -ml-6 p-2 rounded-xl border-2 ${
								isDark ? "bg-dark-bg/75 border-dark-bg-2" : "bg-light-bg/75 border-light-bg-2"
							}`}>
							<FiChevronsLeft />
							Atras
						</a>
					</Link>
				</div>
			) : (
				<div className="flex flex-col gap-10 justify-center mx-auto py-2 px-8 md:w-10/12 xl:w-9/12 h-full max-w-5xl">
					<Head>
						<title>Error Page</title>
					</Head>
					<Error />
					<Link href="/products">
						<a
							className={`flex z-10 items-center justify-center subtitleSize font-bold p-2 rounded-xl border-2 w-32 mx-auto ${
								isDark ? "bg-dark-bg/75 border-dark-bg-2" : "bg-light-bg/75 border-light-bg-2"
							}`}>
							<FiChevronsLeft />
							Atras
						</a>
					</Link>
				</div>
			)}
		</>
	);
};

function Error({ error }) {
	return (
		<div className="flex flex-col text-center">
			<h2 className="subtitleSize">Error {error?.status || "404"}</h2>
			<small className="descriptionSize">{error?.statusText || "Fetch error"}</small>
		</div>
	);
}

export default ProductItem;
