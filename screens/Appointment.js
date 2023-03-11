import { Layout, Text } from "@ui-kitten/components"
import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import Doctor1 from '../assets/images/doctor1.jpg'
import Doctor2 from '../assets/images/doctor2.jpg'
import Doctor3 from '../assets/images/doctor3.jpg'
import { Entypo } from '@expo/vector-icons';
import NoAppointment from '../assets/images/noAppointment.png' 

export default(props)=>{
    const [past, setPast] = useState(false)
    return(
        
        <Layout style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>My appointments</Text>
                <TouchableOpacity style={styles.add} onPress={()=>props.navigation.navigate("Doctors")}>
                <Ionicons name="add" size={35} color='rgba(0,152,153,255)' style={{alignSelf: 'center', marginTop: -2}}/>
                </TouchableOpacity>
            </View>
            <View style={styles.toggle}>
                {!past ? <>

                    <TouchableOpacity style={{
                    width: '50%',
                    backgroundColor: 'rgba(0,152,153,255)',
                    borderRadius: 10
                }}>
                    <Text style={{
                        marginTop: 14,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: '700'
                    }}>Upcoming</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: '50%',
                    
                    borderRadius: 10
                }} onPress={()=>setPast(true)}>
                    <Text style={{
                        marginTop: 14,
                        textAlign: 'center',
                        color: 'gray',
                        fontWeight: '700'
                    }}>Past</Text>
                </TouchableOpacity>
                </>: <>
                <TouchableOpacity style={{
                    width: '50%',
                    
                    borderRadius: 10
                }} onPress={()=>setPast(false)}>
                    <Text style={{
                        marginTop: 14,
                        textAlign: 'center',
                        color: 'gray',
                        fontWeight: '700'
                    }}>Upcoming</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: '50%',
                    backgroundColor: 'rgba(0,152,153,255)',
                    borderRadius: 10
                }}>
                    <Text style={{
                        marginTop: 14,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: '700'
                    }}>Past</Text>
                </TouchableOpacity>
                </>}
                
            </View>

            {!past ? 
            
            <ScrollView style={styles.content}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            >
                <Text style={{
                    fontWeight: '700'
                }} appearance="hint">Today - 10 June, 2020</Text>

                <TouchableOpacity style={styles.doctorContent} onPress={()=>props.navigation.navigate("SingleAppointment")}>
                    <View>
                        <Image source={Doctor1} style={styles.doctorImage}/>
                        <View style={styles.circle}>
                        <Ionicons name="call" size={20} color="white"
                        style={{
                            marginLeft: 4,
                            marginTop: 4
                        }}
                        />
                        </View>
                    </View>

                    <View style={{padding: 5, justifyContent: 'space-between', height: '100%', width: '76%'}}>
                        
                        <Text style={{fontWeight: "700", fontSize: 13, color: 'gray'}}>Voice Call <Text style={{fontWeight: "700", fontSize: 13, color: 'rgba(0,152,153,255)'}}>-Accepted</Text></Text>
                        <Text style={{fontSize: 20,
                        fontWeight: '700',
                        color: 'rgba(123,125,141,255)'
                        }}>Dr. Brycen Bradford</Text>
                        <Text appearance="hint">9:00 AM - 10.00 AM</Text>
                        
                    </View>

                </TouchableOpacity>


                <TouchableOpacity style={styles.doctorContent}>
                    <View>
                        <Image source={Doctor2} style={styles.doctorImage}/>
                        <View style={styles.circle}>
                        <Entypo name="chat" size={20} color="white"
                        style={{
                            marginLeft: 4,
                            marginTop: 4
                        }}
                        />
                        </View>
                    </View>

                    <View style={{padding: 5, justifyContent: 'space-between', height: '100%', width: '76%'}}>
                        
                        <Text style={{fontWeight: "700", fontSize: 13, color: 'gray'}}>Messaging <Text style={{fontWeight: "700", fontSize: 13, color: 'rgba(0,152,153,255)'}}>-In Progress</Text></Text>
                        <Text style={{fontSize: 20,
                        fontWeight: '700',
                        color: 'rgba(123,125,141,255)'
                        }}>Dr. Mahmud Nik Hasan</Text>
                        <Text appearance="hint">11:00 AM - 11.30 AM</Text>
                        
                    </View>

                </TouchableOpacity>


                <TouchableOpacity style={styles.doctorContent}>
                    <View>
                        <Image source={Doctor3} style={styles.doctorImage}/>
                        <View style={styles.circle}>
                        <Ionicons name="md-videocam" size={20} color="white"
                        style={{
                            marginLeft: 4,
                            marginTop: 4
                        }}
                        />
                        </View>
                    </View>

                    <View style={{padding: 5, justifyContent: 'space-between', height: '100%', width: '76%'}}>
                        
                        <Text style={{fontWeight: "700", fontSize: 13, color: 'gray'}}>Video Call <Text style={{fontWeight: "700", fontSize: 13, color: 'rgba(0,152,153,255)'}}>-Declined</Text></Text>
                        <Text style={{fontSize: 20,
                        fontWeight: '700',
                        color: 'rgba(123,125,141,255)'
                        }}>Dr. Tierra riley</Text>
                        <Text appearance="hint">09:00 AM - 10.00 AM</Text>
                        
                    </View>

                </TouchableOpacity>


                <Text style={{
                    fontWeight: '700',
                    marginTop: 10
                }} appearance="hint">Monday - 11 June, 2020</Text>

                <View style={styles.doctorContent}>
                    <View>
                        <Image source={Doctor1} style={styles.doctorImage}/>
                        <View style={styles.circle}>
                        <Ionicons name="call" size={20} color="white"
                        style={{
                            marginLeft: 4,
                            marginTop: 4
                        }}
                        />
                        </View>
                    </View>

                    <View style={{padding: 5, justifyContent: 'space-between', height: '100%', width: '76%'}}>
                        
                        <Text style={{fontWeight: "700", fontSize: 13, color: 'gray'}}>Voice Call <Text style={{fontWeight: "700", fontSize: 13, color: 'rgba(0,152,153,255)'}}>-Accepted</Text></Text>
                        <Text style={{fontSize: 20,
                        fontWeight: '700',
                        color: 'rgba(123,125,141,255)'
                        }}>Dr. Brycen Bradford</Text>
                        <Text appearance="hint">9:00 AM - 10.00 AM</Text>
                        
                    </View>

                </View>


                <View style={styles.doctorContent}>
                    <View>
                        <Image source={Doctor2} style={styles.doctorImage}/>
                        <View style={styles.circle}>
                        <Entypo name="chat" size={20} color="white"
                        style={{
                            marginLeft: 4,
                            marginTop: 4
                        }}
                        />
                        </View>
                    </View>

                    <View style={{padding: 5, justifyContent: 'space-between', height: '100%', width: '76%'}}>
                        
                        <Text style={{fontWeight: "700", fontSize: 13, color: 'gray'}}>Messaging <Text style={{fontWeight: "700", fontSize: 13, color: 'rgba(0,152,153,255)'}}>-In Progress</Text></Text>
                        <Text style={{fontSize: 20,
                        fontWeight: '700',
                        color: 'rgba(123,125,141,255)'
                        }}>Dr. Mahmud Nik Hasan</Text>
                        <Text appearance="hint">11:00 AM - 11.30 AM</Text>
                        
                    </View>

                </View>


                <View style={styles.doctorContent}>
                    <View>
                        <Image source={Doctor3} style={styles.doctorImage}/>
                        <View style={styles.circle}>
                        <Ionicons name="md-videocam" size={20} color="white"
                        style={{
                            marginLeft: 4,
                            marginTop: 4
                        }}
                        />
                        </View>
                    </View>

                    <View style={{padding: 5, justifyContent: 'space-between', height: '100%', width: '76%'}}>
                        
                        <Text style={{fontWeight: "700", fontSize: 13, color: 'gray'}}>Video Call <Text style={{fontWeight: "700", fontSize: 13, color: 'rgba(0,152,153,255)'}}>-Declined</Text></Text>
                        <Text style={{fontSize: 20,
                        fontWeight: '700',
                        color: 'rgba(123,125,141,255)'
                        }}>Dr. Tierra riley</Text>
                        <Text appearance="hint">09:00 AM - 10.00 AM</Text>
                        
                    </View>

                </View>
            </ScrollView>:
            <>
            <Image source={NoAppointment} style={{
                alignSelf: 'center',
                marginTop: 100
            }}/>
            <Text style={{
                textAlign: 'center',
                marginTop: 20,
                fontWeight: '700',
                color: 'gray',
                fontSize: 20
            }}>You have no appointment in past</Text>
            </>
            }

           
        </Layout>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'transparent'
    },
    content:{
        marginTop: 10,
        marginBottom: 95
    },
    title:{
        fontSize: 20,
        fontWeight: '700',
        color: 'rgba(123,125,141,255)',
        textAlign: 'center'
       
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '75%',
        alignSelf: 'flex-end'
    },
    add:{
        backgroundColor: 'white',
        borderRadius: 10,
        width: 35,
        height: 35,
        borderWidth: 1,
        borderColor: 'rgba(0,152,153,255)',
       
    },
    toggle:{
        backgroundColor: 'white',
        width: '100%',
        height: 60,
        marginTop: 16,
        borderRadius: 10,
        flexDirection: 'row'
    },
    doctorContent:{
        
            width: '100%',
            height: 130,
            borderRadius: 20,
            borderColor: 'rgba(206,206,206,255)',
            borderWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            backgroundColor: 'white',
            padding: 10
        
    },
    doctorImage:{
        width: 100,
        height: 100,
        borderRadius: 60
    },

    circle:{
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: 'rgba(0,152,153,255)',
        position: 'absolute',
        marginTop: 70,
        marginLeft: 70
    }
})