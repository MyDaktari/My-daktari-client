import { StatusBar } from "expo-status-bar";
import * as eva from "@eva-design/eva";
import {
	ApplicationProvider,
	Layout,
	Text,
	IconRegistry,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { default as themes } from "./theme.json";

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();
	// const evatheme = colorScheme == "dark" ? eva.dark : eva.light;
	const evatheme = eva.light;
	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<>
				<IconRegistry icons={EvaIconsPack} />
				<ApplicationProvider {...eva} theme={{ ...evatheme, ...themes }}>
					<Navigation colorScheme={"light"} />
					<StatusBar />
				</ApplicationProvider>
			</>
		);
	}
}
