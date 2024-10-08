import React, { useState } from 'react';
import { Text, View } from 'react-native';
import StylesApp from './src/styles/StyleApp';
import Button from './src/components/Button';
import Screen from './src/components/Screen';
import ButtonClear from './src/components/ButtonClear';

export default function App() {
  const [input, setInput] = useState<string>('');  

  const agregarInput = (valor: string): void => {
    if (valor === '√') {

      const num = parseFloat(input);
      if (!isNaN(num)) {
        setInput(Math.sqrt(num).toString());
      } else {
        setInput('Error');
      }
    } else if (valor === '^') {
      setInput(input + '**');
    } else {
      setInput(input + valor);
    }
  };

  const divisionPorCero = (expresion: string): boolean => {
    return /\/0(?![\d.])/.test(expresion);
  };

  const calcularResultado = (): void => {
    if (divisionPorCero(input)) {
      setInput('Error: No se puede dividir para 0');
      return;
    }

    try {
      const resultado = eval(input); 
      setInput(resultado.toString());
    } catch (error) {
      setInput('Error: Mejore su operacion');  
    }
  };

  return (
    <View style={StylesApp.app}>
      <Text style={StylesApp.titulo}>Calculadora</Text>

      <View style={StylesApp.contenedorCalcu}>
        <Screen input={input} />

        <View style={StylesApp.fila}>
          <Button manejarClic={agregarInput}>1</Button>
          <Button manejarClic={agregarInput}>2</Button>
          <Button manejarClic={agregarInput}>3</Button>
          <Button manejarClic={agregarInput}>4</Button>

        </View>

        <View style={StylesApp.fila}>
          <Button manejarClic={agregarInput}>5</Button>
          <Button manejarClic={agregarInput}>√</Button>
          <Button manejarClic={agregarInput}>^</Button>
          <Button manejarClic={agregarInput}>6</Button>
        </View>

        <View style={StylesApp.fila}>
          <Button manejarClic={agregarInput}>7</Button>
          <Button manejarClic={agregarInput}>+</Button>
          <Button manejarClic={agregarInput}>-</Button>
          <Button manejarClic={agregarInput}>8</Button>
        </View>

        <View style={StylesApp.fila}>
        <Button manejarClic={agregarInput}>9</Button>
        <Button manejarClic={agregarInput}>/</Button>
        <Button manejarClic={agregarInput}>*</Button>
        <Button manejarClic={agregarInput}>0</Button>

        </View>

        <View style={StylesApp.fila}>
        <Button manejarClic={calcularResultado}>=</Button>
        <Button manejarClic={agregarInput}>.</Button>
        <ButtonClear manejarClear={() => setInput('')}>C</ButtonClear>
        </View>
      </View>
    </View>
  );
}
