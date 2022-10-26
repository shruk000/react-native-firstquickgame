// import { StatusBar } from 'expo-status-bar';
import { Button,  StatusBar,StyleSheet, Switch, Text, View } from 'react-native';
import Sc1 from "@Screens/screen1"
import Sc2 from "@Screens/screen2"
import { useRef } from 'react';

export default function App() {
  const value = useRef(false);


  const hidebar=()=>{
    value.current=!value.current
    StatusBar.setHidden(value.current,"slide");
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Sc1/>
      <Sc2/>
      <Button title='clickme' onPress={hidebar} />
      <StatusBar translucent={true}  style={styles.titleBar} backgroundColor='red' />
      
    </View>
  );
}

const styles = StyleSheet.create({
  titleBar:{


  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
