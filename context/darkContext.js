import { createContext, useContext, useState } from "react";

const darkContext = createContext();

export function useIsDark() {
	return useContext(darkContext);
}

const DarkProvider = ({ children }) => {
	const [dark, setDark] = useState(false);
	const data = [dark, setDark];

	return <darkContext.Provider value={data}>{children}</darkContext.Provider>;
};

export { DarkProvider };
export default darkContext;
