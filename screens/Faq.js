import { ScrollView, StyleSheet, StatusBar, Dimensions, TouchableOpacity, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { Text } from "@ui-kitten/components"

export default(props)=>{
    return(
        <ScrollView style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=>props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" style={{marginTop: 3, marginLeft: 3}}/>
            </TouchableOpacity>

            <Text style={styles.title}>FAQs</Text>

            
            </View>

            <View style={{marginTop: 20}}>
                <TouchableOpacity style={styles.questionContent}>
                    <View style={{
                        width: '95%'
                    }}>
                        <Text style={{
                            color: 'gray'
                        }}>Are there any type of doctors who are not included in DoctorPoint Pro consultation network?</Text>
                    </View>
                    
                    <AntDesign name="right" size={24} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.questionContent}>
                    <View style={{
                        width: '95%'
                    }}>
                        <Text style={{
                            color: 'gray'
                        }}>How do the unlimited online conslutations work?</Text>
                    </View>
                    
                    <AntDesign name="right" size={24} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.questionContent}>
                    <View style={{
                        width: '95%'
                    }}>
                        <Text style={{
                            color: 'gray'
                        }}>How many online consultations can I use?</Text>
                    </View>
                    
                    <AntDesign name="right" size={24} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.questionContent}>
                    <View style={{
                        width: '95%'
                    }}>
                        <Text style={{
                            color: 'gray'
                        }}>Will family members can able to use my account?</Text>
                    </View>
                    
                    <AntDesign name="right" size={24} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.questionContent}>
                    <View style={{
                        width: '95%'
                    }}>
                        <Text style={{
                            color: 'gray'
                        }}>How many members can be part of one DoctorPoint Pro Membership?</Text>
                    </View>
                    
                    <AntDesign name="right" size={24} color="gray" />
                </TouchableOpacity>

                
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

    arrowContainer:{
        width: 40,
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        backgroundColor: 'transparent',
        borderRadius: 10,
        marginRight: Dimensions.get("screen").width /3
    },

    questionContent:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 30
    }
})