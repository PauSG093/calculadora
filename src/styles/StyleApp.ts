import { StyleSheet } from 'react-native';

const StylesApp = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#4269',  
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },
  contenedorCalcu: {
    width: '95%',
    height: '92%',
    backgroundColor: '#4B4A38', 
    borderRadius: 20,
    padding: 10,
    alignItems: 'center', 
    marginBottom: 20,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  inputContainer: {
    width: '90%',
    height: 90,  
    backgroundColor: '#333333',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    marginBottom: 20,  
  },
  inputText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StylesApp;
