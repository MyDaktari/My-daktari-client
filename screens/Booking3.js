import { Button, Divider, Layout, Radio, Text } from "@ui-kitten/components"
import { StyleSheet, StatusBar, Dimensions, View, TouchableOpacity } from "react-native"
import { AntDesign } from "@expo/vector-icons"

export default(props) =>{
    return(
        <Layout style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=>props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" style={{marginTop: 3, marginLeft: 3}}/>
            </TouchableOpacity>
            <Text style={styles.title}>Patient's details</Text>
            </View>

            <Text style={{textAlign: 'center', color: 'gray', fontSize: 17, fontWeight:'700', marginTop: 20}}>Are you currently under any other medication?</Text>

            <Divider style={{backgroundColor: 'gray', marginTop: 10}}/>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20
            }}>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '700'
                }} appearance="hint">Yes</Text>

                <Radio/>
            </View>

            <Divider style={{backgroundColor: 'gray', marginTop: 10}}/>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20
            }}>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '700'
                }} appearance="hint">No</Text>

                <Radio/>
            </View>
            <Divider style={{backgroundColor: 'gray', marginTop: 10}}/>

            <Button style={styles.button} onPress={()=>props.navigation.navigate('Booking4')}>Next 3/4</Button>
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
        marginTop: Dimensions.get("screen").height/2,
        marginBottom: 70,
        backgroundColor: 'rgba(0,152,153,255)',
        borderRadius: 10,
        borderColor: 'transparent'
    }
})