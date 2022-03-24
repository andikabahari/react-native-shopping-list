import React from 'react';
import {Text} from 'react-native';

interface ListItemProps {
  item: {
    id: string;
    text: string;
  };
}

export const ListItem: React.FC<ListItemProps> = ({item}) => {
  return <Text>{item.text}</Text>;
};
