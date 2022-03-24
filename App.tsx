import 'react-native-get-random-values';
import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import {Header} from './src/components/Header';
import {ListItem} from './src/components/ListItem';

const App: React.FC = () => {
  const [items] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Egg'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Juice'},
    {id: uuidv4(), text: 'Cheese'},
  ]);

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
};

export default App;
