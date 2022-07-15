import Image from "next/image";
import { useIsDark } from "../../context/darkContext";

import { AiFillCloseCircle } from "react-icons/ai";
import { useStoreContext } from "../../context/logicStoreContext";

const CartModal = () => {
	const [isDark] = useIsDark();

	const propsAboutCart = useStoreContext();

	return (
		<>
			{propsAboutCart.isOpen && (
				<div
					className={`fixed top-14 right-0 w-full h-full md:max-w-md md:top-16 md:border-l-2 overflow-y-auto ${
						isDark ? "bg-dark-bg/90 border-gray-600" : "bg-light-bg/90 border-gray-900"
					}`}>
					<div className="absolute mt-2 flex justify-between items-center w-full px-6">
						<small className="subtitleSize">
							Total: {propsAboutCart.getTotalPrice().toFixed(2)} U$D
						</small>

						<button className="right-2" onClick={propsAboutCart.closeCart}>
							<AiFillCloseCircle size="30px" />
						</button>
					</div>

					{propsAboutCart.getNumberOfItems() !== 0 ? (
						<div className="pt-16 text-center flex flex-col gap-6">
							{propsAboutCart.items.map((item) => (
								<div key={item.id} className="flex gap-2 w-11/12 max-w-md mx-auto">
									<Image
										src={item.image}
										alt="Product"
										width={80}
										height={80}
										className="object-contain"
									/>

									<span className="flex flex-col gap-2 text-start">
										<h2 className="descriptionSize font-bold">{item.title.slice(0, 50)}...</h2>
										<p className="">
											Unidades: <b>{item.cant}</b>
										</p>
										<aside className="flex justify-center gap-4">
											<button
												onClick={() => propsAboutCart.removeOne(item)}
												className={`descriptionSize ${isDark ? "darkButton" : "ligthButton"}`}>
												Quitar unidad
											</button>
											<button
												onClick={() => propsAboutCart.removeAll(item.id)}
												className={`descriptionSize ${isDark ? "darkButton" : "ligthButton"}`}>
												Quitar Todo
											</button>
										</aside>
									</span>
								</div>
							))}
						</div>
					) : (
						<Empty />
					)}
				</div>
			)}
		</>
	);
};

function Empty() {
	return (
		<div className="pt-14 text-center">
			<h2 className="subtitleSize">No hay productos en el Carrito</h2>
		</div>
	);
}

export default CartModal;
