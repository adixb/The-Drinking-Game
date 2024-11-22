import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import Logo from "../assets/images/logoIcon.png";
import { useRouter } from "expo-router";

export default function Index() {
  const [splashLoading, setSplashLoading] = useState(true);
  const router = useRouter();

  // Load fonts
  const [fontsLoaded] = useFonts({
    alumini: require("../assets/fonts/AlumniSansCollegiateOne-Regular.ttf"),
  });

  // Navigate after 3 seconds
  useEffect(() => {
    if (fontsLoaded) {
      const navTimer = setTimeout(() => {
        router.push("/onboardpage");
      }, 3000);

      return () => {
        clearTimeout(navTimer);
      };
    }
  }, [fontsLoaded, router]);

  // Show loading indicator while fonts are loading
  if (!fontsLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  // Render main splash screen
  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ width: 50, height: 50 }} />
      <Text style={styles.text}>THE DRINKING GAME</Text>
      <ActivityIndicator
        animating={splashLoading}
        size="large"
        color="black"
        style={{ marginTop: 50 }}
      />
    </View>
  );
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
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6EE8E",
  },
});
