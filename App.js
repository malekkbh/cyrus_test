/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  LogBox,
  StyleSheet,
  View,
  I18nManager
} from 'react-native';
import NavigationContainer from './route/nav';
import Cyrus_Context from './store/Cyrus_Context';
import Cyrus_Provider from './store/Cyrus_Provider';

const App = () => {

  LogBox.ignoreLogs([
    'source.uri should not be an empty string'
  ]);

  I18nManager.allowRTL(false);


  return (
    <Cyrus_Provider>
      <Cyrus_Context.Consumer>
        {context =>
          <View style={styles.container}>
            <NavigationContainer />
          </View>
        }
      </Cyrus_Context.Consumer>
    </Cyrus_Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
