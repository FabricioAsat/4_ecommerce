import { createContext, useContext, useEffect, useState } from "react";
import useScreenSize from "../hooks/useScreenSize";

const mobileContext = createContext();

export function useTypeOfView() {
	return useContext(mobileContext);
}

const MobileProvider = ({ children }) => {
	const [typeOfView, setTypeOfView] = useState({
		mobile: false,
		tablet: false,
		desktop: false,
		highDefinition: false,
	});

	let { width } = useScreenSize();

	useEffect(() => {
		if (width < 768) {
			setTypeOfView({ mobile: true, tablet: false, desktop: false, highDefinition: false });
			return;
		}

		if (width < 1024) {
			setTypeOfView({ mobile: false, tablet: true, desktop: false, highDefinition: false });
			return;
		}

		if (width < 1536) {
			setTypeOfView({ mobile: false, tablet: false, desktop: true, highDefinition: false });
			return;
		}

		setTypeOfView({ mobile: false, tablet: false, desktop: false, highDefinition: true });
	}, [width]);

	return <mobileContext.Provider value={typeOfView}>{children}</mobileContext.Provider>;
};

export { MobileProvider };
export default mobileContext;
