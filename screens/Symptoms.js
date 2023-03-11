import {
	Dimensions,
	Image,
	ScrollView,
	StatusBar,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import Profile from "../assets/images/profile.jpeg";
import { Button, Layout, List, Text, useTheme } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { default as sym } from "../symptoms.json";

export default (props) => {
	const [Data, setdata] = useState(sym);
	const [selected, setSelected] = useState([]);
	const [loading, setloading] = useState(false);
	const [speciality, setspeciality] = useState("");
	const colortheme = useTheme();
	let control = sym;

	useEffect(() => {
		setdata(control);
	}, [Data]);

	const renderMain = ({ item, index }) => {
		return (
			<View>
				<Text
					style={{
						margin: 20,
						fontWeight: "700",
					}}
				>
					{item.name}
				</Text>
				<List
					listKey={index}
					data={item.data}
					renderItem={renderChild.bind(this, index)}
					numColumns={2}
				/>
			</View>
		);
	};
	const renderChild = (i, { item, index }) => {
		return (
			<TouchableOpacity
				style={styles.symptom}
				key={item.id}
				onPress={() => {
					let indexforitem = index;
					let dr = [];

					Data.forEach((element, index) => {
						if (index == i) {
							control[index].data[indexforitem].checked =
								!control[index].data[indexforitem].checked;
							setspeciality(element.name);
							element.data.forEach((dt, index) => {
								if (dt.checked) {
									dr.push(dt);
								}
							});
						} else {
							let indexforelement = index;
							element.data.forEach((dt, index) => {
								control[indexforelement].data[index].checked = false;
							});
						}
					});
					//setloading(true);
					setdata([]);
					//Refresh();
					setSelected(dr);
				}}
			>
				{item.checked == true ? (
					<AntDesign
						name="checkcircle"
						size={24}
						color={colortheme["color-info-500"]}
						style={styles.circle}
					/>
				) : null}

				<Text
					style={{
						color: colortheme["color-info-600"],
						marginBottom: 5,
						fontWeight: "700",
					}}
				>
					{item.title}
				</Text>
				<Text
					style={{
						fontSize: 13,
					}}
				>
					{item.description}
				</Text>
			</TouchableOpacity>
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
						color={colortheme["color-primary-500"]}
					/>
					<View
						style={{
							marginLeft: 10,
						}}
					>
						<Text
							style={{
								fontWeight: "800",
								color: colortheme["color-primary-500"],
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
			<List
				style={{ marginTop: 20 }}
				listKey="0"
				data={Data}
				renderItem={renderMain}
			/>
			{selected.length === 0 ? null : (
				<Button
					style={styles.button}
					onPress={() =>
						props.navigation.navigate("MySymptoms", {
							symptoms: selected,
							speciality: speciality,
						})
					}
				>
					{selected.length} selected
				</Button>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "transparent",
		padding: 20,
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
	image: {
		borderRadius: 10,
		width: 90,
		height: 90,
	},

	symptom: {
		width: Dimensions.get("window").width / 2 - 20,
		paddingBottom: 20,

		borderWidth: 1,
		borderTopColor: "blue",
		borderBottomColor: "transparent",
		borderLeftColor: "transparent",
		borderRightColor: "transparent",
		padding: 5,
		marginTop: 5,
		marginHorizontal: 10,
	},

	circle: {
		position: "absolute",
		borderRadius: 30,
		right: 0,
		zIndex: 999999,
	},

	button: {
		height: 55,
		marginTop: 5,
		marginBottom: 5,
		backgroundColor: "blue",
		borderRadius: 10,
		borderColor: "transparent",
		width: Dimensions.get("screen").width / 2,
		marginLeft: "auto",
		marginRight: "auto",
	},
});
