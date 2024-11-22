import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView,TouchableOpacity } from 'react-native';
import Logo from "../assets/images/logoIcon.png";
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';

export default function OtpPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error,setError]=useState("")
  const inputs = useRef([]);


  const handleChange = (value, index) => {
    if (/^\d$/.test(value)) { // Only allow digits
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus on the next input
      if (index < 3) {
        inputs.current[index + 1].focus();
      }
    } else if (value === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleBackspace = (value, index) => {
    if (value === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const [fontLoaded] = useFonts({
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsRegular: require("../assets/fonts/Poppins-Regular.ttf")
  });


  const router = useRouter();

  const handleSubmit = () => {
    // Ensure all OTP digits are filled
    if (otp.some((digit) => digit === "")) {
      setError("Incomplete OTP. Please fill all fields.");
    } else {
      setError("");
      router.push("/welcomepage");
    }
  };



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Verify your phone number</Text>
        <Image source={Logo} style={{ width: 40, height: 40, marginTop: 30 }} />
      </View>

      <View style={styles.otpInput}>
        <Text style={styles.otpText}>Enter your OTP</Text>
        <View style={styles.inputContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              value={digit}
              onChangeText={(value) => handleChange(value, index)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace") {
                  handleBackspace("", index);
                }
              }}
              ref={(ref) => (inputs.current[index] = ref)}
              style={styles.inputBox}
              keyboardType="number-pad"
              maxLength={1}
            />
          ))}
        </View>

          <TouchableOpacity><Text style={styles.resendbutton}>Resend ?</Text></TouchableOpacity>
 

      </View>
      <TouchableOpacity style={styles.buttonContainer}><Text style={styles.buttontext} onPress={handleSubmit}>Submit</Text></TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  resendbutton:{
    margin:20,
    fontFamily:"poppinsBold",
    color:"blue"
  },
  container: {
    flexGrow: 1,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6EE8E",
  },
  headingContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  headingText: {
    fontFamily: "poppinsBold",
    fontSize: 25,
    textAlign: "center",
  },
  otpInput: {
    alignItems: "center",
    justifyContent: "center",
  },
  otpText: {
    fontFamily: "poppinsBold",
    fontSize: 18,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  inputBox: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "poppinsRegular",
    borderRadius: 5, // Rounded corners for better appearance
    backgroundColor: "#f9f9f9", // Light background color for visibility
  },
  buttonContainer:{
    elevation: 7,
    backgroundColor: "black",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop:30
  },
  buttontext:{
    fontFamily:"poppinsBold",
    color:"white"
  }
});
