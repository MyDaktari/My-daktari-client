import { Layout, List, Text, useTheme } from "@ui-kitten/components";
import {
	Dimensions,
	Image,
	ScrollView,
	StatusBar,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import Doctor1 from "../assets/images/doctor1.jpg";
import Doctor2 from "../assets/images/doctor2.jpg";
import Doctor3 from "../assets/images/doctor3.jpg";
import { Ionicons } from "@expo/vector-icons";
import { URL } from "../variables.json";
import { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import useColorScheme from "../hooks/useColorScheme";
import Encrypt from "../constants/Encrypt";

export default (props) => {
	const par = props.route.params;
	const [doctor, setDoctor] = useState("");
	const colorScheme = useColorScheme();
	const colortheme = useTheme();

	const getDoctors = () => {
		let body = {
			speciality: "I am not sure",
		};
		body = JSON.stringify(body);
		body = Encrypt(body);
		const data = new FormData();
		data.append("body", body);
		let method = {
			method: "post",
			body: data,
		};
		let url = URL + "get_doctors.php";
		fetch(url, method)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				if (res.status == 1) {
					setDoctor(res.data);
				}
			})
			.catch((e) => {
				console.log(e);
			});
	};

	useEffect(() => {
		getDoctors();
	}, []);
	const Doctors = ({ item }) => {
		let detail = item;
		return (
			<TouchableOpacity
				style={styles.doctorContent}
				onPress={() =>
					props.navigation.navigate("GetPrescription", {
						doctor: detail,
					})
				}
				key={detail._id}
			>
				{/* <Image style={styles.doctorImage} source={Doctor2} /> */}
				<Fontisto
					name="doctor"
					size={80}
					style={{ marginRight: 10 }}
					color={colortheme["color-success-600"]}
				/>

				<View
					style={{
						padding: 5,
						justifyContent: "space-between",
						height: "100%",
						width: "76%",
					}}
				>
					<Text style={styles.title}>{detail.name}</Text>
					<Text appearance="hint" style={{ fontWeight: "700", fontSize: 13 }}>
						{detail.speciality}
					</Text>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						{/* <Ionicons name="ios-star-half" size={15} color="orange" />
											<Text appearance="hint">4.9 (37 Reviews)</Text> */}
					</View>
				</View>
			</TouchableOpacity>
		);
	};
	return (
		<Layout style={styles.container}>
			{doctor.length > 0 ? (
				<>
					<List
						data={doctor}
						style={{ backgroundColor: "transparent" }}
						renderItem={Doctors}
					/>
				</>
			) : null}
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
	},
	doctorContent: {
		width: Dimensions.get("window").width - 60,
		height: 130,
		borderRadius: 20,
		borderColor: "rgba(206,206,206,255)",
		borderWidth: 1,
		flexDirection: "row",
		alignItems: "center",
		margin: 10,
		padding: 10,
	},
	arrowContainer: {
		width: 40,
		height: 40,
		borderColor: "lightgray",
		borderWidth: 1,
		backgroundColor: "transparent",
		borderRadius: 10,
		marginRight: Dimensions.get("screen").width / 10,
	},
	doctorImage: {
		width: 100,
		height: 100,
		borderRadius: 60,
	},
});
