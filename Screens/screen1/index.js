import React, { useContext, useEffect, useState } from 'react'
import { Alert, Button, Keyboard, StyleSheet,Text, TextInput, View } from 'react-native'
import { TopLevelContext } from '../../ContextManager/ContextProvider'


function index({route,navigation}) {
  
  const GlobalContext = useContext(TopLevelContext);
  const [Value, setValue] = useState(null);
  const data=route.params;


  useEffect(() => {
    const unsubscribe=navigation.addListener("focus",()=>{
      setValue("");
    })
    return unsubscribe;
  }, [])
  
  return (
    <View style={style.container}>

    <View style={style.innerContainer}>
    <View >
      <TextInput keyboardType='numeric' 
      
      value={Value==(""+NaN)?"":Value}
      onChangeText={(eve)=>{
        let ele=parseInt(eve);
        if(ele>=100){
          
          console.log(ele);
          ele=99;

        }
        setValue(""+ele);
      }}
      style={{fontSize:40,textAlign:"center"}}
       onPressIn={()=>{Keyboard.dismiss()}}
       
       placeholder='NUM'/> 
    </View> 
    <View  style={style.button}>
      <Button  title="Reset" onPress={()=>{setValue("")}}/>
    </View>
    <View style={style.startButton}>
      <Button title="start" onPress={()=>{
        
        if(Value==""+NaN){
          Alert.alert("cheat","Enter a number");
          return;
        }

        navigation.navigate("index2",{payload:{
          value:Value
        }});
        
        }}/>
    </View>
    </View>
    
    </View>
  )
}

const style=StyleSheet.create({
  container:{
    alignItems:"center",
    flex:1,
  },
  innerContainer:{
    marginTop:30,
    width:200,
    height:200,
    
  },
  button:{
    marginTop:5,
    flexDirection:"column",
    width:"100%",
  },
  startButton:{
    marginTop:100,
    padding:10,
    // backgroundColor:"rgba(25,25,25,1)",
    flexDirection:"column",
    width:"100%",
  },

})

export default index