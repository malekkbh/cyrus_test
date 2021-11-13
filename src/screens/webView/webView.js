import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';


const WebViewScreen = (props) => {

    const {url} = props.route?.params

    const webViewParams = {
        source:{uri:url}, 
        style:{flex:1}
    }

    return (
        <View style={{flex:1}}>
            <WebView {...webViewParams}/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default WebViewScreen;