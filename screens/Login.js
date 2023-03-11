import { Button, Input, Layout, Spinner, Text } from "@ui-kitten/components";
import {
	Alert,
	Dimensions,
	Image,
	ScrollView,
	StatusBar,
	StyleSheet,
	View,
} from "react-native";
import Logo from "../assets/images/logo.jpeg";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import Google from "../assets/images/google.png";
import Facebook from "../assets/images/facebook.png";
import * as SecureStore from "expo-secure-store";
import Encrypt from "../constants/Encrypt";
import { URL } from "../variables.json";

export default (props) => {
	const [seen, setSeen] = useState(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setloading] = useState(false);

	useEffect(() => {
		async function getValueFor(key) {
			let result = await SecureStore.getItemAsync(key);
			if (result) {
				result = JSON.parse(result);
				global.user = result;
				//props.navigation.navigate("Options");
			}
		}
		getValueFor("user");
	}, []);

	const login = () => {
		setloading(true);
		let body = JSON.stringify({ email: email, password: password });
		body = Encrypt(body);
		const data = new FormData();
		data.append("body", body);
		let method = { method: "post", body: data };
		let url = URL + "login.php";
		fetch(url, method)
			.then((res) => res.json())
			.then((res) => {
				if (res.status == 1) {
					let dt = JSON.stringify(res.data);
					SecureStore.setItemAsync("token", res.data.token);
					SecureStore.setItemAsync("user", dt);
					global.user = res.data;
					props.navigation.navigate("Options");
				} else {
					Alert.alert("Unsuccessful", "Login failed", [
						{
							text: "Retry",
							onPress: () => {},
						},
					]);
				}
				setloading(false);
			})
			.catch((e) => {
				console.log(e);
				setloading(false);
			});
		// SecureStore.setItemAsync("token", "123456");
		// props.navigation.navigate("Symptoms");
	};
	return (
		<ScrollView style={styles.container}>
			<View style={styles.logoContainer}>
				<Image
					source={Logo}
					style={{
						marginLeft: "auto",
						marginRight: "auto",
						marginTop: "auto",
						marginBottom: "auto",
						width: 200,
						height: 200,
					}}
				/>
			</View>
			<Text style={{ textAlign: "center", fontSize: 17 }} appearance="hint">
				Welcome to
			</Text>
			<Text style={{ textAlign: "center", fontSize: 22, fontWeight: "700" }}>
				My Daktari
			</Text>

			<View style={styles.form}>
				<View
					style={{
						flexDirection: "row",
						marginBottom: 10,
					}}
				>
					<FontAwesome
						name="envelope-o"
						size={24}
						color="rgba(0,152,153,255)"
					/>
					<Text appearance="hint" style={{ marginLeft: 10 }}>
						Email
					</Text>
				</View>
				<Input
					style={styles.input}
					placeholder="johndoe@gmail.com"
					onChangeText={(text) => setEmail(text)}
					defaultValue={email}
					keyboardType="email-address"
				/>

				<View
					style={{
						flexDirection: "row",
						marginTop: 15,
						marginBottom: 10,
					}}
				>
					<Feather name="lock" size={24} color="rgba(0,152,153,255)" />
					<Text appearance="hint" style={{ marginLeft: 10 }}>
						Password
					</Text>
				</View>
				<Input
					style={styles.input}
					placeholder="Enter password"
					onChangeText={(text) => setPassword(text)}
					defaultValue={password}
					secureTextEntry={seen}
					accessoryRight={() =>
						seen ? (
							<AntDesign
								name="eyeo"
								size={24}
								color="gray"
								onPress={() => setSeen(false)}
							/>
						) : (
							<Feather
								name="eye-off"
								size={24}
								color="gray"
								onPress={() => {
									setSeen(true);
								}}
							/>
						)
					}
				/>
				<Text
					style={{ color: "gray", textAlign: "right" }}
					onPress={() => props.navigation.navigate("Forgot")}
				>
					Forgot Password?
				</Text>
				{loading ? (
					<View
						style={{
							marginTop: 20,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Spinner />
					</View>
				) : (
					<Button
						style={{
							marginTop: 20,
							height: 60,
							borderColor: "transparent",
							backgroundColor: "rgba(0,152,153,255)",
							borderRadius: 10,
						}}
						onPress={login}
					>
						Sign In
					</Button>
				)}

				<View style={{ flexDirection: "row", marginTop: 20 }}>
					<View
						style={{
							backgroundColor: "gray",
							height: 1,
							flex: 1,
							alignSelf: "center",
						}}
					/>
					<Text
						style={{ alignSelf: "center", paddingHorizontal: 5, fontSize: 15 }}
					>
						Or
					</Text>
					<View
						style={{
							backgroundColor: "gray",
							height: 1,
							flex: 1,
							alignSelf: "center",
						}}
					/>
				</View>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-evenly",
						width: Dimensions.get("screen").width / 2,
						marginLeft: "auto",
						marginRight: "auto",
					}}
				>
					<View style={styles.socialContainer}>
						<Image
							source={Google}
							style={{
								height: 30,
								width: 30,
								marginLeft: "auto",
								marginRight: "auto",
								marginTop: "auto",
								marginBottom: "auto",
							}}
						/>
					</View>

					<View style={styles.socialContainer}>
						<Image
							source={Facebook}
							style={{
								height: 30,
								width: 30,
								marginLeft: "auto",
								marginRight: "auto",
								marginTop: "auto",
								marginBottom: "auto",
							}}
						/>
					</View>
				</View>
			</View>
			<Text
				style={{ textAlign: "center", marginTop: 20, marginBottom: 60 }}
				appearance="hint"
			>
				Don't have an account?{" "}
				<Text
					style={{ color: "rgba(0,152,153,255)" }}
					onPress={() => props.navigation.navigate("SignIn")}
				>
					Create New
				</Text>
			</Text>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		paddingTop: StatusBar.currentHeight,
		backgroundColor: "transparent",
	},

	logoContainer: {
		width: 280,
		height: 280,
		borderRadius: 210,
		backgroundColor: "white",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: 100,
	},
	form: {
		marginTop: 100,
	},
	input: {
		borderBottomColor: "gray",

		backgroundColor: "transparent",
	},
	socialContainer: {
		width: 40,
		height: 40,
		borderColor: "lightgray",
		borderWidth: 1,
		borderRadius: 10,
	},
});
