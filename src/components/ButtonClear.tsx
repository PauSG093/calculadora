import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import StyleButtonClear from '../styles/StyleBotonClear';

// Definimos el tipo para las propiedades que recibe ButtonClear
interface ButtonClearProps {
  manejarClear: () => void;
  children: string;
}

const ButtonClear = ({ manejarClear, children }: ButtonClearProps) => (
  <TouchableOpacity style={StyleButtonClear.buttonClear} onPress={manejarClear}>
    <Text style={StyleButtonClear.buttonClearText}>{children}</Text>
  </TouchableOpacity>
);

export default ButtonClear;
