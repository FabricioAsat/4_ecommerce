import Link from "next/link";
import { BsFillTriangleFill } from "react-icons/bs";

const Logo = () => {
	return (
		<Link href="/">
			<a className={`flex justify-center items-center gap-2 logoSize`}>
				<BsFillTriangleFill />
				<small className="italic font-bold">Commerce</small>
			</a>
		</Link>
	);
};

export default Logo;
