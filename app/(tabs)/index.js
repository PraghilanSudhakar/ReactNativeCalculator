import { View } from '../../components/Themed';
import { StyleSheet } from 'react-native';
import { IsEnabledContext } from './IsEnabledContext'; // import the context
import React from 'react';
import { Calculator } from '../../components/Calculator';


//   <Text style={[styles.title, {color: isEnabled ? '#3e3e3e' : '#fff'}]}>Home</Text>
export default function TabOneScreen({}) {
  const isEnabled = React.useContext(IsEnabledContext);

  return (
    <View style={[styles.container, {backgroundColor: isEnabled ? 'white' : 'black'}]}>
      <Calculator isEnabled={isEnabled}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});