/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import Welcome1 from "../screens/Welcome1";
import Welcome2 from "../screens/Welcome2";
import Welcome3 from "../screens/Welcome3";
import Login from "../screens/Login";
import SignIn from "../screens/SignIn";
import Setup from "../screens/Setup";
import Condition from "../screens/Condition";
import Home from "../screens/Home";
import Add from "../screens/Add";
import { Ionicons } from "@expo/vector-icons";
import Search from "../screens/Search";
import Appointment from "../screens/Appointment";
import { MaterialIcons } from "@expo/vector-icons";
import Settings from "../screens/Settings";
import SingleDoctor from "../screens/SingleDoctor";
import MakeAppointment from "../screens/MakeAppointment";
import Payment from "../screens/Payment";
import Booking1 from "../screens/Booking1";
import Booking2 from "../screens/Booking2";
import Booking3 from "../screens/Booking3";
import Booking4 from "../screens/Booking4";
import Doctors from "../screens/Doctors";
import SingleAppointment from "../screens/SingleAppointment";
import Review from "../screens/Review";
import Profile from "../screens/Profile";
import Forgot from "../screens/Forgot";
import Otp from "../screens/Otp";
import Recovery from "../screens/Recovery";
import Favourite from "../screens/Favourite";
import Faq from "../screens/Faq";
import Help from "../screens/Help";
import Symptoms from "../screens/Symptoms";
import MySymptoms from "../screens/MySymptoms";
import Appointment2 from "../screens/Appointment2";
import Options from "../screens/Options";
import Ambulance from "../screens/Ambulance";
import ReportSymptoms from "../screens/ReportSymptoms";
import GetPrescription from "../screens/GetPrescription";
import MedicalLabs from "../screens/MedicalLabs";
import FindDoctor from "../screens/FindDoctor";
import Prescription_Doctors from "../screens/Prescription_Doctors";
import Pharmacies from "../screens/Pharmacies";
import Notification from "../screens/Notification";

export default function Navigation({ colorScheme }) {
	return (
		<NavigationContainer
			theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
	return (
		<Stack.Navigator initialRouteName="Welcome1">
			<Stack.Screen
				name="Root"
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Welcome1"
				component={Welcome1}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="GetPrescription"
				component={GetPrescription}
				options={{ headerTitle: "Get Prescription" }}
			/>
			<Stack.Screen
				name="Welcome2"
				component={Welcome2}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Options"
				component={Options}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Appointment"
				component={Appointment2}
				options={{ headerTitle: "Appointment" }}
			/>
			<Stack.Screen
				name="Welcome3"
				component={Welcome3}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="SignIn"
				component={SignIn}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Setup"
				component={Setup}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Condition"
				component={Condition}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="SingleDoctor"
				component={SingleDoctor}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="MakeAppointment"
				component={MakeAppointment}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Payment"
				component={Payment}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Booking1"
				component={Booking1}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="MedicalLabs"
				component={MedicalLabs}
				options={{ headerTitle: "Medical Labs" }}
			/>
			<Stack.Screen
				name="Booking2"
				component={Booking2}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Booking3"
				component={Booking3}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Ambulance"
				component={Ambulance}
				options={{ headerTitle: "Ambulances" }}
			/>
			<Stack.Screen
				name="FindDoctor"
				component={FindDoctor}
				options={{ headerTitle: "Search for a doctor near you" }}
			/>
			<Stack.Screen
				name="Prescription_Doctors"
				component={Prescription_Doctors}
				options={{ headerTitle: "Choose a doctor first" }}
			/>
			<Stack.Screen
				name="Booking4"
				component={Booking4}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="ReportSymptoms"
				component={ReportSymptoms}
				options={{ headerTitle: "Report Symptoms" }}
			/>

			<Stack.Screen
				name="Doctors"
				component={Doctors}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="SingleAppointment"
				component={SingleAppointment}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Review"
				component={Review}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Notification"
				component={Notification}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Pharmacies"
				component={Pharmacies}
				options={{ headerTitle: "Pharmacies" }}
			/>
			<Stack.Screen
				name="Forgot"
				component={Forgot}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Otp"
				component={Otp}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Recovery"
				component={Recovery}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Favourite"
				component={Favourite}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Faq"
				component={Faq}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Help"
				component={Help}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Symptoms"
				component={Symptoms}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="MySymptoms"
				component={MySymptoms}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarActiveTintColor: "rgba(0,152,153,255)",
			}}
		>
			<BottomTab.Screen
				name="Home"
				component={Home}
				options={{
					title: " ",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<Ionicons name="md-home-sharp" size={30} color={color} />
					),
				}}
			/>

			<BottomTab.Screen
				name="Add"
				component={Add}
				options={{
					title: " ",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<Ionicons name="add" size={35} color={color} />
					),
				}}
			/>

			<BottomTab.Screen
				name="Search"
				component={Search}
				options={{
					title: " ",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<FontAwesome name="search" size={30} color={color} />
					),
				}}
			/>

			<BottomTab.Screen
				name="Appointment"
				component={Appointment}
				options={{
					title: " ",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="book-online" size={30} color={color} />
					),
				}}
			/>

			<BottomTab.Screen
				name="Settings"
				component={Settings}
				options={{
					title: " ",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<Ionicons name="settings" size={30} color={color} />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
