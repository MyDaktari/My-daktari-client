import { FontAwesome } from "@expo/vector-icons";
import {
	Button,
	Card,
	Input,
	Layout,
	List,
	Spinner,
	Text,
} from "@ui-kitten/components";
import * as React from "react";
import { Dimensions, Keyboard, StyleSheet, View } from "react-native";
import Encrypt from "../constants/Encrypt";
import { URL } from "../variables.json";
export default (props) => {
	const doc = props.route.params.doctor;
	const dets = [
		"Choose a specialist",
		"Neurologist",
		"Gastroenterologist",
		"Orthopedic Doctor",
		"dentist",
		"Pulmonologist",
		"ENT specialist",
	];

	const [sure, setsure] = React.useState(true);
	const [num, setnum] = React.useState(["1"]);
	const [medication_name, setmedi] = React.useState("");
	const [dosage, setdosage] = React.useState("");
	const [frequency, setfreq] = React.useState("");
	const [quantity, setqun] = React.useState("");
	const [symptoms, setsymptoms] = React.useState("");
	const [previous_medicine, setprev] = React.useState("");
	const [diagnosis, setdiagnosis] = React.useState("");
	const [loading, setloading] = React.useState(false);

	const addNum = () => {
		setnum([...num, "1"]);
	};

	const ResetNum = () => {
		//setnum(["1"]);
	};

	const options = [
		{
			name: "I have detailed information about my prescription",
			action: () => {
				setsure(true);
			},
		},
		{
			name: "Please help me decide",
			action: () => {
				setsure(false);
				ResetNum();
			},
		},
	];
	const RenderOptions = (item, index) => {
		return (
			<Card
				key={index}
				style={styles.optionParent}
				status={
					index == 0 && sure ? "primary" : index == 1 && !sure ? "primary" : ""
				}
				onPress={item.action}
			>
				<Text style={styles.OptionTitle}>{item.name}</Text>
			</Card>
		);
	};

	const SendSure = () => {
		setloading(true);
		let body;
		if (sure) {
			body = {
				medication_name: medication_name,
				dosage: dosage,
				frequency: frequency,
				quantity: quantity,
				sure: "yes",
				uid: global.user.id,
				doctor_id: doc.id,
			};
		} else {
			body = {
				sure: "no",
				symptoms: symptoms,
				previous_medicine: previous_medicine,
				diagnosis: diagnosis,
				uid: global.user.id,
				doctor_id: doc.id,
			};
		}
		body = JSON.stringify(body);
		const data = new FormData();
		data.append("body", Encrypt(body));
		const method = {
			method: "post",
			body: data,
		};
		const url = URL + "request_prescription.php";
		fetch(url, method)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				alert("Your request has been sent to the doctor");
				props.navigation.replace("GetPrescription", { doctor: doc });
				setloading(false);
			})
			.catch((e) => {
				console.log(e);
				setloading(false);
			});
	};

	return (
		<Layout style={styles.parent}>
			<Text category="h6" style={{ margin: 10 }}>
				You are getting a prescription from {"\t"}
				<Text style={{ color: "blue" }}>{"Dr . " + doc.name}</Text>
			</Text>
			<View style={{ flexDirection: "row" }}>
				{options.map((item, index) => RenderOptions(item, index))}
			</View>

			{sure ? (
				<>
					<Input
						label={"medication name"}
						onChangeText={(text) => {
							setmedi(text);
						}}
						style={styles.input}
					/>
					<Input
						onChangeText={(text) => {
							setdosage(text);
						}}
						label={"dosage"}
						style={styles.input}
					/>
					<Input
						onChangeText={(text) => {
							setfreq(text);
						}}
						label={"Frequency"}
						style={styles.input}
					/>
					<Input
						onChangeText={(text) => {
							setqun(text);
						}}
						label={"Qauntity"}
						style={styles.input}
					/>
				</>
			) : (
				<>
					<Input
						multiline
						textStyle={{ minHeight: 64 }}
						label={"Symptoms"}
						onChangeText={(text) => {
							setsymptoms(text);
						}}
						style={styles.input}
					/>
					<Input
						multiline
						textStyle={{ minHeight: 64 }}
						onChangeText={(text) => setprev(text)}
						value={previous_medicine}
						label={"Previous medications"}
						style={styles.input}
					/>
					<Input
						multiline
						textStyle={{ minHeight: 64 }}
						onChangeText={(text) => {
							setdiagnosis(text);
						}}
						value={diagnosis}
						label={"Diagnosis"}
						style={styles.input}
					/>
				</>
			)}

			<View style={{ justifyContent: "flex-end" }}>
				{loading ? (
					<View
						style={{
							justifyContent: "center",
							alignItems: "center",
							margin: 10,
						}}
					>
						<Spinner />
					</View>
				) : (
					<Button onPress={SendSure} style={styles.input}>
						Proceed
					</Button>
				)}
			</View>
		</Layout>
	);
};
const styles = StyleSheet.create({
	parent: {
		flex: 1,
	},
	input: {
		margin: 10,
	},
	optionParent: {
		width: Dimensions.get("window").width / 2 - 20,
		margin: 10,
	},
	optionTitle: {
		margin: 10,
	},
});
