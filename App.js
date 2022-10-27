// import { StatusBar } from 'expo-status-bar';
import { Button,  StatusBar,StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sc1 from "@Screens/screen1"
import Sc2 from "@Screens/screen2"
import Sc3 from "@Screens/screen3"

import { NavigationContainer } from '@react-navigation/native';
import ContextProvider from './ContextManager/ContextProvider';


const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <ContextProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{title:"Guess a number"}}>
        <Stack.Screen name='index1' component={Sc1} />
        <Stack.Screen name='index2' component={Sc2}/>
        <Stack.Screen name='index3' component={Sc3}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ContextProvider>
  );
}