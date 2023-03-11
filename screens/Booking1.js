import { Layout, Text, Input, Radio, Button } from "@ui-kitten/components"
import { Dimensions, StatusBar, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"
import { useState } from "react"
import { MaterialIcons } from '@expo/vector-icons'; 


export default(props)=>{

    

    const age = [
        {
            id:1,
            age: '10+'
        },

        {
            id:2,
            age: '20+'
        },

        {
            id:3,
            age: '30+'
        },

        {
            id:4,
            age: '40+'
        }
    ]

    const [ageSelected, setAgeSelected] = useState('')
    
    return(
        <Layout style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=>props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" style={{marginTop: 3, marginLeft: 3}}/>
            </TouchableOpacity>
            <Text style={styles.title}>Patient's details</Text>
            </View>

            <View style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                    marginTop: 16
                }}>
                    <Feather name="user" size={24} color="rgba(0,152,153,255)" />
                    <Text style={{marginLeft: 10, color: 'gray'}}>Name</Text>
                </View>
                <Input style={styles.input} placeholder="John Doe"/>

                <View style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                    marginTop: 16
                }}>
                    <AntDesign name="calendar" size={24} color="rgba(0,152,153,255)" />
                    <Text style={{marginLeft: 10, color: 'gray'}}>Select your age range or type</Text>
                </View>

                <View>
                <ScrollView style={{
                    marginTop: 20,
                   
                    
                    
                }} horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

                    {age.map(user =>{
                        return(
                            <TouchableOpacity style={{
                                backgroundColor: ageSelected===user.id ? "rgba(0,152,153,255)":  'white',
                                width: 100,
                                height: 100,
                                borderRadius: 100,
                                marginRight: 10
                            }} key={user.id} onPress={()=> setAgeSelected(user.id)}>
                    <Text style={{
                        textAlign: 'center',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        fontSize: 22,
                        color: ageSelected===user.id ? "white":  'gray',
                    }}>{user.age}</Text>
                    </TouchableOpacity>
                        )
                    })}
                    
                </ScrollView>
                </View>
                
                
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                    marginTop: 16
                }}>
                    <MaterialIcons name="phone-in-talk" size={24} color="rgba(0,152,153,255)" />
                    <Text style={{marginLeft: 10, color: 'gray'}}>Phone number</Text>
                </View>
                <Input style={styles.input} placeholder="+91   Enter your phone number"/>

                <View style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                    marginTop: 16
                }}>
                    <AntDesign name="calendar" size={24} color="rgba(0,152,153,255)" />
                    <Text style={{marginLeft: 10, color: 'gray'}}>Gender</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                    marginTop: 16
                }}>
                    <Radio>Male</Radio>
                    <Radio>Female</Radio>
                </View>

                <Text style={{marginTop: 10, fontSize: 16}} appearance="hint">Please describe your symptoms</Text>
                <Input multiline={true} textStyle={{ minHeight: 110, backgroundColor: 'transparent' }} placeholder="Enter Description..." style={{borderColor: 'lightgray'}}/>
                <Button onPress={()=>props.navigation.navigate("Booking2")} style={styles.button}>Next 1/4</Button>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        minHeight: Dimensions.get("screen").height,
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
        marginRight: Dimensions.get("screen").width /5
    },

    input:{
        borderBottomColor: 'gray',
        
        backgroundColor: 'transparent'
    },

    circle:{
        backgroundColor: 'white',
        width: 100,
        height: 100,
        borderRadius: 100,
        marginRight: 10
    },
    button:{
        height: 55,
        marginTop: 60,
        marginBottom: 70,
        backgroundColor: 'rgba(0,152,153,255)',
        borderRadius: 10,
        borderColor: 'transparent'
    }
})