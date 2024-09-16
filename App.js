

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import LoginScreen from './src/LoginScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 , justifyContent: 'center'}}>
      <StatusBar barStyle="dark-content" />
      <LoginScreen />
    </SafeAreaView>
  );
};

export default App;
