import * as React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Focus from '../features/Focus';

export default function TabTwoScreen() {
  const [subject, setSubject] = React.useState<string>();


  const handleOnChange = (text: string) => {
    setSubject(text)
  }
  return (
    <View style={styles.container}>
      <Focus />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
    backgroundColor: '#5a1823'
  },
  title: {
    // flex: 0.3,
    padding: 10,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 60,
    fontSize: 40,
    backgroundColor: '#fff'
  },
  todo: {
    color: '#fff',
    fontSize: 30,
    paddingTop: 20,
  }
});
