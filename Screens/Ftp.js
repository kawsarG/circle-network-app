import React from 'react';
import {WebView} from 'react-native-webview';

export default function Ftp() {
    return (
        <WebView
        source={{
          uri: 'http://circleftp.net/'
        }}
      />
    )
}
