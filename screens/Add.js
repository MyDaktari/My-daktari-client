import { Layout, Text } from "@ui-kitten/components"
import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import Doctor1 from '../assets/images/doctor1.jpg'
import Doctor2 from '../assets/images/doctor2.jpg'
import Doctor3 from '../assets/images/doctor3.jpg'
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store'
import { useState, useEffect } from "react";


export default(props)=>{

    const url = 'http://192.168.0.108:3000/patient/doctor'

    const [doctor, setDoctor] = useState('')

    const getDoctors = async()=>{
        try {
            
            fetch(`${url}`,{
                method: 'GET',
                
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${ await SecureStore.getItemAsync('token')}`
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
            }).then(json=>{
                
                console.log(json.doctor)
                setDoctor(json.doctor)
                
                
                
            }).catch(err=>{
                
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        getDoctors()
    },[])

    return(

        <Layout style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=>props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" style={{marginTop: 3, marginLeft: 3}}/>
            </TouchableOpacity>

            <Text style={styles.title}>Top Doctors</Text>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
            style={{marginBottom: 30}}
            >
                {doctor.length > 0 ? <>
                {doctor.map(detail =>{
                    return(
                        <TouchableOpacity style={styles.doctorContent} onPress={()=>props.navigation.navigate('SingleDoctor', {name: detail.fullName})} key={detail._id}>
                    <Image style={styles.doctorImage} source={Doctor2}/>
                    <View style={{padding: 5, justifyContent: 'space-between', height: '100%', width: '76%'}}>
                        <Text style={styles.title}>{detail.fullName}</Text>
                        <Text appearance="hint" style={{fontWeight: "700", fontSize: 13}}>{detail.speciality}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="ios-star-half" size={15} color="orange" />
                        <Text appearance="hint">4.9 (37 Reviews)</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                    )
                })}
                </>:null}
                

            </ScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container:{
    padding: 20,
    backgroundColor: 'transparent',
    paddingTop: StatusBar.currentHeight
    },
    title:{
        fontSize: 20,
        fontWeight: '700',
        color: 'rgba(123,125,141,255)',
       
    },
    doctorContent:{
        width: Dimensions.get("screen").width - 40,
        height: 130,
        borderRadius: 20,
        borderColor: 'rgba(206,206,206,255)',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'white',
        padding: 10
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
    doctorImage:{
        width: 100,
        height: 100,
        borderRadius: 60
    }
})