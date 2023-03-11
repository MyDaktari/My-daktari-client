import { ScrollView, StyleSheet, View, TouchableOpacity, StatusBar, Dimensions } from "react-native"
import { Button, Input, Text } from "@ui-kitten/components"
import { AntDesign } from "@expo/vector-icons"
import { useState } from "react"

export default(props)=>{

    const [email, setEmail] = useState('')
    return(
        <ScrollView style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=>props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" style={{marginTop: 3, marginLeft: 3}}/>
            </TouchableOpacity>

            <Text style={styles.title}>Help</Text>

            
            </View>

            <Input multiline={true} textStyle={{minHeight: 300}} style={styles.input} placeholder="Type your message" value={email} onChangeText={text=>setEmail(text)}/>
            <Text style={{
                color: 'gray',
                marginTop: 20
            }}>Fill out the form above to send an email and one of our team members will address your question as soon as possible</Text>


            <Button style={styles.button} onPress={()=>console.log(email)}>Send mail</Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
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
        marginRight: Dimensions.get("screen").width /3
    },

    input:{
        backgroundColor: 'transparent',
        borderColor: 'lightgray',
        marginTop: 20,
        borderRadius: 20
    },

    button:{
        height: 55,
        marginTop: 240,
        marginBottom: 70,
        backgroundColor: 'rgba(0,152,153,255)',
        borderRadius: 10,
        borderColor: 'transparent'
    }
})