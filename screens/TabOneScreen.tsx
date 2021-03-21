import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} >
        <Text style={styles.title}>Tab One Hello</Text>
        <Button onPress={() => console.log('hello its me ')}
          title='Press   me' />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      </View>
      <View style={styles.box2} >

        <Text>This is Flex 7</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    flex: 3,
    // overflow: 'scroll',
    backgroundColor: 'red',
    width: '100%'
  },
  box2: {
    flex: 7,
    backgroundColor: 'deeppink'
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
