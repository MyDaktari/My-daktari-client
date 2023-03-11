import { Button, Layout, Text, useTheme } from "@ui-kitten/components";
import {
	Dimensions,
	Image,
	ImageBackground,
	StyleSheet,
	View,
} from "react-native";
import Doctor from "../assets/images/doctor3.jpg";
import { Entypo } from "@expo/vector-icons";
import GestureRecognizer, {
	swipeDirections,
} from "react-native-swipe-gestures";

export default (props) => {
	function onSwipe(gestureName, gestureState) {
		const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

		switch (gestureName) {
			case SWIPE_UP:
				console.log("up");

				break;
			case SWIPE_DOWN:
				console.log("down");
				break;
			case SWIPE_LEFT:
				console.log("left");

				break;
			case SWIPE_RIGHT:
				console.log("rigth");
				props.navigation.navigate("Welcome2");
				break;
		}
	}
	const config = {
		velocityThreshold: 0.3,
		directionalOffsetThreshold: 80,
	};
	const colortheme = useTheme();
	return (
		<GestureRecognizer
			onSwipe={(direction, state) => onSwipe(direction, state)}
			onSwipeUp={(state) => state}
			onSwipeDown={(state) => state}
			onSwipeLeft={(state) => state}
			onSwipeRight={(state) => state}
			config={config}
			style={{
				flex: 1,
			}}
		>
			<Layout style={styles.container}>
				<ImageBackground source={Doctor} style={styles.image}>
					<View style={styles.content}>
						<View style={styles.wordContainer}>
							<Text
								style={{
									fontSize: 22,
									textAlign: "center",
									fontWeight: "700",
									color: colortheme["color-primary-600"],
								}}
							>
								Chat with doctors
							</Text>

							<Text
								style={{
									textAlign: "center",
									fontSize: 13,
									marginTop: 25,
								}}
								appearance="hint"
							>
								Book an appointment with doctor. Chat with doctor via
								appointment letter. Get consultent
							</Text>
							<View
								style={{
									flexDirection: "row",
									marginLeft: "auto",
									marginRight: "auto",
									alignItems: "center",
									marginTop: 20,
								}}
							>
								<Entypo
									name="star"
									size={13}
									color={colortheme["color-primary-300"]}
								/>
								<Entypo
									name="star"
									size={13}
									color={colortheme["color-primary-300"]}
								/>
								<Entypo
									name="star"
									size={16}
									color={colortheme["color-primary-600"]}
								/>
							</View>
							<Button
								style={{
									height: 60,
									borderRadius: 10,
									marginTop: 20,
									backgroundColor: colortheme["color-success-600"],
									borderColor: "transparent",
									marginBottom: 20,
								}}
								onPress={() => props.navigation.navigate("Login")}
							>
								Get started
							</Button>
						</View>
					</View>
				</ImageBackground>
			</Layout>
		</GestureRecognizer>
	);
};

const styles = StyleSheet.create({
	container: {
		minHeight: Dimensions.get("screen").height,
	},
	image: {
		height: Dimensions.get("screen").height,
		width: Dimensions.get("screen").width,
		resizeMode: "cover",
	},
	content: {
		backgroundColor: "rgba(246,246,246,255)",
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		width: Dimensions.get("screen").width,
		height: Dimensions.get("screen").height / 3,
		marginTop: Dimensions.get("screen").height / (3.2 / 2),
	},
	wordContainer: {
		backgroundColor: "rgba(255,255,255,255)",
		width: Dimensions.get("screen").width / 1.4,

		marginLeft: "auto",
		marginRight: "auto",
		marginTop: -180,
		borderRadius: 30,
		padding: 10,
	},
});
