import { StyleSheet } from 'react-native';

const StylesApp = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#4269',  // Fondo anterior de la calculadora
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
    width: '90%',
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
    width: '100%',
    height: 100,  // Tamaño original del input (pantalla)
    backgroundColor: '#333333',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    marginBottom: 20,  // Separación entre el input y los botones
  },
  inputText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StylesApp;
