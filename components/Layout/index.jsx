import React from "react";
import { useIsDark } from "../../context/darkContext";
import NavBar from "../NavBar";
import CartModal from "./CartModal";

const Layout = ({ children }) => {
	const [isDark] = useIsDark();

	return (
		<div
			className={`min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4rem)] h-full ${
				isDark ? "bg-dark-bg text-dark-text" : "bg-light-bg text-light-text"
			}`}>
			<NavBar />

			<div className="mt-14 md:mt-16">{children}</div>
			<CartModal />
		</div>
	);
};

export default Layout;
