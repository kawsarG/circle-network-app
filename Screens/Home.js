import React from 'react';
import {View,Text, StyleSheet,Button, Dimensions,Image,TouchableOpacity} from 'react-native';



const {width,height} = Dimensions.get('window');

export default function Home({navigation}) {
    const onPress=()=>{
        navigation.navigate('LiveTv');
    }
    return (
        <View style={styles.screen}>
            <View style={styles.row}>
                <Image source={require('../Assets/images/cn4.png')} style={{height:'100%',width:'100%'}}></Image>
            </View>
            
            <View style={styles.row}>
                <Text style={styles.TitleText}>Bill-Payment</Text>
                <View style={styles.column}>
                <View style={styles.service}> 
                        <TouchableOpacity onPress={()=>navigation.navigate('Contact')}>
                        <Image source={require('../Assets/images/cash.png')} style={{height:70,width:70}}></Image>
                        <Text>Rocket Payment</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.service}>
                           <TouchableOpacity onPress={()=>navigation.navigate('Nagad')}>
                           <Image source={require('../Assets/images/nagad.png')} style={{height:70,width:70}}></Image>
                            <Text>Nagad Payment</Text>
                           </TouchableOpacity>
                    </View>
                    <View style={styles.service}>
                       <TouchableOpacity onPress={()=>navigation.navigate('Bksh')}>
                             <Image source={require('../Assets/images/bksh.png')} style={{height:70,width:70}}></Image>
                             <Text>Bkash Payment</Text>
                       </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <Text style={styles.TitleText}>Helpline</Text>
                <View style={styles.column}>
                <View style={styles.service}> 
                       <TouchableOpacity onPress={()=>navigation.navigate('Contact')}>
                       <Image source={require('../Assets/images/help.png')} style={{height:70,width:70}}></Image>
                        <Text>Helpline</Text>
                       </TouchableOpacity>
                    </View>
                    <View style={styles.service}>
                      <TouchableOpacity onPress={()=>navigation.navigate('Support')}>
                      <Image source={require('../Assets/images/support.png')} style={{height:70,width:70}}></Image>
                        <Text>Support</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.service}>
                       <TouchableOpacity onPress={()=>navigation.navigate('Website')}>
                       <Image source={require('../Assets/images/partner.png')} style={{height:70,width:70}}></Image>
                        <Text>Website</Text>
                       </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <Text style={styles.TitleText}>Entertainment</Text>
                
                <View style={styles.column}>
                    <View style={styles.service}> 
                       <TouchableOpacity onPress={onPress}>
                       <Image source={require('../Assets/images/livetv.png')} style={{height:70,width:70}}></Image>
                        <Text>Live Tv</Text>
                       </TouchableOpacity>
                    </View>
                    <View style={styles.service}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Ftv')}>
                        <Image source={require('../Assets/images/ftp1.png')} style={{height:70,width:70}}></Image>
                        <Text>FTP Server</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.service}>
                       <TouchableOpacity onPress={()=>navigation.navigate('Movies')}>
                       <Image source={require('../Assets/images/movie.png')} style={{height:70,width:70}}></Image>
                        <Text>Movis</Text>
                       </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    row:{
        width:'100%',
        height:'25%',
        fontWeight:'bold',
        alignItems:'center',
       
    },
    column:{
        flexDirection:'row',
    },
    service:{
        width:width/3,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:5
    },
    TitleText:{
        fontSize:20,
        fontWeight:'bold',
        padding:5
    }
})
