import { Text, View } from '../../components/Themed';
import { StyleSheet } from 'react-native';
import { IsEnabledContext } from './IsEnabledContext';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function TabOneScreen({}) {
  const isEnabled = React.useContext(IsEnabledContext);

  return (
    <View style={[styles.container, {backgroundColor: isEnabled ? 'white' : 'black'}]}>
      <Text style={[styles.title, {color: isEnabled ? '#3e3e3e' : '#fff'}]}>PragTheDev</Text>
      <AntDesign name="github" size={40} color={isEnabled? 'black' : 'white'} />
      <Link href="https://github.com/" style={[{color: isEnabled ? '#3e3e3e' : '#fff'}, styles.link]}>Github</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // align items to the start of the container
    paddingTop: 50, // add some padding at the top
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 100,
    
  },
  link: {
    textDecorationLine: 'underline',
    paddingVertical: 10,
    fontSize: 16,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});