import React, { useContext } from 'react'
import { Button, StyleSheet,Text, View } from 'react-native'
import { TopLevelContext } from '../../ContextManager/ContextProvider'




function index({navigation}) {

  const GlobalContext = useContext(TopLevelContext);

  return (
    <View style={style.container}>

    <Text>Hello screen 1 = {GlobalContext.Value}</Text>
    <Button title='to Screen 2' onPress={()=>navigation.navigate("index2")} />
    </View>
  )
}

const style=StyleSheet.create({
  container:{
    backgroundColor:"red",
    alignItems:"center",
    width:"100%",
    height:"100%",
    justifyContent:"center",
  }

})

export default index