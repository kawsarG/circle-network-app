import React from 'react';
import {View,Image,StyleSheet} from 'react-native';

export default function Bksh() {
    return (
        <View style={styles.screen}>
          <Image source={require('../Assets/images/bkashpay.png')} style={{height:'90%',width:'100%',resizeMode:'stretch'}}></Image>
        </View>
    )
}
const styles = StyleSheet.create({
  screen:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
})
