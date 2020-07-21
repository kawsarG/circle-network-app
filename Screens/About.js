import React from 'react';
import { View,StyleSheet,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default function About({navigation}) {
    return (
       <View style={styles.screen}>
           <View style={styles.screen}>
          
           <View style={styles.about}>
               <View style={{alignItems:'center'}}>
                   <Text  style={styles.TitleText}>Welcome to Circle Network</Text>
                </View>
               <Text style={{fontSize:17}}>Circle Network Limited (CNL) is one of the leading Nationwide ISP in Bangladesh. Circle Network providing best quality Bandwidth in all over the country with prosper and goodwill. There are 37 District and 250 Upozila in our Coverage area. We have GGC server, Facebook server and much more useful content with Bangladesh Largest FTP server with huge content including IP Tv for customer satisfaction. Our highly qualified experience and hardworking largest support team working for marvelous support and showing their dedication to work. So you are also invited to our circle family to be the honorable and pioneer client of Circle Network.</Text>
           </View>
           </View>
           <View style={styles.copy}>
               <Image style={{height:30,width:30}} source={require('../Assets/images/copy.png')}></Image>
               <Text >Copyright 2013 - 2020 | All Rights Reserved </Text>
           </View>
           <Text style={{paddingBottom:10}}>www.circlenetworkbd.net</Text>
       </View>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
    },
    img:{width:'100%',
    height:'25%'},
    about:{
        width:'100%',
        height:'50%',
        paddingHorizontal:15,
        paddingVertical:15,
    },
    TitleText:{
        fontSize:20,
        fontWeight:'bold',
        padding:5,
        paddingBottom:20
    },
    
    copy:{
        marginHorizontal:20,
        flexDirection:'row',
    }
})

