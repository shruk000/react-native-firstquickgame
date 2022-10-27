
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { TopLevelContext } from '../../ContextManager/ContextProvider';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function index({route,navigation}) {

  const GlobalContext = useContext(TopLevelContext);
  const {payload}=route.params;
  const high = useRef(100);
  const low = useRef(0);
  
  
  
  const generateNewNum=()=>{
    return getRandomInt(low.current,high.current);
  }

  const [num, setnum] = useState(generateNewNum);


  useEffect(() => {
    if(payload.value==num){
      Alert.alert("Winner","You won the game");
    }
    console.log("Use effect running " , num ," | ", low.current," <  > ",high.current);
  
    
  }, [num]);


  useEffect(()=>{
    const unsubscribe=navigation.addListener("beforeRemove",(e)=>{
      navigation.setParams({payload:{
        moveBack:true
      }})


    })
    return unsubscribe;
  },[]);

  
  const checkWinner=()=>{
    if(num==payload.value){
      Alert.alert("Winner","You already won the game, press back to restart");
      return true;
    }
    return false;
  }
  
  const newNumHigher=()=>{
    if(checkWinner())return;
    if(num>payload.value){
      // value is low and i am saying to guess high
      Alert.alert("Cheat","i(android) should guess Lower na..?");
      return;
    }
    
    low.current=num;
    setnum(generateNewNum);
  }

  const newNumLower=()=>{
    if(checkWinner())return;
    if(num<payload.value){
      // value is high and i am saying to guess low
      Alert.alert("Cheat","i(android) should guess Lower na..?");
      return;
    }
    high.current=num;
    setnum(generateNewNum);
  }
  

  // GlobalContext.setValue(2);
  return (
    <View style={{
      flex:1,
      alignItems:"center",
    }}>
    <View style={{
      width:200,
      height:200,
      justifyContent:"space-evenly",
    }}>
      <Text style={{textAlign:"center",alignSelf:"center",fontSize:30,borderWidth:2,borderColor:"black"}}> {num} </Text>
      <View style={{flexDirection:"row"}}>
          <View style={{flex:1,padding:10}}><Button color={"red"}
          onPress={()=>{
            // High should be guessed..
            newNumHigher();


          }}      


          title='Guess High' /></View>
          <View style={{flex:1,padding:10}}><Button color={"grey"}
          
          onPress={()=>{
            // Low should be guessed..
            newNumLower();

          }}    


          title='Guess Low'
           /></View>
 
      </View>

    </View>
    <View style={style.container}>

    </View>
    <Text style={{textAlign:"center",alignSelf:"center",fontSize:10}}> Your number  </Text>
    <Text style={{textAlign:"center",alignSelf:"center",fontSize:10,borderWidth:1,borderColor:"black"}}> {payload.value} </Text>
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