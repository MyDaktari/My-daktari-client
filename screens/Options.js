import { Fontisto } from "@expo/vector-icons";
import {
	Button,
	Card,
	Layout,
	List,
	Text,
	useTheme,
} from "@ui-kitten/components";
import * as React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
export default (props) => {
	const options = [
		{
			name: "Report your symptoms",
			action: () => {
				props.navigation.navigate("ReportSymptoms");
			},
		},
		{
			name: "Find a doctor",
			action: () => {
				props.navigation.navigate("FindDoctor");
			},
		},
		{
			name: "Medical Lab",
			action: () => {
				props.navigation.navigate("MedicalLabs");
			},
		},
		{
			name: "Get a prescription",
			action: () => {
				props.navigation.navigate("Prescription_Doctors");
			},
		},
		{
			name: "Call an Ambulance",
			action: () => {
				props.navigation.navigate("Ambulance");
			},
		},
		{
			name: "Pharmacies",
			action: () => {
				props.navigation.navigate("Pharmacies");
			},
		},
	];
	const colortheme = useTheme();
	const RenderOptions = ({ item }) => {
		return (
			<Card style={styles.optionParent} onPress={item.action}>
				<Text style={styles.OptionTitle}>{item.name}</Text>
			</Card>
		);
	};

	return (
		<>
			<Layout style={styles.header}>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<Fontisto
						name="person"
						size={80}
						color={colortheme["color-primary-600"]}
					/>
					<View
						style={{
							marginLeft: 10,
						}}
					>
						<Text
							style={{
								fontWeight: "800",
								color: colortheme["color-primary-600"],
								fontSize: 17,
							}}
						>
							{global.user.name}
						</Text>
						<Text>Welcome, My Daktari got you.</Text>
					</View>
				</View>

				{/* <Ionicons name="md-notifications-sharp" size={30} color="gray" /> */}
			</Layout>
			<Text style={styles.title}>How can we help you today?</Text>
			<List
				data={options}
				renderItem={RenderOptions}
				numColumns={2}
				ListFooterComponent={() => {
					return (
						<Layout>
							{/* <Button status="basic" style={{ margin: 10 }}>
								My Activity
							</Button> */}
						</Layout>
					);
				}}
			/>
		</>
	);
};
const styles = StyleSheet.create({
	parent: {
		flex: 1,
	},
	title: {
		margin: 10,
		fontSize: 18,
		fontWeight: "bold",
	},
	optionParent: {
		width: Dimensions.get("window").width / 2 - 20,
		margin: 10,
	},
	optionTitle: {
		margin: 10,
	},
	header: {
		width: Dimensions.get("screen").width,
		height: 200,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		padding: 20,
		flexDirection: "row",
		paddingTop: StatusBar.currentHeight,
	},
});
