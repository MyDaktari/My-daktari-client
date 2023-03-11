import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { Button, Divider, Text } from "@ui-kitten/components"
import Doctor1 from '../assets/images/doctor1.jpg'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 


export default(props)=>{
    return(
        <ScrollView style={styles.container} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=>props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" style={{marginTop: 3, marginLeft: 3}}/>
            </TouchableOpacity>

            <Text style={styles.title}>Online appointments</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 30
            }}>
                <Image source={Doctor1} style={{
                    width: 100,
                    height: 100,
                    borderRadius: 100
                }}/>

                <View style={{
                    width: 250,
                    marginLeft: 12
                }}>
                    <Text style={styles.title}>Dr. Tierra Riley</Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '700'
                    }} appearance="hint">Cardiologist - Accra Medical College Hospital</Text>
                </View>
            </View>

            <Divider style={{
                backgroundColor: 'gray',
                height: 1.3,
                marginTop: 20
            }}/>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20
            }}>
                <View style={styles.square}>
                <Ionicons name="call" size={40} color="rgba(131,177,179,255)" style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto'
                }} />
                </View>

                <View style={styles.square}>
                <MaterialIcons name="message" size={40} color="rgba(0,152,153,255)" style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto'
                }} />
                </View>

                <View style={styles.square}>
                <FontAwesome name="video-camera" size={40} color="rgba(131,177,179,255)" style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto'
                }} />
                </View>

                <View style={{
                    width: 85,
                    height: 85,
                    borderRadius: 13,
                    backgroundColor: 'rgba(0,152,153,255)'
                }}>
                    <Ionicons name="md-alarm-outline" size={40} color="white" style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto'
                }} />
                </View>
            </View>

            <Divider style={{
                backgroundColor: 'gray',
                height: 1.3,
                marginTop: 20
            }}/>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20
            }}>
            <Ionicons name="time-outline" size={24} color="rgba(0,152,153,255)" />
            <Text style={{fontWeight: '700', marginLeft: 5}} appearance="hint">Visit time</Text>
            </View>
            <View style={{marginLeft: 25}}>
                <Text style={{color: 'rgba(0,152,153,255)', fontWeight: '700'}}>Morning</Text>
                <Text style={{color: 'rgba(0,152,153,255)', fontWeight: '700'}}>Today - 10 June, 2022</Text>
                <Text style={{color: 'rgba(0,152,153,255)', fontWeight: '700'}}>10:00 AM - 11:00 AM</Text>

            </View>

            <View style={{
                flexDirection: 'row',
                marginTop: 20,
                alignItems: 'center'
            }}>
            <Feather name="user" size={24} color="rgba(0,152,153,255)" />
            <Text style={{fontWeight: '700', marginLeft: 5}} appearance="hint">Patient information</Text>
            </View>

            <View style={{marginLeft: 25, width: '55%'}}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Text appearance="hint">Name</Text>
                    <Text appearance="hint">:</Text>
                    <Text style={{fontWeight: '700', color: 'gray'}}>John Doe</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Text appearance="hint">Age</Text>
                    <Text appearance="hint">:</Text>
                    <Text style={{fontWeight: '700', color: 'gray'}}>23</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Text appearance="hint">Phone</Text>
                    <Text appearance="hint">:</Text>
                    <Text style={{fontWeight: '700', color: 'gray'}}>+ 91 12345 67890</Text>
                </View>

            </View>

            <View style={{
                flexDirection: 'row',
                marginTop: 20,
                alignItems: 'center'
            }}>
            <FontAwesome5 name="dollar-sign" size={24} color="rgba(0,152,153,255)" />
            <Text style={{fontWeight: '700', marginLeft: 5}} appearance="hint">Fees information</Text>
            </View>

            <View style={{marginLeft: 25}}>
                <Text style={{color: "rgba(0,152,153,255)", fontWeight: '700'}}>Paid</Text>
                <Text style={{color: "rgba(0,152,153,255)", fontWeight: '700'}}>$ 5</Text>
            </View>

            <Button style={styles.button} onPress={()=>props.navigation.navigate("Review")}>Write a review</Button>

        </ScrollView>
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

    square:{
        width: 85,
        height: 85,
        borderRadius: 13,
        backgroundColor: 'rgba(211,223,223,255)'
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