import { Fontisto } from "@expo/vector-icons";
import { Button, Layout, List, Spinner, Text } from "@ui-kitten/components";
import * as React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Encrypt from "../constants/Encrypt";
import { URL } from "../variables.json";
export default (props) => {
	const [place_id, set_place_id] = React.useState("");
	const [proceed, setproceed] = React.useState(true);
	const [doctors, setdoctors] = React.useState([]);
	const [show, setshow] = React.useState(false);
	const [loading, setloading] = React.useState(false);

	const FindDocs = () => {
		setloading(true);
		let body = {
			id: place_id,
		};
		body = JSON.stringify(body);
		body = Encrypt(body);
		const data = new FormData();
		data.append("body", body);
		let method = {
			method: "post",
			body: data,
		};
		let url = URL + "find_doctors.php";
		fetch(url, method)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setdoctors(res);
				setloading(false);
				setshow(true);
			})
			.catch((e) => {
				console.log(e);
				setloading(false);
			});
	};

	const Doctors = ({ item }) => {
		let detail = item;
		return (
			<TouchableOpacity
				style={styles.doctorContent}
				onPress={() =>
					props.navigation.navigate("Appointment", {
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
					color="rgba(0,152,153,255)"
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
					<Text appearance="hint" style={{ fontWeight: "700", fontSize: 13 }}>
						{detail.distance + " from you"}
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
		<Layout style={styles.parent}>
			{show ? (
				<List data={doctors} renderItem={Doctors} />
			) : (
				<>
					<Text style={{ margin: 10 }}>
						Start by searching a location near you
					</Text>
					<GooglePlacesAutocomplete
						placeholder="Search"
						onPress={(data, details = null) => {
							// 'details' is provided when fetchDetails = true
							if (details.place_id) {
								set_place_id(details.place_id);
								setproceed(false);
							}
						}}
						query={{
							key: "AIzaSyCSwMLb1EmWg4SvEVyiL7l5DbZzUO4llCo",
							language: "en",
							components: "country:ken",
						}}
					/>
					<View style={{ justifyContent: "flex-end" }}>
						{loading ? (
							<View
								style={{
									justifyContent: "center",
									alignItems: "center",
									marginVertical: 10,
								}}
							>
								<Spinner />
							</View>
						) : (
							<Button
								onPress={FindDocs}
								disabled={proceed}
								style={{ margin: 10 }}
								status="primary"
							>
								Proceed
							</Button>
						)}
					</View>
				</>
			)}
		</Layout>
	);
};

const styles = StyleSheet.create({
	parent: {
		flex: 1,
	},
	doctorContent: {
		width: Dimensions.get("screen").width - 20,
		height: 130,
		borderRadius: 20,
		borderColor: "rgba(206,206,206,255)",
		borderWidth: 1,
		flexDirection: "row",
		alignItems: "center",
		margin: 10,
		padding: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: "700",
	},
});
