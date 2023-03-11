import { Button, Divider, Layout, Text } from "@ui-kitten/components"
import { StyleSheet, StatusBar, Dimensions, TouchableOpacity, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import RNPickerSelect from 'react-native-picker-select';

export default(props)=>{
    return(
        <Layout style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=>props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" style={{marginTop: 3, marginLeft: 3}}/>
            </TouchableOpacity>
            <Text style={styles.title}>Patient's details</Text>
            </View>

            <Text style={{textAlign: 'center', color: 'gray', fontSize: 17, fontWeight:'700', marginTop: 20}}>How long have you been having these symptoms?</Text>
            <Text style={{
                textAlign: 'center',
                marginTop: 50,
                fontSize: 20,
                color: 'rgba(0,152,153,255)'
            }}>6 Days ago</Text>
            <Divider style={{backgroundColor: 'black', marginTop: 10}}/>

            <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: '3 Months ago', value: '3 Months ago' },
                { label: '4 days ago', value: '4 days ago' },
                { label: '6 days ago', value: '6 days ago' },
            ]}
            
        />

        <Button style={styles.button} onPress={()=>props.navigation.navigate("Booking3")}>Next 2/4</Button>

        </Layout>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        minHeight: Dimensions.get("screen").height,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'transparent'
    },
    title:{
        fontSize: 20,
        fontWeight: '700',
        color: 'rgba(123,125,141,255)',
       
    },

    arrowContainer:{
        width: 40,
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        backgroundColor: 'transparent',
        borderRadius: 10,
        marginRight: Dimensions.get("screen").width /5
    },

    button:{
        height: 55,
        marginTop: 100,
        marginBottom: 70,
        backgroundColor: 'rgba(0,152,153,255)',
        borderRadius: 10,
        borderColor: 'transparent'
    }
})