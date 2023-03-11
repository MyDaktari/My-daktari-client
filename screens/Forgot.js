import { Layout, Text, Input, Button } from "@ui-kitten/components"
import { StyleSheet, View, TouchableOpacity, StatusBar, Dimensions } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"

export default (props)=>{
    return(
        <Layout style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=>props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" style={{marginTop: 3, marginLeft: 3}}/>
            </TouchableOpacity>

            </View>
            <Text style={{
                color: 'rgba(0,152,153,255)',
                fontSize: 25,
                fontWeight: '700'
            }}>Forgot password</Text>

            <Text style={{
                marginTop: 20
            }} appearance="hint">Please enter your phone number below to receive your OTP number</Text>

<View style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                    marginTop: 40
                }}>
                    <MaterialIcons name="phone-in-talk" size={24} color="rgba(0,152,153,255)" />
                    <Text appearance="hint" style={{marginLeft: 10}}>Phone number</Text>
                </View>
                <Input style={styles.input} keyboardType="phone-pad" placeholder="+91  Enter your phone number"/>

                <Button style={styles.button} onPress={()=>props.navigation.navigate('Otp')}>Send OTP</Button>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'transparent'
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
    },
    input:{
        borderBottomColor: 'gray',
        
        backgroundColor: 'transparent'
    },
})