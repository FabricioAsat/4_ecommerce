import Link from "next/link";
import Image from "next/image";
import { useIsDark } from "../../context/darkContext";

const Card = ({ data }) => {
	const [isDark] = useIsDark();

	return (
		<Link href={`products/${data.id}`}>
			<a
				className={`flex flex-col justify-center gap-y-3 items-center w-52 h-72 rounded-md p-2 hover:scale-105 hover:brightness-105 transition-transform duration-300 ${
					isDark ? "bg-dark-bg-2/80" : "bg-light-bg-2/80"
				}`}>
				<Image
					src={data.image}
					alt={`${data.title}`}
					width="208px"
					height="200px"
					className="object-contain rounded-2xl"
				/>
				<p className="descriptionSize text-right w-full font-bold">${data.price}</p>
				<h4 className="subtitleSize font-bold">Ver información</h4>
			</a>
		</Link>
	);
};

export default Card;
