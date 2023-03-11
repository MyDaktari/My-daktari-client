import { ScrollView, StyleSheet, TouchableOpacity, View, StatusBar, Dimensions, Image } from "react-native"
import { Text, Input, Button } from "@ui-kitten/components"
import { AntDesign } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import Profile from '../assets/images/profile.jpeg'
import { Feather } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import {SelectList} from "react-native-dropdown-select-list";
import { useState } from "react"
import { useTheme } from "@react-navigation/native"
import { FontAwesome5 } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"

export default(props)=>{
    const [selected, setSelected] = useState("");
    const data = ["MALE", "FEMALE", "OTHER"];
    const {colors} = useTheme()
    return(
        <ScrollView style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=>props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" style={{marginTop: 3, marginLeft: 3}}/>
            </TouchableOpacity>

            <Text style={styles.title}>Edit profile</Text>
            </View>

            <View style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 20
            }}>
                <View style={styles.circle}>
                <AntDesign name="camera" size={23} color="white" style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto'
                }}/>
                </View>
            <Image source={Profile} style={{
                width: 130,
                height: 130,
                borderRadius: 20
            }}/>
            </View>

            

                <View style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                    marginTop: 16
                }}>
                    <Feather name="user" size={24} color="rgba(0,152,153,255)" />
                    <Text appearance="hint" style={{marginLeft: 10}}>Name</Text>
                </View>
                <Input style={styles.input} placeholder="John Doe"/>

                <View style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                    marginTop: 16
                }}>
                    <MaterialIcons name="phone-in-talk" size={24} color="rgba(0,152,153,255)" />
                    <Text appearance="hint" style={{marginLeft: 10}}>Phone number</Text>
                </View>
                <Input style={styles.input} keyboardType="phone-pad" placeholder="+91  12345 67890"/>

                <View style={{
                    flexDirection: 'row',
                    marginTop: 16
                }}>
                    <FontAwesome name="envelope-o" size={24} color="rgba(0,152,153,255)" />
                    <Text appearance="hint" style={{marginLeft: 10}}>Email</Text>
                </View>
                <Input style={styles.input} placeholder="johndoe@gmail.com"/>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    marginBottom: 10
                }}>
                    <Feather name="users" size={24} color="rgba(0,152,153,255)" />
                    <Text appearance="hint" style={{marginLeft: 10}}>Gender</Text>
                </View>
                <SelectList
							setSelected={setSelected}
							data={data}
							search={false}
							boxStyles={{ borderRadius: 5}}
							inputStyles={{color: colors.text}}
							arrowicon={<FontAwesome name="chevron-down" size={12} color={colors.text} />}
							dropdownTextStyles={{color: colors.text}} 
							
						/>

            <View style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    marginBottom: 10
                }}>
                    <FontAwesome5 name="calendar" size={24} color="rgba(0,152,153,255)" />
                    <Text appearance="hint" style={{marginLeft: 10}}>Calendar</Text>
                </View>
                <Input style={styles.input} placeholder="12 September, 1999"/>

                <View style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    marginBottom: 10
                }}>
                    <Ionicons name="ios-location-outline" size={24} color="rgba(0,152,153,255)" />
                    <Text appearance="hint" style={{marginLeft: 10}}>Address</Text>
                </View>
                <Input style={styles.input} placeholder="Lal darwaja, Surat"/>

                <Button style={styles.button} onPress={()=>props.navigation.navigate('Settings')}>Save</Button>
            
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

    circle:{
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: 'rgba(0,152,153,255)',
        position: 'absolute',
        zIndex: 999,
        marginLeft: 110,
        marginTop: -10
    },
    input:{
        borderBottomColor: 'gray',
        
        backgroundColor: 'transparent'
    },
    button:{
        height: 55,
        marginTop: 70,
        marginBottom: 70,
        backgroundColor: 'rgba(0,152,153,255)',
        borderRadius: 10,
        borderColor: 'transparent'
    },
})