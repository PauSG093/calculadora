import { StyleSheet, Dimensions } from 'react-native';

// Obtenemos el tamaño de la pantalla
const { width } = Dimensions.get('window');

// Definimos un tamaño base para los botones y hacemos que sean redondos
const buttonSize = width * 0.2;  // El ancho y la altura del botón serán iguales para hacerlos redondos

const StylesButton = StyleSheet.create({
  button: {
    height: buttonSize,  // El botón será redondo, así que altura = ancho
    width: buttonSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6A994E',  // Verde bosque para los botones numéricos
    borderRadius: buttonSize / 2,  // Hacemos el botón redondo
    borderWidth: 2,
    borderColor: '#8F7A66',  // Marrón suave para el borde
    margin: 8,
  },
  buttonText: {
    color: '#FFFFFF',  // Texto blanco
    fontSize: width * 0.06,  // Tamaño del texto responsivo
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
