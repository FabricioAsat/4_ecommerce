import React from "react";

import { useStoreContext } from "../../context/logicStoreContext";

import { FaShoppingCart } from "react-icons/fa";

const Cart = ({ typeOfView }) => {
	const { openCart, getNumberOfItems } = useStoreContext();

	if (typeOfView === "mobile")
		return (
			<button className="flex items-center" onClick={openCart}>
				<FaShoppingCart size="30px" className="p-1" />
				<h2 className="font-bold"> {getNumberOfItems()}</h2>
			</button>
		);

	if (typeOfView === "tablet")
		return (
			<button className="flex items-center" onClick={openCart}>
				<FaShoppingCart size="40px" className="p-2" />
				<h2 className="font-bold">Cart {getNumberOfItems()}</h2>
			</button>
		);

	if (typeOfView === "desktop")
		return (
			<button className="flex items-center" onClick={openCart}>
				<FaShoppingCart size="42px" className="p-2" />
				<h2 className="font-bold text-lg">Cart {getNumberOfItems()}</h2>
			</button>
		);
};

export default Cart;
