import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import { Text, Input, Button } from "@ui-kitten/components"
import { Checkbox } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';

export default(props)=>{
    return(
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=>props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" style={{marginTop: 3, marginLeft: 3}}/>
            </TouchableOpacity>

            <Text style={{
                fontSize: 24,
                fontWeight: "700",
                color: 'rgba(0,152,153,255)'
            }}>State your condition</Text>
            <Text style={{fontSize: 16, marginTop: 10}} appearance="hint">State your current condition or your preexisting condition</Text>
            <View style={styles.checklist}>
                <View style={styles.checkboxContainer}>
                    <Checkbox/>
                    <Text>Diabetis</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <Checkbox/>
                    <Text>Blood Pressure</Text>
                </View>

                <View style={styles.checkboxContainer}>
                    <Checkbox/>
                    <Text>Fever</Text>
                </View>

                <View style={styles.checkboxContainer}>
                    <Checkbox/>
                    <Text>Headache</Text>
                </View>

                <View style={styles.checkboxContainer}>
                    <Checkbox/>
                    <Text>Diabetis</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <Checkbox/>
                    <Text>Pressure</Text>
                </View>

                <View style={styles.checkboxContainer}>
                    <Checkbox/>
                    <Text>Fever</Text>
                </View>

                <View style={styles.checkboxContainer}>
                    <Checkbox/>
                    <Text>Headache</Text>
                </View>

                <View style={styles.checkboxContainer}>
                    <Checkbox/>
                    <Text>Diabetis</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <Checkbox/>
                    <Text>Blood Pressure</Text>
                </View>

                <View style={styles.checkboxContainer}>
                    <Checkbox/>
                    <Text>Fever</Text>
                </View>

                <View style={styles.checkboxContainer}>
                    <Checkbox/>
                    <Text>Headache</Text>
                </View>
            </View>
            <Input
            style={{marginTop: 20}}
            multiline={true}
            textStyle={{ minHeight: 100 }}
            placeholder="State any other condition that you might be having which is not listed above"
            />
            <Button style={{
                    marginTop: 100,
                    height: 60,
                    borderColor: 'transparent',
                    backgroundColor: 'rgba(0,152,153,255)',
                    borderRadius: 10,
                    marginBottom: 40,
                }} onPress={()=>props.navigation.navigate("Root")}>Proceed</Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        
        backgroundColor: 'transparent'
    },
    arrowContainer:{
        width: 40,
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        backgroundColor: 'transparent',
        borderRadius: 10,
        marginTop: 30
    },

    checklist:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 20
    },
    checkboxContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        marginTop: 10
    }
})