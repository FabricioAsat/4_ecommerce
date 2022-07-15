import { createContext, useContext, useState } from "react";

const logicStoreContext = createContext({
	isOpen: false,
	items: [],
	getTotalPrice: () => {},
	openCart: () => {},
	closeCart: () => {},
	addItemToCart: () => {},
	getNumberOfItems: () => {},
	removeOne: () => {},
	removeAll: () => {},
});

export function LogicStoreProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const [items, setItems] = useState([]);

	function handleOpenCart() {
		setIsOpen(true);
	}
	function handleCloseCart() {
		setIsOpen(false);
	}

	function removeOneItem(itemToRemove) {
		const temp = [...items];

		if (itemToRemove.cant === 1) {
			setItems(items.filter((item) => item.id !== itemToRemove.id));
			return;
		} else {
			const i = temp.find((i) => i.id === itemToRemove.id);
			i.cant--;
		}
		setItems(temp);
	}

	function removeAllItems(id) {
		setItems(items.filter((item) => item.id !== id));
	}

	function handleAddItemToCart(item) {
		const temp = [...items];
		const found = temp.find((i) => i.id == item.id);

		if (found) {
			found.cant++;
		} else {
			item.cant = 1;
			temp.push(item);
		}

		setItems(temp);
	}

	function handleNumberOfItems() {
		const total = items.reduce((acumulador, item) => acumulador + item.cant, 0);

		return total;
	}

	function getTotalPrice() {
		let price = 0;

		items.forEach((item) => {
			price += item.price * item.cant;
		});

		return price;
	}

	return (
		<logicStoreContext.Provider
			value={{
				isOpen,
				items,
				getTotalPrice,
				openCart: handleOpenCart,
				closeCart: handleCloseCart,
				addItemToCart: handleAddItemToCart,
				getNumberOfItems: handleNumberOfItems,
				removeOne: removeOneItem,
				removeAll: removeAllItems,
			}}>
			{children}
		</logicStoreContext.Provider>
	);
}

export function useStoreContext() {
	return useContext(logicStoreContext);
}
