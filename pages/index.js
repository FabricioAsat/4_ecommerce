import Head from "next/head";
import Link from "next/link";
export default function Home() {
	return (
		<div className={`w-full h-full`}>
			<Head>
				<title>Commerce | Home</title>
			</Head>

			<div className="flex flex-col gap-y-4 items-center mx-auto py-4 md:w-10/12 xl:w-9/12 px-4 h-full max-w-5xl">
				<h1 className="titleSize">¿Qué es esto?</h1>
				<p className="descriptionSize">
					Es un e-commerce básico, que utiliza una api para obtener resultados sobre los productos.
				</p>

				<Link href="/products">
					<a className="descriptionSize font-bold underline decoration-2 underline-offset-2 text-right w-full px-4">
						Ver Productos
					</a>
				</Link>
			</div>
		</div>
	);
}
