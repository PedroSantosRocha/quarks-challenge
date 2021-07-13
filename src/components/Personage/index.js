import React from 'react';

import { TouchableOpacity, Text } from './styles';

const Personage = ({ name }) => {
  return (
    <TouchableOpacity>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default Personage;
