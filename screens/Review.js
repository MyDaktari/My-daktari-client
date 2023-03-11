import { ScrollView, StyleSheet, View, TouchableOpacity, StatusBar, Dimensions, Image } from "react-native"
import { Button, Input, Text } from "@ui-kitten/components"
import { AntDesign } from "@expo/vector-icons"
import Doctor1 from '../assets/images/doctor1.jpg'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from "react";  

export default(props)=>{
    const [decision, setDecision] = useState('')
    const [visible, setVisible] = useState(false);
    return(
        <>
        {visible? <View style={styles.dialog}>
            <View style={styles.square}>
                <View style={styles.circle}>

                </View>
            <FontAwesome name="quote-right" size={70} color="orange" style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 'auto',
                marginBottom: 'auto'
            }}/>
            </View>

            <Text style={{textAlign: 'center', fontSize: 25, marginTop: 10}} appearance="hint">Completed</Text>
            <Text style={{textAlign: 'center', fontSize: 16, marginTop: 10}} appearance="hint">Your appointment booking is successfully completed. <Text style={{fontWeight: '700'}} appearance="hint">Dr Jane Cooper </Text>will contact you soon</Text>
            <Button style={{
                height: 55,
                marginTop: 45,
                marginBottom: 70,
                backgroundColor: 'rgba(0,152,153,255)',
                borderRadius: 10,
                borderColor: 'transparent'
            }} onPress={()=>props.navigation.navigate('Home')}>Go to Dashboard</Button>
        </View>:null}
        <ScrollView style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=>props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" style={{marginTop: 3, marginLeft: 3}}/>
            </TouchableOpacity>

            <Text style={styles.title}>Write a review</Text>
            </View>

            <View style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 50
            }}>
            <FontAwesome name="quote-left" size={30} color="orange" style={{
                marginBottom: -15,
                zIndex: 999
            }}/>

            <Image source={Doctor1} style={{
                width: 155,
                height: 155,
                borderRadius: 20
            }}/>

            <FontAwesome name="quote-right" size={30} color="rgba(0,152,153,255)" style={{
                marginTop: -15,
                marginLeft: 130
            }}/>
            </View>

            <Text style={{
                fontSize: 26,
                textAlign: 'center',
                fontWeight: '700'
            }} appearance="hint">How was your experience with <Text style={{
                fontSize: 26,
                fontWeight: '700',
                color: 'gray'
            }}>Dr. Jane Cooper</Text>?</Text>

            <View style={{
                flexDirection: 'row',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 20
            }}>

            <Entypo name="star" size={24} color="orange"/>
            <Entypo name="star" size={24} color="orange"/>
            <Entypo name="star" size={24} color="orange"/>
            <Entypo name="star" size={24} color="orange"/>
            <Entypo name="star" size={24} color="lightgray"/>

            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={{fontWeight: '700', color: 'gray'}}>Write a comment</Text>
                <Text appearance="hint" style={{fontWeight: '700'}}>Max 450 Words</Text>

                
            </View>

            <Input multiline={true} textStyle={{minHeight: 130}} style={{backgroundColor: 'transparent', borderColor: 'lightgray', borderRadius: 10, marginTop: 10}} placeholder="Tell People about your experience"/>

            <Text style={{
                fontSize: 16,
                marginTop: 10,
                fontWeight: '700'
            }} appearance="hint">Would you recommend Dr. Jane Cooper to your friends?</Text>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10
            }}>

                <TouchableOpacity style={{
                    width: '45%',
                    height: 65,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: decision==='Yes' ? "rgba(0,152,153,255)": 'transparent'
                }} onPress={()=>setDecision('Yes')}>
                    <Text style={{textAlign: 'center', marginTop: 16, fontSize: 20, fontWeight: '700', color: decision==='Yes' ? "rgba(0,152,153,255)": 'gray'}}>Yes</Text>

                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: '45%',
                    height: 65,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: decision==='No' ? "rgba(0,152,153,255)": 'transparent'
                }} onPress={()=>setDecision('No')}>
                    <Text style={{textAlign: 'center', marginTop: 16, fontSize: 20, fontWeight: '700', color: decision==='No' ? "rgba(0,152,153,255)": 'gray'}}>No</Text>

                </TouchableOpacity>

            </View>

            <Button style={styles.button} onPress={()=>setVisible(true)}>Submit Review</Button>
        </ScrollView>
        </>
        
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
    title:{
        fontSize: 20,
        fontWeight: '700',
        color: 'rgba(123,125,141,255)',
       
    },
    button:{
        height: 55,
        marginTop: 100,
        marginBottom: 70,
        backgroundColor: 'rgba(0,152,153,255)',
        borderRadius: 10,
        borderColor: 'transparent'
    },
    dialog:{
        width: '90%',
        height: 450,
        backgroundColor: 'white',
       
        position: 'absolute',
        top: Dimensions.get("screen").height /5,
        zIndex: 999,
        left: Dimensions.get("screen").width /20,
        borderRadius: 20,
        padding: 15
    },
    square:{
        backgroundColor: 'lightgray',
        width: 100,
        height: 100,
        borderRadius: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 60
    },
    circle:{
    backgroundColor: 'rgba(0,152,153,255)',
    width: 30,
    height: 30,
    borderRadius: 30,
    position: 'absolute',
    marginLeft: 80,
    marginTop: -10
    }
})