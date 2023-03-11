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
            }}>OTP</Text>

            <Text style={{
                marginTop: 20
            }} appearance="hint">Put the OTP number below sent to your number +254 5684 586 942</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 20
                }}>
                    <Input textStyle={{height: 50}} style={styles.input}/>
                    <Input textStyle={{height: 50}} style={styles.input}/>
                    <Input textStyle={{height: 50}} style={styles.input}/>
                    <Input textStyle={{height: 50}} style={styles.input}/>
                </View>
                <Text appearance="hint" style={{textAlign: 'center', fontWeight: '700', marginTop: 20}}>Code send in 0:29 <Text style={{color: 'rgba(0,152,153,255)', fontWeight: '700'}}>Resend code</Text></Text>
                

                <Button style={styles.button} onPress={()=>props.navigation.navigate('Recovery')}>Change Password</Button>
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
        
        width: 60,
        backgroundColor: 'white',
        borderRadius: 10
    },
})