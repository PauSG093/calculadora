import React from 'react';
import { View, Text } from 'react-native';
import StylesApp from '../styles/StyleApp';

interface ScreenProps {
  input: string;
}

const Screen = ({ input }: ScreenProps) => (
  <View style={StylesApp.inputContainer}>
    <Text style={StylesApp.inputText}>{input}</Text>
  </View>
);

export default Screen;
