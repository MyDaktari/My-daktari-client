import { Layout, Text, Input } from "@ui-kitten/components"
import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import Doctor1 from '../assets/images/doctor1.jpg'
import Doctor2 from '../assets/images/doctor2.jpg'
import Doctor3 from '../assets/images/doctor3.jpg'
import { Ionicons } from '@expo/vector-icons';  
import { FontAwesome } from '@expo/vector-icons';


export default(props)=>{
    return(

        <Layout style={styles.container}>
            <Input style={styles.search} size="large" placeholder="Search doctor, categories, topic ..." accessoryRight={()=><FontAwesome name="search" size={24} color="rgba(0,152,153,255)" />}/>
            <Text style={styles.firstTitle}>View Favourite Doctors</Text>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
            style={{marginBottom: 75}}
            >
                <View style={styles.doctorContent}>
                    <Image style={styles.doctorImage} source={Doctor1}/>
                    <View style={{padding: 5, justifyContent: 'space-between', height: '100%', width: '76%'}}>
                        <Text style={styles.title}>Dr. Mahmud Nik Hasan</Text>
                        <Text appearance="hint" style={{fontWeight: "700", fontSize: 13}}>Therapist - Surat Medical City Medical College Hospital</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="ios-star-half" size={15} color="orange" />
                        <Text appearance="hint">4.9 (37 Reviews)</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.doctorContent}>
                    <Image style={styles.doctorImage} source={Doctor2}/>
                    <View style={{padding: 5, justifyContent: 'space-between', height: '100%', width: '76%'}}>
                        <Text style={styles.title}>Dr. Jane Cooper</Text>
                        <Text appearance="hint" style={{fontWeight: "700", fontSize: 13}}>Therapist - Surat Medical City Medical College Hospital</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="ios-star-half" size={15} color="orange" />
                        <Text appearance="hint">4.9 (37 Reviews)</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.doctorContent}>
                    <Image style={styles.doctorImage} source={Doctor3}/>
                    <View style={{padding: 5, justifyContent: 'space-between', height: '100%', width: '76%'}}>
                        <Text style={styles.title}>Dr. Brycen Bradford</Text>
                        <Text appearance="hint" style={{fontWeight: "700", fontSize: 13}}>Therapist - Surat Medical City Medical College Hospital</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="ios-star-half" size={15} color="orange" />
                        <Text appearance="hint">4.9 (37 Reviews)</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.doctorContent}>
                    <Image style={styles.doctorImage} source={Doctor1}/>
                    <View style={{padding: 5, justifyContent: 'space-between', height: '100%', width: '76%'}}>
                        <Text style={styles.title}>Dr. Mahmud Nik Hasan</Text>
                        <Text appearance="hint" style={{fontWeight: "700", fontSize: 13}}>Therapist - Surat Medical City Medical College Hospital</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="ios-star-half" size={15} color="orange" />
                        <Text appearance="hint">4.9 (37 Reviews)</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.doctorContent}>
                    <Image style={styles.doctorImage} source={Doctor2}/>
                    <View style={{padding: 5, justifyContent: 'space-between', height: '100%', width: '76%'}}>
                        <Text style={styles.title}>Dr. Jane Cooper</Text>
                        <Text appearance="hint" style={{fontWeight: "700", fontSize: 13}}>Therapist - Surat Medical City Medical College Hospital</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="ios-star-half" size={15} color="orange" />
                        <Text appearance="hint">4.9 (37 Reviews)</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.doctorContent}>
                    <Image style={styles.doctorImage} source={Doctor3}/>
                    <View style={{padding: 5, justifyContent: 'space-between', height: '100%', width: '76%'}}>
                        <Text style={styles.title}>Dr. Brycen Bradford</Text>
                        <Text appearance="hint" style={{fontWeight: "700", fontSize: 13}}>Therapist - Surat Medical City Medical College Hospital</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="ios-star-half" size={15} color="orange" />
                        <Text appearance="hint">4.9 (37 Reviews)</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.doctorContent}>
                    <Image style={styles.doctorImage} source={Doctor1}/>
                    <View style={{padding: 5, justifyContent: 'space-between', height: '100%', width: '76%'}}>
                        <Text style={styles.title}>Dr. Mahmud Nik Hasan</Text>
                        <Text appearance="hint" style={{fontWeight: "700", fontSize: 13}}>Therapist - Surat Medical City Medical College Hospital</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="ios-star-half" size={15} color="orange" />
                        <Text appearance="hint">4.9 (37 Reviews)</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.doctorContent}>
                    <Image style={styles.doctorImage} source={Doctor2}/>
                    <View style={{padding: 5, justifyContent: 'space-between', height: '100%', width: '76%'}}>
                        <Text style={styles.title}>Dr. Jane Cooper</Text>
                        <Text appearance="hint" style={{fontWeight: "700", fontSize: 13}}>Therapist - Surat Medical City Medical College Hospital</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="ios-star-half" size={15} color="orange" />
                        <Text appearance="hint">4.9 (37 Reviews)</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.doctorContent}>
                    <Image style={styles.doctorImage} source={Doctor3}/>
                    <View style={{padding: 5, justifyContent: 'space-between', height: '100%', width: '76%'}}>
                        <Text style={styles.title}>Dr. Brycen Bradford</Text>
                        <Text appearance="hint" style={{fontWeight: "700", fontSize: 13}}>Therapist - Surat Medical City Medical College Hospital</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="ios-star-half" size={15} color="orange" />
                        <Text appearance="hint">4.9 (37 Reviews)</Text>
                        </View>
                    </View>
                </View>
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
    },
    firstTitle:{
        color: 'rgba(0,152,153,255)',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 10
    }
})