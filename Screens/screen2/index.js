import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TopLevelContext } from '../../ContextManager/ContextProvider';

function index({navigation}) {

  const GlobalContext = useContext(TopLevelContext);

  // GlobalContext.setValue(2);
  return (
    <View style={style.container}>

      <Text>Hello screen 2 + {GlobalContext.Value}</Text>
      <Button title='to Screen 1' onPress={()=>{
        GlobalContext.setValue(5);
        navigation.navigate("index1")
    
    }} />
    </View>
  )
}

const style=StyleSheet.create({
  container:{
    alignItems:"center",
    flex:1,
    justifyContent:"center",
  }

})


export default index