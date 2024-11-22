import { ActivityIndicator, StyleSheet, Text, View,Image, TextInput, Button,TouchableOpacity,TouchableWithoutFeedback, Keyboard, } from 'react-native'
import React ,{useState} from 'react'
import {useFonts} from 'expo-font';
import Logo from "../assets/images/logoIcon.png";
import {useRouter} from 'expo-router'

export default function Onboardpage() {

    const [name,setName] = useState("");
    const[phone,setPhone] = useState("") ; 
    const [error,setError]=useState("")
    const [customLoader,setCustomLoader] = useState(false)

const [fontloaded] = useFonts({
    poppinsBold:require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsRegular:require('../assets/fonts/Poppins-Regular.ttf')
})



const router = useRouter()

  const handleSubmit = () => {
    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be 10 digits.");
    } else {
      setError("");
      console.log({ name, phone });
      setCustomLoader(true)
      router.push("/otppage")
    
    }
  };



  if (!fontloaded) {
    return (
      <ActivityIndicator size="large" color="black" style={styles.loader} />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>

    <View style={styles.headingContainer}>
       <Text style={styles.headingtext}>Let us know about you first</Text>
       <Image source={Logo} style={{ width: 40, height: 40,marginTop:30 }} />
    </View> 

    <View style={styles.FormContainer}>
    <Text style={styles.inputname}>Who are you ?</Text>
    <TextInput 
     placeholder="Enter your name"
    placeholderTextColor="#aaa"
    style={styles.inputBox}
    onChangeText={setName}
    value={name}
    
    ></TextInput>
 <Text style={styles.inputname}>Phone Number ?</Text>
 <TextInput 
     placeholder="Enter your phone number"
    placeholderTextColor="#aaa"
    style={styles.inputBox}
    value={phone}
    keyboardType="phone-pad"
    onChangeText={setPhone}
    
    ></TextInput>


    </View>
    {customLoader===true?(  <ActivityIndicator
        animating={customLoader}
        size="large"
        color="black"
        style={{ marginTop: 50 }}
      />):( <TouchableOpacity style={styles.buttonContainer}><Text style={styles.buttontext} onPress={handleSubmit}>Submit</Text></TouchableOpacity>
)}

   



     
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-evenly",
        border:"solid",
        borderColor:"black",
        backgroundColor: "#F6EE8E",

    },
    headingContainer:{
      width:"100%",
      display:"flex",
      alignItems:"center"
    },
    headingtext:{ 
        fontFamily:"poppinsBold",
        fontSize:35,
        textAlign:"center"

    },
    FormContainer:{ 
        width:"100%",
        padding:15,
    
        display:"flex",
        flexDirection:"column",
        alignItems:"start"
    },
    inputname:{
        fontFamily:"poppinsRegular",
        fontSize:18,
        marginTop:5
    },
   inputBox: {
    fontFamily: "poppinsRegular",
    fontSize: 16,
    color: "black",
    backgroundColor: "#f9f9f9",
    borderBottomColor:"black",
    borderWidth: 1.5,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  buttonContainer:{
    elevation: 7,
    backgroundColor: "black",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  buttontext:{
    fontFamily:"poppinsBold",
    color:"white"
  }
})