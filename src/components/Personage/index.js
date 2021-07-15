import React from 'react';

import { TouchableOpacity, Text } from './styles';

const Personage = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default Personage;
