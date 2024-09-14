import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import StylesButton from '../styles/StyleButton';

interface ButtonProps {
  manejarClic: (valor: string) => void;
  children?: string;
}

const Button = ({ manejarClic, children }: ButtonProps) => {
  const esOperator = (valor: string | undefined): boolean => {
    return valor !== undefined && isNaN(Number(valor)) && valor !== '.' && valor !== '=';
  };

  const buttonStyle = esOperator(children) ? StylesButton.operador : StylesButton.button;

  return (
    <TouchableOpacity style={buttonStyle} onPress={() => manejarClic(children || '')}>
      <Text style={StylesButton.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
