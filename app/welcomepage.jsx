import { StyleSheet, Text, View,Image,TouchableOpacity,ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import forward from '../assets/images/forward.png' ; 
import {useFonts} from 'expo-font'
import { useRouter } from 'expo-router';

import Logo from "../assets/images/logoIcon.png";
export default function welcomepage() {

  const [customloader,setCustomLoader] = useState(false)

const [fontloaded] = useFonts({
  poppinsRegular:require('../assets/fonts/Poppins-Regular.ttf')
})


const router = useRouter() ; 

const handleSubmit = ()=>{

  setCustomLoader(true)
  router.push('/mainpage') ; 
}


 // Show loading indicator while fonts are loading
 if (!fontloaded) {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
}

  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ width: 50, height: 50 }} />
      <Text style={styles.text}>THE DRINKING GAME</Text>

     <Text style={styles.welcometext} >Drink, party, and make memories you won’t regret (too much) the next day. Keep it fun, keep it classy, and maybe… keep track!</Text>

      {(customloader===true) ? (
        <ActivityIndicator size="large" color="black" />
      ):(<TouchableOpacity style={styles.forwardbutton} onPress={handleSubmit}><Text><Image source={forward} style={{width:40,height:40}}></Image></Text></TouchableOpacity>)}

     
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#F6EE8E",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
      text: {
        fontFamily: "alumini",
        fontSize: 80,
        textAlign: "center",
        marginTop: 20,
      },
      welcometext:{
        textAlign:"center",
        padding:10,
        marginTop:10,
        fontFamily:"poppinsRegular",
        fontSize:15

      },
      forwardbutton:{
          backgroundColor:"black",
          marginTop:50,
          borderRadius:20,
          width:90,
          display:'flex',
          alignItems:"center",
          justifyContent:"center"
          
      }

})