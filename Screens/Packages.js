import React from 'react';
import { View,StyleSheet,Text,Image,Dimensions,ImageBackground} from 'react-native';

const {width,height} = Dimensions.get('window');

export default function Packages() {
    return (
        <View style={styles.screen}>
            <Image style={styles.image} source={require('../Assets/images/cn6.png')}/>
        </View>
    )
}

const styles= StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#eee'
    },
    image:{
        width:'100%',
        height:'90%',
        resizeMode:'stretch',
    }
})
