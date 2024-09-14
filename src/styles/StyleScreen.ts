import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const StyleScreen = StyleSheet.create({
  input: {
    height: height * 0.12, 
    borderRadius: 15, 
    marginBottom: 20,
    justifyContent: 'center', 
    alignItems: 'flex-end', 
    backgroundColor: '#333', 
    padding: 10,
    paddingRight: 20, 
    borderWidth: 2, 
    borderColor: '#555', 
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 5, 
    marginTop: 10, 
  },
  text: {
    fontWeight: 'bold',
    fontSize: width * 0.03,  
    color: 'white',
    textAlign: 'right',  
    flexWrap: 'wrap',   
    paddingHorizontal: 10,  
  },
});

export default StyleScreen;
