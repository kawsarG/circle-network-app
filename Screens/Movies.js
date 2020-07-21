import React from 'react';
import {View,Text,StyleSheet,} from 'react-native';
import {WebView} from 'react-native-webview';

export default function Movies() {
    return (
        <WebView
        source={{
          uri: 'http://10.1.1.1/allmovies.php?page=1&entries=64&sort=DESC&w=grid'
        }}
        
      />
    )
}
