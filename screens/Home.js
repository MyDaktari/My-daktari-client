import { Button, Input, Text } from "@ui-kitten/components"
import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native"
import Profile from '../assets/images/profile.jpeg'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Doctor1 from '../assets/images/doctor1.jpg'
import Doctor2 from '../assets/images/doctor2.jpg'
import Doctor3 from '../assets/images/doctor3.jpg'      

export default(props)=>{
    return(
        <ScrollView style={{
            backgroundColor: 'rgba(235,235,235,255)'
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
            <View style={styles.header}>
                <View style={styles.profileContent}>
                    <Image source={Profile} style={styles.image}/>
                    <View>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: '700',
                            color: 'rgba(0,152,153,255)'
                        }}>John Doe</Text>
                        <Text appearance="hint">Find your suitable doctor here</Text>
                    </View>
                    <Ionicons name="notifications" size={24} color="rgba(0,152,153,255)" />
                </View>
                <Input style={styles.search} size="large" placeholder="Search doctor, categories, topic ..." accessoryRight={()=><FontAwesome name="search" size={24} color="rgba(0,152,153,255)" />}/>
            </View>
            <View style={styles.container}>
            <Text style={styles.title}>Specialist</Text>

            <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={true}
            style={{
                marginTop: 10
            }}
            >
                <TouchableOpacity style={styles.specialistContainer} onPress={()=>props.navigation.navigate("Doctors")}>
                <AntDesign name="hearto" size={80} color="rgba(0,152,153,255)" />
                <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'center'}}>Cardio Specialist</Text>
                <Text appearance="hint" style={{textAlign: 'center'}}>27 Doctors</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.specialistContainer} onPress={()=>props.navigation.navigate("Doctors")}>
                <FontAwesome name="heartbeat" size={80} color="rgba(0,152,153,255)" />
                <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'center'}}>Heart Issue</Text>
                <Text appearance="hint" style={{textAlign: 'center'}}>43 Doctors</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.specialistContainer} onPress={()=>props.navigation.navigate("Doctors")}>
                <FontAwesome5 name="tooth" size={80} color="rgba(0,152,153,255)" />
                <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'center'}}>Dental Care</Text>
                <Text appearance="hint" style={{textAlign: 'center'}}>19 Doctors</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.specialistContainer} onPress={()=>props.navigation.navigate("Doctors")}>
                <FontAwesome name="wheelchair" size={80} color="rgba(0,152,153,255)" />
                <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'center'}}>Physico Therapy</Text>
                <Text appearance="hint" style={{textAlign: 'center'}}>7 Doctors</Text>
                </TouchableOpacity>
            </ScrollView>

            <Text style={styles.title}>Get Care</Text>
            <Button
            style={{
                marginTop: 10,
                height: 60,
                borderColor: 'transparent',
                backgroundColor: 'rgba(0,152,153,255)',
                borderRadius: 10,
                
            }}
            onPress={()=>props.navigation.navigate("Booking1")}
            >Request a Doctors Appointment</Button>

            <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={true}
            style={{
                marginTop: 20
            }}
            >
                <View style={styles.issueContainer}>
                    <Text style={styles.title}>Cardio issues?</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <View style={styles.line}>

                        </View>
                        <Text appearance="hint" style={{textAlign: 'center', fontWeight: '600'}}>For cardio patient here can easily contact with doctor, can chat & live chat.</Text>

                    </View>
                </View>

                <View style={styles.issueContainer}>
                    <Text style={styles.title}>Dental Treatments</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <View style={styles.line}>

                        </View>
                        <Text appearance="hint" style={{textAlign: 'center', fontWeight: '600'}}>For Dental patient here can easily contact with doctor, can chat & live chat.</Text>

                    </View>
                </View>

            </ScrollView>

            <TouchableOpacity style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10
                
            }} onPress={()=>props.navigation.navigate("Add")}>
                <Text style={styles.title}>Top doctors</Text>
                <Text appearance="hint" style={{fontWeight: '700'}}>View all</Text>
            </TouchableOpacity>

            <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={true}
            style={{
                marginTop: 10
            }}
            >
                <TouchableOpacity style={styles.doctorContent} onPress={()=>props.navigation.navigate("Add")}>
                    <Image source={Doctor1} style={styles.doctorImage}/>
                    <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'center'}}>Dr. Esther Noi</Text>
                <Text appearance="hint" style={{textAlign: 'center'}}>Heart Surgeron</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.doctorContent} onPress={()=>props.navigation.navigate("Add")}>
                    <Image source={Doctor2} style={styles.doctorImage}/>
                    <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'center'}}>Dr. Daniela M</Text>
                <Text appearance="hint" style={{textAlign: 'center'}}>Cardio Surgeron</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.doctorContent} onPress={()=>props.navigation.navigate("Add")}>
                    <Image source={Doctor3} style={styles.doctorImage}/>
                    <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'center'}}>Dr. Carmen H</Text>
                <Text appearance="hint" style={{textAlign: 'center'}}>Dental</Text>
                </TouchableOpacity>
            </ScrollView>
            </View>

            
            
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        padding: 20,
        marginTop: 20
        
    },
    header:{
        backgroundColor: 'rgba(210,234,234,255)',
        width: Dimensions.get("screen").width,
        height: 160,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        padding: 20,
        paddingTop: StatusBar.currentHeight + 7
    },
    profileContent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image:{
        borderRadius: 10,
        width: 50,
        height: 50
    },
    search:{
        borderRadius: 10,
        marginTop: 37
    },
    title:{
        fontSize: 20,
        fontWeight: '700',
        color: 'rgba(123,125,141,255)',
        marginTop: 10
    },
    specialistContainer:{
        backgroundColor: 'white',
        width: 130,
        height: 160,
        borderRadius: 20,
        borderColor: 'rgba(206,206,206,255)',
        borderWidth: 1,
        alignContent: 'center',
        alignItems: 'center',
        marginRight: 16,
        
    },
    issueContainer:{
        backgroundColor: 'white',
        width: Dimensions.get("screen").width /1.5,
        height: 160,
        borderRadius: 20,
        borderColor: 'rgba(206,206,206,255)',
        borderWidth: 1,
        padding: 10,
        marginRight: 16,
    },
    line:{
        width: 3,
        backgroundColor: 'rgba(0,152,153,255)',
        height: 100
    },
    doctorContent:{
        backgroundColor: 'white',
        width: 190,
        height: 290,
        borderRadius: 20,
        borderColor: 'rgba(206,206,206,255)',
        borderWidth: 1,
        padding: 10,
        marginRight: 16,
        alignContent: 'center',
        alignItems: 'center',
    },
    doctorImage:{
        width: 170,
        height: 200,
        borderRadius: 30
    }
})