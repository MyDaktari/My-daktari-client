import { ScrollView, StatusBar, StyleSheet, View, TouchableOpacity, Dimensions, Image } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { Text } from "@ui-kitten/components"
import Doctor1 from '../assets/images/doctor1.jpg'
import Doctor2 from '../assets/images/doctor2.jpg'
import Doctor3 from '../assets/images/doctor3.jpg'


export default(props)=>{
    return(
        <ScrollView style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=>props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" style={{marginTop: 3, marginLeft: 3}}/>
            </TouchableOpacity>

            <Text style={styles.title}>Favourite Doctors</Text>
            </View>

            <View style={{marginTop: 20}}>
            <View style={styles.doctorContent}>
                <Image style={styles.doctorImage} source={Doctor1}/>

                <View style={{
                    width: '75%',
                    marginLeft: 10
                }}>
                    <Text style={{...styles.title, fontSize: 17}}>Dr. Mahmud Nik Hassan</Text>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: '700'
                    }} appearance="hint">Therapist - Surat Medical City Medical College Hospital</Text>
                </View>

                <View style={styles.heartContent}>
                <AntDesign name="heart" size={24} color="white" style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto'
                }}/>
                </View>
            </View>

            <View style={styles.doctorContent}>
                <Image style={styles.doctorImage} source={Doctor2}/>

                <View style={{
                    width: '75%',
                    marginLeft: 10
                }}>
                    <Text style={{...styles.title, fontSize: 17}}>Dr. Jane Cooper</Text>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: '700'
                    }} appearance="hint">Heart Surgeon - SuratMedical College Hospital</Text>
                </View>

                <View style={styles.heartContent}>
                <AntDesign name="heart" size={24} color="white" style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto'
                }}/>
                </View>
            </View>

            <View style={styles.doctorContent}>
                <Image style={styles.doctorImage} source={Doctor3}/>

                <View style={{
                    width: '75%',
                    marginLeft: 10
                }}>
                    <Text style={{...styles.title, fontSize: 17}}>Dr. Brycen Bradford</Text>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: '700'
                    }} appearance="hint">Therapist - Surat Medical City Medical College Hospital</Text>
                </View>

                <View style={styles.heartContent}>
                <AntDesign name="heart" size={24} color="white" style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto'
                }}/>
                </View>
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'transparent'
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
        padding: 10,
        
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
    },
    heartContent:{
        backgroundColor: 'rgba(0,152,153,255)',
        width: 40,
        height: 40,
        position: 'absolute',
        
        top: 0,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        right: 0

    }
})