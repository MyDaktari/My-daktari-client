import {
	Text,
	Input,
	Button,
	Spinner,
	Datepicker,
	useTheme as th,
} from "@ui-kitten/components";
import {
	ScrollView,
	StyleSheet,
	StatusBar,
	View,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Profile from "../assets/images/profile.jpeg";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Encrypt from "../constants/Encrypt";
import { URL } from "../variables.json";
import * as SecureStore from "expo-secure-store";
export default (props) => {
	const [gender, setGender] = useState("");
	const data = ["MALE", "FEMALE", "OTHER"];
	const { colors } = useTheme();
	const [address, setAddress] = useState("");
	const [profile, setProfile] = useState("");
	const [loading, setloading] = useState(false);
	const [dob, setDob] = useState("Select your date of birth");
	const [dt, setdt] = useState(new Date());
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date) => {
		console.warn("A date has been picked: ", date);
		setDob(date);
		hideDatePicker();
	};

	const dets = props.route.params;
	const email = dets.text1;
	const fullName = dets.text2;
	const phoneNumber = dets.text3;
	const password = dets.text4;
	const url = URL + "register.php";

	const signUp = () => {
		setloading(true);
		let body = {
			email: email,
			name: fullName,
			phone: phoneNumber,
			gender: gender,
			dob: dob,
			address: address,
			password: password,
		};
		body = JSON.stringify(body);
		body = Encrypt(body);
		const data = new FormData();
		data.append("body", body);
		let method = {
			method: "post",
			body: data,
		};
		fetch(url, method)
			.then((res) => res.json())
			.then((res) => {
				setloading(false);
				if (res.status == 1) {
					let dt = JSON.stringify(res.data);
					SecureStore.setItemAsync("token", res.data.token);
					SecureStore.setItemAsync("user", dt);
					global.user = res.data;
					props.navigation.navigate("Options");
				}
			})
			.catch((e) => {
				console.log(e);
				setloading(false);
			});
	};
	const colortheme = th();
	return (
		<ScrollView style={styles.container}>
			<TouchableOpacity
				style={styles.arrowContainer}
				onPress={() => props.navigation.goBack()}
			>
				<AntDesign
					name="arrowleft"
					size={30}
					color="black"
					style={{ marginTop: 3, marginLeft: 3 }}
				/>
			</TouchableOpacity>

			<Text
				style={{
					fontSize: 24,
					fontWeight: "700",
					color: colortheme["color-primary-600"],
				}}
			>
				Set up your profile
			</Text>
			<Text style={{ fontSize: 16, marginTop: 10 }} appearance="hint">
				Update your profile to connect to your doctor with better impression.
			</Text>

			<View
				style={{
					flexDirection: "row",
					marginTop: 30,
					marginBottom: 10,
				}}
			>
				<Feather
					name="users"
					size={24}
					color={colortheme["color-primary-600"]}
				/>
				<Text appearance="hint" style={{ marginLeft: 10 }}>
					Gender
				</Text>
			</View>
			<SelectList
				setSelected={setGender}
				data={data}
				search={false}
				boxStyles={{ borderRadius: 5 }}
				inputStyles={{ color: colors.text }}
				arrowicon={
					<FontAwesome name="chevron-down" size={12} color={colors.text} />
				}
				dropdownTextStyles={{ color: colors.text }}
			/>

			<View
				style={{
					flexDirection: "row",
					marginTop: 15,
					marginBottom: 10,
				}}
			>
				<FontAwesome5
					name="calendar"
					size={24}
					color={colortheme["color-primary-600"]}
				/>
				<Text appearance="hint" style={{ marginLeft: 10 }}>
					Calendar
				</Text>
			</View>

			<Datepicker
				date={dt}
				style={styles.input}
				min={new Date("1901-03-25")}
				onSelect={(nextDate) => {
					setdt(nextDate);
					setDob(nextDate.toDateString());
				}}
			/>

			<View
				style={{
					flexDirection: "row",
					marginTop: 15,
					marginBottom: 10,
				}}
			>
				<Ionicons
					name="ios-location-outline"
					size={24}
					color={colortheme["color-primary-600"]}
				/>
				<Text appearance="hint" style={{ marginLeft: 10 }}>
					Address
				</Text>
			</View>
			<Input
				style={styles.input}
				placeholder="Nairobi, Kenya"
				onChangeText={(text) => setAddress(text)}
				defaultValue={address}
			/>
			{loading ? (
				<View
					style={{
						marginTop: 100,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Spinner />
				</View>
			) : (
				<Button
					style={{
						marginTop: 100,
						height: 60,
						borderColor: "transparent",
						backgroundColor: colortheme["color-primary-600"],
						borderRadius: 10,
						marginBottom: 40,
					}}
					onPress={signUp}
				>
					Complete
				</Button>
			)}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,

		backgroundColor: "transparent",
	},
	arrowContainer: {
		width: 40,
		height: 40,
		borderColor: "lightgray",
		borderWidth: 1,
		backgroundColor: "transparent",
		borderRadius: 10,
		marginTop: 30,
	},
	pictureContainer: {
		backgroundColor: "transparent",
		width: 50,
		height: 50,
		borderRadius: 50,
		marginLeft: 100,
		marginTop: -10,
	},
	input: {},
});
