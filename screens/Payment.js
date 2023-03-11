import { ScrollView, StatusBar, StyleSheet, View, TouchableOpacity, Image, Dimensions } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { Button, Input, Text } from "@ui-kitten/components"
import MasterCard from '../assets/images/mastercard.png'
import { Feather } from '@expo/vector-icons';
import Dialog from "react-native-dialog";
import { useState } from "react";
import { Entypo } from '@expo/vector-icons'; 
 

export default(props)=>{
    const [visible, setVisible] = useState(false);
    return(
        <>
        {visible? <View style={styles.dialog}>
            <View style={styles.square}>
                <View style={styles.circle}>

                </View>
            <Entypo name="home" size={70} color="rgba(0,152,153,255)" style={{
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
            }} onPress={()=>props.navigation.navigate('Root')}>Contact Doctor</Button>
        </View>:null}
        
        <ScrollView style={styles.container}>
             
            <View style={{flexDirection: 'row', alignItems:'center'}}>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=>props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" style={{marginTop: 3, marginLeft: 3}}/>
            </TouchableOpacity>
            <Text appearance="hint" style={{fontWeight: '700', fontSize: 20, marginLeft: '25%'}}>Payment</Text>
            </View>

            <View style={styles.card}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={{fontWeight: '700', color: 'white', fontSize: 18}}>Bank Card</Text>
                    <Image source={MasterCard}/>
                </View>

                <Text style={{
                    color: 'white',
                    marginTop: 50
                }}>XXXX  XXXX  XXX  5873</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 30
                }}>
                    <Text style={{fontWeight: '700', color: 'white', fontSize: 18}}>John Doe</Text>

                    <Text style={{fontWeight: '700', color: 'white', fontSize: 18}}>01/23</Text>
                    
                </View>
            </View>

            <Text appearance="hint" style={{textAlign: 'center'}}>By adding debit / credit card, you agree to the <Text style={{color: 'rgba(0,152,153,255)'}}>Terms & Conditions</Text></Text>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 30
            }}>
                <Feather name="user" size={24} color="rgba(0,152,153,255)" />
                <Text appearance="hint" style={{fontSize: 17, marginLeft: 10}}>Name</Text>
            </View>

            <Input style={styles.input} placeholder="Enter card holder full name"/>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20
            }}>
                <AntDesign name="creditcard" size={24} color="rgba(0,152,153,255)" />
                <Text appearance="hint" style={{fontSize: 17, marginLeft: 10}}>Card number</Text>
            </View>

            <Input style={styles.input} placeholder="Enter card number"/>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                width: '100%',
                justifyContent: 'space-between'
            }}>
                <View style={{
                width: '49%'
            }}>
                 <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20
            }}>
                <AntDesign name="creditcard" size={24} color="rgba(0,152,153,255)" />
                <Text appearance="hint" style={{fontSize: 17, marginLeft: 10}}>Expiry Date</Text>
            </View>

            <Input style={styles.input} placeholder="DD - MM - YYYY"/>
            </View>

            <View style={{
                width: '49%'
            }}>
                 <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20
            }}>
                <AntDesign name="creditcard" size={24} color="rgba(0,152,153,255)" />
                <Text appearance="hint" style={{fontSize: 17, marginLeft: 10}}>CVV</Text>
            </View>

            <Input style={styles.input} placeholder="Enter CVV number"/>
            </View>
            </View>

            <Button style={styles.button} onPress={()=>setVisible(true)}>Continue</Button>
        </ScrollView>
        </>
        
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: StatusBar.currentHeight,
        padding: 20,
        backgroundColor: 'transparent'
    },
    arrowContainer:{
        width: 40,
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        
        
    },

    card:{
        backgroundColor: 'rgba(0,152,153,255)',
        width: '100%',
        height: 240,
        marginTop: 30,
        borderRadius: 20,
        padding: 30
    },

    input:{
        marginTop: 10,
        backgroundColor: 'transparent',
        borderBottomColor: 'gray',
        
    },

    button:{
        height: 55,
        marginTop: 80,
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