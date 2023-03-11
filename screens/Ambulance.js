import { Card, Layout, List, Text, useTheme } from "@ui-kitten/components";
import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import * as Clipboard from "expo-clipboard";
import { FontAwesome } from "@expo/vector-icons";
import useColorScheme from "../hooks/useColorScheme";
export default (props) => {
	const dets = [
		{
			name: "Nairobi Hospital",
			contact: "0712345678",
			location: "Waiyaki way building 4 fl 3",
		},
		{
			name: "Kenyatta Hospital",
			contact: "0712345678",
			location: "Mama ngina street building 4 fl 3",
		},
		{
			name: "Mama Lucy Hospital",
			contact: "0712345678",
			location: "Moi ave building 4 fl 3",
		},
		{
			name: "Nairobi west Hospital",
			contact: "0712345678",
			location: "Tom mboya building 4 fl 3",
		},
	];
	const colorscheme = useColorScheme();
	const colortheme = useTheme();
	const RenderAmbulance = ({ item }) => {
		return (
			<Card style={styles.card}>
				<Text category="h6" style={{ margin: 5 }}>
					{item.name}
				</Text>
				<Text style={{ margin: 5 }}>{item.location}</Text>
				<View style={styles.row}>
					<Text appearance="hint" style={{ margin: 5 }}>
						{item.contact}
					</Text>
					<FontAwesome
						name={"clipboard"}
						size={25}
						color={colortheme["color-primary-500"]}
						onPress={copyToClipboard.bind(this, item.contact, item.name)}
					/>
				</View>
			</Card>
		);
	};

	const copyToClipboard = (text, name) => {
		Clipboard.setStringAsync(text).then(() => {
			alert("phone number of " + name + " copied to clipboard");
		});
	};

	return (
		<Layout style={styles.parent}>
			<List data={dets} renderItem={RenderAmbulance} />
		</Layout>
	);
};
const styles = StyleSheet.create({
	parent: {
		flex: 1,
	},
	card: {
		margin: 10,
		width: Dimensions.get("window").width - 20,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
});
