import { Button, Layout, Text } from "@ui-kitten/components"
import { StatusBar, StyleSheet, TouchableOpacity, View, Dimensions, ScrollView } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { useState } from "react"
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';  

export default(props)=>{
    const [morning, setMorning] = useState(true)

    const hours = [{
        id: 1,
        name: '09:00AM'
    },
    {
        id: 2,
        name: '10:30AM'
    },
    {
        id: 3,
        name: '11:00AM'
    }
]

const [hour, setHour] = useState('')
    return(
        <ScrollView style={styles.container} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=>props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" style={{marginTop: 3, marginLeft: 3}}/>
            </TouchableOpacity>
            <Text appearance="hint" style={{fontWeight: '700', fontSize: 20, marginLeft: '25%'}}>Appointment</Text>
            </View>

            <Text style={{fontWeight: '700', marginTop: 14}} appearance='hint'>10 June, Monday</Text>

            <View style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10
            }}>
                
                <TouchableOpacity style={{
                    width: '45%',
                    height: 70,
                    backgroundColor: morning ? 'rgba(0,152,153,255)': 'white',
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10
                }} onPress={()=>setMorning(true)}>
                    <View style={styles.square}>
                    <Ionicons name="ios-sunny" size={24} color="rgba(0,152,153,255)" style={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}/>
                    </View>
                    <Text style={{marginLeft: 10, color: morning? 'white': 'gray'}} appearance="hint">Morning</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: '45%',
                    height: 70,
                    backgroundColor: !morning ? 'rgba(0,152,153,255)': 'white',
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10
                }} onPress={()=>setMorning(false)}>
                    <View style={styles.square}>
                    <Ionicons name="ios-partly-sunny" size={24} color="gray" style={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}/>
                    </View>
                    <Text style={{marginLeft: 10, color: !morning? 'white': 'gray'}} appearance="hint">Evening</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
                marginTop: 15
            }}>

                {hours.map(name =>{
                    return(
                        <TouchableOpacity style={{
                            backgroundColor: hour === name.id ? 'rgba(0,152,153,255)' :'white',
                            height: 40,
                            width: 100,
                            borderRadius: 10,
                            marginRight: 20
                        }} onPress={()=>setHour(name.id)}>
                            <Text style={{textAlign: 'center', marginTop: 7, color: hour === name.id ? 'white' :'gray',}}>{name.name}</Text>
                        </TouchableOpacity>
                    )
                })}
                
            </View>

            <Text style={{marginTop: 20, fontSize: 17, fontWeight: '700'}} appearance="hint">Fees information</Text>
            <View style={styles.doctorContent}>
                <View style={styles.square2}>
                <Ionicons name="call" size={24} color="rgba(0,152,153,255)" style={styles.icon}/>
                </View>
                <View>
                    <Text style={{fontSize: 20, fontWeight: '700'}} appearance="hint">Voice call</Text>
                    <Text appearance="hint">Can make a voice call with doctor</Text>
                </View>
                <Text style={{fontSize: 20, color: 'rgba(0,152,153,255)'}}>$200</Text>
            </View>

            <View style={styles.doctorContent}>
                <View style={styles.square2}>
                <MaterialIcons name="message" size={24} color="rgba(0,152,153,255)" style={styles.icon}/>
                </View>
                <View>
                    <Text style={{fontSize: 20, fontWeight: '700'}} appearance="hint">Messaging</Text>
                    <Text appearance="hint">Can message with doctor</Text>
                </View>
                <Text style={{fontSize: 20, color: 'rgba(0,152,153,255)'}}>$100</Text>
            </View>

            <View style={styles.doctorContent}>
                <View style={styles.square2}>
                <FontAwesome name="video-camera" size={24} color="rgba(0,152,153,255)" style={styles.icon}/>
                </View>
                <View>
                    <Text style={{fontSize: 20, fontWeight: '700'}} appearance="hint">Video call</Text>
                    <Text appearance="hint">Can make a video call with doctor</Text>
                </View>
                <Text style={{fontSize: 20, color: 'rgba(0,152,153,255)'}}>$250</Text>
            </View>

            <View style={styles.doctorContent}>
                <View style={styles.square2}>
                <FontAwesome5 name="home" size={24} color="rgba(0,152,153,255)" style={styles.icon}/>
                </View>
                <View>
                    <Text style={{fontSize: 20, fontWeight: '700'}} appearance="hint">House Visit</Text>
                    <Text appearance="hint">Doctor comes to your location</Text>
                </View>
                <Text style={{fontSize: 20, color: 'rgba(0,152,153,255)'}}>$400</Text>
            </View>

            <Button style={styles.button} onPress={()=>props.navigation.navigate("Payment")}>Payment Now</Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'transparent',
        flex: 1
    },
    arrowContainer:{
        width: 40,
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        
        
    },

    square:{
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: 'lightgray'
    },

    square2:{
        width: 40,
        height: 40,
        borderRadius: 5,
        backgroundColor: 'lightgray'
    },

    doctorContent:{
        width: '100%',
        height: 90,
        borderRadius: 20,
        borderColor: 'rgba(206,206,206,255)',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'space-between'
    },

    icon:{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto'
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