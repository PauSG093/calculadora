import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const buttonSize = width * 0.2;  

const StyleButtonClear = StyleSheet.create({
  buttonClear: {
    height: buttonSize,  
    width: buttonSize,
    backgroundColor: '#4B2E0D',  
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
  },
  buttonClearText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StyleButtonClear;
