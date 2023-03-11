import { Datepicker, Layout, List, Text } from "@ui-kitten/components";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import * as React from "react";
import { Fontisto } from "@expo/vector-icons";
import Encrypt from "../constants/Encrypt";
import { URL } from "../variables.json";
export default (props) => {
	const [date, setDate] = React.useState(new Date());
	const [loading, setloading] = React.useState(false);
	const [day, setday] = React.useState("Monday");

	React.useEffect(() => {
		switch (date.getDay()) {
			case 0:
				setday("Sunday");
				break;
			case 1:
				setday("Monday");
				break;
			case 2:
				setday("Tuesday");
				break;
			case 3:
				setday("Wednesday");
				break;
			case 4:
				setday("Thursday");
				break;
			case 5:
				setday("Friday");
				break;
			case 6:
				setday("Saturday");
				break;
		}
	}, [date]);

	const detail = props.route.params.doctor;
	console.log(props.route.params);
	const [timeslots, settimeslots] = React.useState([]);

	const getSlots = (nextDate) => {
		setDate(nextDate);
		let body = {
			id: detail.id,
			day: nextDate.getDay(),
		};

		body = JSON.stringify(body);
		setloading(true);
		//console.log(body);
		const data = new FormData();
		data.append("body", Encrypt(body));
		const method = {
			method: "post",
			body: data,
		};
		let url = URL + "get_timeslots.php";
		fetch(url, method)
			.then((res) => res.json())
			.then((res) => {
				setloading(false);
				console.log(res);
				settimeslots(res.data);
			})
			.catch((e) => {
				setloading(false);
				console.log(e);
			});
	};
	const Book = (item) => {
		setloading(true);
		let body = {
			uid: global.user.id,
			did: detail.id,
			start_time: item.start_time,
			end_time: item.end_time,
			date: date.toDateString(),
		};
		if (props.route.params.par) {
			body = {
				uid: global.user.id,
				did: detail.id,
				start_time: item.start_time,
				end_time: item.end_time,
				date: date.toDateString(),
				description: props.route.params.par.description,
			};
		}

		body = JSON.stringify(body);
		const data = new FormData();
		data.append("body", Encrypt(body));
		const method = {
			method: "post",
			body: data,
		};
		console.log(body);
		let url = URL + "create_appointment.php";
		fetch(url, method)
			.then((res) => res.json())
			.then((res) => {
				setloading(false);
				if (res.status == 1) {
					alert("Success, Please check your email for futher instructions");
					//props.navigation.replace("Symptoms");
				}
				//console.log(res);
			})
			.catch((e) => {
				setloading(false);
				console.log(e);
			});
	};

	const RenderSlots = ({ item }) => {
		return (
			<TouchableOpacity
				style={{
					padding: 10,
					backgroundColor: "blue",
					margin: 10,
					alignItems: "center",
				}}
				onPress={Book.bind(this, item)}
			>
				<Text style={{ color: "white" }}>
					{item.start_time + " - " + item.end_time}
				</Text>
			</TouchableOpacity>
		);
	};

	return (
		<>
			{loading ? (
				<Layout
					style={{
						...styles.parent,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text>Fetching data..please wait</Text>
				</Layout>
			) : (
				<Layout style={styles.parent}>
					<View style={{ alignItems: "center" }}>
						<TouchableOpacity style={styles.doctorContent}>
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
								<Text
									appearance="hint"
									style={{ fontWeight: "700", fontSize: 13 }}
								>
									{detail.speciality}
								</Text>
								<View style={{ flexDirection: "row", alignItems: "center" }}>
									{/* <Ionicons name="ios-star-half" size={15} color="orange" />
											<Text appearance="hint">4.9 (37 Reviews)</Text> */}
								</View>
							</View>
						</TouchableOpacity>
					</View>
					<Datepicker
						style={styles.input}
						label="choose date for appointment"
						date={date}
						onSelect={(nextDate) => {
							getSlots(nextDate);
						}}
					/>
					<Text style={{ margin: 10, fontWeight: "bold" }}>{day}</Text>
					{timeslots.length == 0 ? (
						<View style={{ justifyContent: "center", alignItems: "center" }}>
							<Text>Please choose another date to get time slots for it</Text>
						</View>
					) : (
						<List data={timeslots} renderItem={RenderSlots} listKey="top" />
					)}
				</Layout>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	parent: {
		flex: 1,
	},
	input: {
		margin: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: "700",
	},
	doctorContent: {
		width: Dimensions.get("screen").width - 40,
		height: 130,
		borderRadius: 20,
		borderColor: "rgba(206,206,206,255)",
		borderWidth: 1,
		flexDirection: "row",
		alignItems: "center",
		marginTop: 20,
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
