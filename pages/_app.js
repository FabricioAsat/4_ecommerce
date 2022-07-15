import Layout from "../components/Layout";
import { DarkProvider } from "../context/darkContext";
import { MobileProvider } from "../context/mobileContext";
import { LogicStoreProvider } from "../context/logicStoreContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<LogicStoreProvider>
			<MobileProvider>
				<DarkProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</DarkProvider>
			</MobileProvider>
		</LogicStoreProvider>
	);
}

export default MyApp;
