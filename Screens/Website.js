import React from 'react';
import {View,Text,StyleSheet,} from 'react-native';
import {WebView} from 'react-native-webview';

export default function Website() {
    return (
        <WebView
        source={{
          uri: 'https://circlenetworkbd.net/'
        }}
      />
    )
}
