import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Btn = ({ name, onPress, isEnabled }) => {
  return (
    <TouchableOpacity style={isEnabled? styles.buttonEnabled : styles.button } onPress={onPress}>
      <Text style={isEnabled? styles.buttonTextEnabled : styles.buttonText }>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80, 
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 15, 
  },

  buttonEnabled: {
    width: 80,
    height: 80, 
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#000',
    borderRadius: 15, 
  },
  buttonText: {
    fontSize: 60,
    color: '#000', 
  },

  buttonTextEnabled: {
    fontSize: 60,
    color: '#fff', 
  },
});