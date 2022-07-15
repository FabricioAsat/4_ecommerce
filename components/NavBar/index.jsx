import { useIsDark } from "../../context/darkContext";
import { useTypeOfView } from "../../context/mobileContext";

import { FaSun, FaMoon } from "react-icons/fa";

import Logo from "./Logo";
import Cart from "./Cart";

const NavBar = () => {
	const typeOfView = useTypeOfView();
	const [isDark, setIsDark] = useIsDark();

	if (typeOfView.mobile) return <MobileNavBar isDark={isDark} setIsDark={setIsDark} />;

	if (typeOfView.tablet) return <TabletNavBar isDark={isDark} setIsDark={setIsDark} />;

	return <DesktopNavBar isDark={isDark} setIsDark={setIsDark} />;
};

// TODO - Mobile NavBar
function MobileNavBar({ isDark, setIsDark }) {
	return (
		<nav
			className={`fixed w-full top-0 left-0 z-20 flex justify-between px-5 items-center h-14 ${
				isDark ? "bg-dark-bg-2 text-dark-text" : "bg-light-bg-2 text-light-text"
			}`}>
			<Logo isDark={isDark} />

			<div className="flex items-center gap-x-5">
				{isDark ? (
					<FaSun size="28px" className="p-1" onClick={() => setIsDark(false)} />
				) : (
					<FaMoon size="28px" className="p-1" onClick={() => setIsDark(true)} />
				)}

				<Cart typeOfView="mobile" />
			</div>
		</nav>
	);
}

// TODO - Tablet NavBar
function TabletNavBar({ isDark, setIsDark }) {
	return (
		<nav
			className={`fixed w-full top-0 left-0 z-20 flex justify-between px-10 items-center h-16 ${
				isDark ? "bg-dark-bg-2 text-dark-text" : "bg-light-bg-2 text-light-text"
			}`}>
			<Logo isDark={isDark} />

			<div className="flex items-center gap-x-10">
				{isDark ? (
					<FaSun size="38px" className="p-2" onClick={() => setIsDark(false)} />
				) : (
					<FaMoon size="38px" className="p-2" onClick={() => setIsDark(true)} />
				)}
				<Cart typeOfView="tablet" />
			</div>
		</nav>
	);
}

// TODO - Desktop NavBar
function DesktopNavBar({ isDark, setIsDark }) {
	return (
		<nav
			className={`fixed z-20 w-full top-0 left-0 px-10 h-16 ${
				isDark ? "bg-dark-bg-2 text-dark-text" : "bg-light-bg-2 text-light-text"
			}`}>
			<div className="flex w-full h-full max-w-3xl mx-auto justify-between items-center">
				<Logo isDark={isDark} />

				<div className="flex items-center gap-x-10">
					{isDark ? (
						<FaSun size="40px" className="p-2 cursor-pointer" onClick={() => setIsDark(false)} />
					) : (
						<FaMoon size="40px" className="p-2 cursor-pointer" onClick={() => setIsDark(true)} />
					)}
					<Cart typeOfView="desktop" />
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
