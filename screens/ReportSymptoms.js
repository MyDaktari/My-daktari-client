import {
	Button,
	IndexPath,
	Input,
	Layout,
	Select,
	SelectItem,
	Text,
	useTheme,
} from "@ui-kitten/components";
import * as React from "react";
import { StyleSheet } from "react-native";

export default (props) => {
	const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
	const [symptom, setsymptom] = React.useState({});
	const dets = [
		"I am not sure",
		"Brain, Nerves and Spinal cord",
		"Stomach, Liver and GastroInternal tract",
		"Muscle, Bone and Joints",
		"Mouth",
		"Lung and Airway",
		"Ear,Nose and Throat",
	];
	const [selected, setselected] = React.useState(dets[0]);
	const colortheme = useTheme();
	return (
		<Layout style={styles.parent}>
			<Select
				selectedIndex={selectedIndex}
				onSelect={(index) => {
					setSelectedIndex(index);
					setselected(dets[index.row]);
					console.log(index.row);
					setsymptom({ speciality: dets[index.row], description: "" });
				}}
				value={selected}
				style={{ margin: 10 }}
				label="Body part where most affected"
			>
				{dets.map((item, index) => (
					<SelectItem title={item} key={index} />
				))}
			</Select>
			<Input
				label="Symptom (be as precise as possible)"
				multiline
				style={{ margin: 10 }}
				onChangeText={(text) => {
					console.log(text);
					setsymptom({ speciality: selected, description: text });
				}}
				textStyle={{ minHeight: 64 }}
			/>
			<Button
				status="primary"
				onPress={() => {
					props.navigation.navigate("Doctors", { symptom: symptom });
				}}
				style={{ margin: 10 }}
			>
				Continue
			</Button>
			<Text style={{ margin: 10 }}>
				Not sure about what to say? {"\t"}
				<Text
					onPress={() => {
						props.navigation.navigate("Symptoms");
					}}
					style={{ color: colortheme["color-warning-600"] }}
				>
					Check out our sample symptoms
				</Text>
			</Text>
		</Layout>
	);
};
const styles = StyleSheet.create({
	parent: {
		flex: 1,
		justifyContent: "center",
	},
});
