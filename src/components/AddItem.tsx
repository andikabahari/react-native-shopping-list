import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface AddItemProps {
  addItem: (text: string) => void;
}

export const AddItem: React.FC<AddItemProps> = ({addItem}) => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Item name"
        style={styles.input}
        onChangeText={value => setText(value)}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 8,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 16,
    textAlign: 'center',
  },
});
