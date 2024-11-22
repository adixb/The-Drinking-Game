import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import forward from '../assets/images/forward.png' ; 
import {useFonts} from 'expo-font'

import Logo from "../assets/images/logoIcon.png";
export default function welcomepage() {

const [fontloaded] = useFonts({
  poppinsRegular:require('../assets/fonts/Poppins-Regular.ttf')
})




  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ width: 50, height: 50 }} />
      <Text style={styles.text}>THE DRINKING GAME</Text>

     <Text style={styles.welcometext} >Drink, party, and make memories you won’t regret (too much) the next day. Keep it fun, keep it classy, and maybe… keep track!</Text>

     <TouchableOpacity style={styles.forwardbutton}><Text><Image source={forward} style={{width:40,height:40}}></Image></Text></TouchableOpacity>
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