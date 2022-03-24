import 'react-native-get-random-values';
import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import {Header} from './src/components/Header';
import {ListItem} from './src/components/ListItem';
import {AddItem} from './src/components/AddItem';

const App: React.FC = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Egg'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Juice'},
    {id: uuidv4(), text: 'Cheese'},
  ]);

  const addItem = (text: string) => {
    setItems(prevItems => {
      const newItem = {
        id: uuidv4(),
        text,
      };
      return [newItem, ...prevItems];
    });
  };

  const deleteItem = (id: string) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
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
