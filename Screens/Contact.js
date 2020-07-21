import React from 'react';
import {View,Text,StyleSheet,Image,ScrollView,SafeAreaView} from 'react-native';

export default function Contact() {
    return (
       <SafeAreaView style={styles.screen}>
            <View style={styles.screen}>
        <View style={styles.cardView}>
             <Text style={styles.TitleText}>Head Office</Text>
             <Text>60/2,Igloo's Dream(2nd floor), Purana Paltan, Dhaka-1100</Text>
             <Text>Support: 01777786567</Text>
             <Text>Sales Contact:01944455043, 01944455034</Text>
        </View>
        <View style={styles.cardView}>
             <Text style={styles.TitleText}>Corporate Office</Text>
             <Text>Unity trade Center 3rd Floor Pollibiddut Bus Stand</Text>
             <Text>Nabinagar,Ashulia, Savar,Dhaka-1344</Text>
             <Text>Support:01777744299</Text>
             <Text style={{paddingBottom:5}}>Sales Contact:+8801944455012,+8801944455003</Text>
        </View>
        <View style={styles.cardView}>
             <Text style={styles.TitleText}>Uttara Office</Text>
             <Text>Hosue:-35,Sonargaon jonopath, Sector-7,Uttara</Text>
             <Text>Support:01962444999</Text>
             <Text>Sales Contact:+8801944455012,+8801944455003</Text>
        </View>
        <View style={styles.cardView}>
             <Text style={styles.TitleText}>Joydevpur Office</Text>
             <Text>Ikbal kutir,post office road,joydebpur,Gazipur</Text>
             <Text>Support:01944455011</Text>
             <Text style={{paddingBottom:5}}>Sales Contact:01944455011,+8801944455012</Text>
        </View>
        <View style={styles.cardView}>
       <Text style={styles.EText}>Emergency Contact</Text>
       <Text>If you don't get support within 1 hour Contact to</Text>
       <Text style={{fontSize:20}}>Support: 01777786560</Text>
       
  </View>
    </View>
 
       </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    cardView:{
        width:'100%',
        height:'22%',
        alignItems:'center',
        borderColor:'grey',
        borderWidth:1,
        borderRadius:10,
        marginVertical:5,
        marginHorizontal:5
    },
    TitleText:{
        fontSize:20,
        fontWeight:'bold',
        padding:5
    },EText:{
        fontSize:25,
        color:'red',
        fontWeight:'bold',
        padding:5
    }
})
