import React from 'react';
import {Text, View} from 'react-native';
import {Header} from './src/components/Header';

const App: React.FC = () => {
  return (
    <View>
      <Header title="Shopping List" />
      <Text>Hello, World!</Text>
    </View>
  );
};

export default App;
