import {
	ScrollView,
	StatusBar,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import { Layout, List, Text, useTheme } from "@ui-kitten/components";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as React from "react";
export default (props) => {
	const symptoms = props.route.params;
	const [dets, setdets] = React.useState({});

	React.useEffect(() => {
		FixSymptoms();
	}, []);

	const FixSymptoms = () => {
		let description = "";
		symptoms.symptoms.forEach((element) => {
			description += "\n" + element.description;
		});
		setdets({ speciality: symptoms.speciality, description: description });
	};

	const colortheme = useTheme();
	const RenderSymp = ({ item }) => {
		return (
			<View
				style={{
					marginTop: 20,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<View
							style={{
								width: 20,
								height: 20,
								borderRadius: 30,
								backgroundColor: "black",
							}}
						></View>

						<Text
							style={{
								color: colortheme["color-primary-500"],
								fontWeight: "700",
								marginLeft: 20,
								fontSize: 18,
							}}
						>
							{item.title}
						</Text>
					</View>
				</View>

				<Text
					style={{
						fontSize: 13,
						marginLeft: 30,
						marginRight: 30,
					}}
				>
					{item.description}
				</Text>
			</View>
		);
	};

	return (
		<Layout style={styles.container}>
			<Text style={styles.title}>My Symptoms</Text>

			<List
				style={{ backgroundColor: "transparent", marginTop: 10 }}
				renderItem={RenderSymp}
				data={symptoms.symptoms}
				ListFooterComponent={() => (
					<>
						<TouchableOpacity
							style={{
								backgroundColor: colortheme["color-primary-600"],
								width: "100%",
								height: 50,
								marginTop: 100,
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-evenly",
								paddingLeft: 90,
								paddingRight: 90,
							}}
							onPress={() =>
								props.navigation.navigate("Doctors", { symptom: dets })
							}
						>
							<Text
								style={{
									fontWeight: "700",
									color: "white",
									fontSize: 18,
								}}
							>
								Proceed
							</Text>
							<AntDesign name="arrowright" size={24} color="white" />
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => props.navigation.goBack()}
							style={{
								backgroundColor: colortheme["color-info-600"],
								width: "100%",
								height: 50,
								marginTop: 50,
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-evenly",
								paddingLeft: 90,
								paddingRight: 90,
							}}
						>
							<AntDesign name="arrowleft" size={24} color="white" />
							<Text
								style={{
									fontWeight: "700",
									color: "white",
									fontSize: 18,
								}}
							>
								Add more
							</Text>
						</TouchableOpacity>
					</>
				)}
			/>
		</Layout>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingTop: StatusBar.currentHeight,
		flex: 1,
	},
	title: {
		fontSize: 20,
		fontWeight: "700",
		color: "rgba(123,125,141,255)",
		textAlign: "center",
	},
});
