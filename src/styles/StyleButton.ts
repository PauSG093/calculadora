import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const buttonSize = width * 0.2;  

const StylesButton = StyleSheet.create({
  button: {
    height: buttonSize,  
    width: buttonSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6A994E',  
    borderRadius: buttonSize / 2,  
    borderWidth: 2,
    borderColor: '#8F7A66',  
    margin: 8,
  },
  buttonText: {
    color: '#FFFFFF',  
    fontSize: width * 0.06, 
    fontWeight: 'bold',
  },
  operador: {
    height: buttonSize, 
    width: buttonSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A39367', 
    borderRadius: buttonSize / 2,  
    borderWidth: 2,
    borderColor: '#8F7A66',  
    margin: 8,
  },
});

export default StylesButton;
