import { Layout, Text, Input, Button } from "@ui-kitten/components"
import { StyleSheet, View, TouchableOpacity, StatusBar, Dimensions } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"
import { Feather } from "@expo/vector-icons"



export default (props)=>{

    const [seen, setSeen] = useState(true)

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
            }}>Recovery password</Text>

            <Text style={{
                marginTop: 20
            }} appearance="hint">Enter your new and confim password to reset your password.</Text>

<View style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    marginBottom: 10
                }}>
                    <Feather name="lock" size={24} color="rgba(0,152,153,255)" />
                    <Text appearance="hint" style={{marginLeft: 10}}>Password</Text>
                </View>
                <Input style={styles.input} placeholder="Enter password" secureTextEntry={seen} accessoryRight={()=> seen ? <AntDesign name="eyeo" size={24} color="gray" onPress={()=>setSeen(false)}/>:<Feather name="eye-off" size={24} color="gray" onPress={()=>{setSeen(true)}}/>}/>


                <View style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    marginBottom: 10
                }}>
                    <Feather name="lock" size={24} color="rgba(0,152,153,255)" />
                    <Text appearance="hint" style={{marginLeft: 10}}>Confirm Password</Text>
                </View>
                <Input style={styles.input} placeholder="Enter confirm password" secureTextEntry={seen} accessoryRight={()=> seen ? <AntDesign name="eyeo" size={24} color="gray" onPress={()=>setSeen(false)}/>:<Feather name="eye-off" size={24} color="gray" onPress={()=>{setSeen(true)}}/>}/>

                <Button style={styles.button} onPress={()=>props.navigation.navigate('Login')}>Reset Password</Button>
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
        marginTop: Dimensions.get("screen").height/2.5,
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