import { Layout, Text } from "@ui-kitten/components"
import { Dimensions, StyleSheet, StatusBar, View, Image, TouchableOpacity, Switch } from "react-native"
import Profile from '../assets/images/profile.jpeg'
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';    


export default(props)=>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return(
        <Layout style={{backgroundColor: 'transparent'}}>
            <View style={styles.header}>
                <Text style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 25,
                    fontWeight: '200'
                }}>Settings</Text>
                <View style={styles.profileContent}>
                    <Image
                    source={Profile}
                    style={styles.image}
                    />

                    <View>
                        <Text style={{
                            color: 'rgba(0,152,153,255)',
                            fontSize: 16
                        }}>Hello!</Text>
                        <Text style={{
                            color: 'rgba(0,152,153,255)',
                            fontSize: 20,
                            fontWeight: '700'
                        }}>John Doe</Text>
                    </View>

                    <TouchableOpacity style={styles.edit} onPress={()=>props.navigation.navigate("Profile")}>
                    <Ionicons name="pencil" size={24} color="rgba(0,152,153,255)" style={{marginLeft: 7, marginTop: 3}}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.parameter}>
                    <View style={styles.titleContent}>
                        <View style={styles.circle}>
                        <Ionicons name="notifications" size={24} color="rgba(0,152,153,255)" style={{marginLeft: 8, marginTop: 7}}/>
                        
                        </View>
                        <Text style={{fontWeight: '700', marginLeft: 10, fontSize: 16}} appearance="hint">Notification</Text>
                    </View>

                    <View style={styles.titleContent}>
                    <Text style={{fontWeight: '700', marginLeft: 10, fontSize: 16}} appearance="hint">{isEnabled? 'On': 'Off'}</Text>
                    <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

                    </View>
                </View>

                <View style={styles.parameter}>
                    <View style={styles.titleContent}>
                        <View style={styles.circle}>
                        <Fontisto name="language" size={24} color="rgba(0,152,153,255)" style={{marginLeft: 8, marginTop: 7}}/>
                        
                        </View>
                        <Text style={{fontWeight: '700', marginLeft: 10, fontSize: 16}} appearance="hint">Language</Text>
                    </View>

                    <View style={styles.titleContent}>
                    <Text style={{fontWeight: '700', marginRight: 10, fontSize: 16}} appearance="hint">English</Text>
                    <AntDesign name="right" size={16} color="gray" />

                    </View>
                </View>

                <TouchableOpacity style={styles.parameter} onPress={()=>props.navigation.navigate('Favourite')}>
                    <View style={styles.titleContent}>
                        <View style={styles.circle}>
                        <AntDesign name="heart" size={24} color="rgba(0,152,153,255)" style={{marginLeft: 8, marginTop: 7}}/>
                        
                        </View>
                        <Text style={{fontWeight: '700', marginLeft: 10, fontSize: 16}} appearance="hint">Favourite doctors</Text>
                    </View>

                    <View style={styles.titleContent}>
                    
                    <AntDesign name="right" size={16} color="gray" />

                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.parameter} onPress={()=>props.navigation.navigate('Faq')}>
                    <View style={styles.titleContent}>
                        <View style={styles.circle}>
                        <MaterialIcons name="question-answer" size={24} color="rgba(0,152,153,255)" style={{marginLeft: 8, marginTop: 7}}/>
                        
                        </View>
                        <Text style={{fontWeight: '700', marginLeft: 10, fontSize: 16}} appearance="hint">FAQs</Text>
                    </View>

                    <View style={styles.titleContent}>
                    
                    <AntDesign name="right" size={16} color="gray" />

                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.parameter} onPress={()=>props.navigation.navigate('Help')}>
                    <View style={styles.titleContent}>
                        <View style={styles.circle}>
                        <AntDesign name="questioncircle" size={24} color="rgba(0,152,153,255)" style={{marginLeft: 8, marginTop: 7}}/>
                        
                        </View>
                        <Text style={{fontWeight: '700', marginLeft: 10, fontSize: 16}} appearance="hint">Help</Text>
                    </View>

                    <View style={styles.titleContent}>
                    
                    <AntDesign name="right" size={16} color="gray" />

                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.logout} onPress={()=>props.navigation.navigate('Login')}>
                    <View style={{flexDirection: 'row', alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
                    <MaterialCommunityIcons name="logout" size={24} color="red" />
                <Text style={{color: 'red', fontWeight: '700', fontSize: 17}}>Logout</Text>
                    </View>
                
                </TouchableOpacity>
            </View>
        </Layout>
    )

}


const styles= StyleSheet.create({
    header:{
        backgroundColor: 'rgba(0,152,153,255)',
        width: Dimensions.get("screen").width,
        height: 160,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        padding: 20,
        paddingTop: StatusBar.currentHeight + 7
    },
    container:{
        padding: 20,
        marginTop: 40
        
    },
    profileContent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 100,
        borderRadius: 10,
        marginTop: 20,
        padding: 14
    },
    image:{
        borderRadius: 10,
        width: 80,
        height: 80
    },
    edit:{
        width: 35,
        height: 35,
        backgroundColor: 'rgba(179,223,224,255)',
        borderRadius: 5,
        
    },

    parameter:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
        marginBottom: 16
    },

    circle:{
        width: 40,
        height: 40,
        backgroundColor: 'rgba(179,223,224,255)',
        borderRadius: 40,
    },
    titleContent:{
        flexDirection: 'row',
        alignItems: 'center'
    },

    logout:{
        backgroundColor: 'rgba(236,213,219,255)',
        borderColor: 'red',
        borderWidth: 1,
        width: '100%',
        height: 55,
        borderRadius: 10,
        marginTop: 100,
        flexDirection: 'row',
        alignItems: 'center',
        
    }

})