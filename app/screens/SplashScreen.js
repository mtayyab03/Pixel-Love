import React, { useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";

export default function SplashScreen(props) {
  useEffect(() => {
    // After 3 seconds, navigate to LoginScreen
    const timer = setTimeout(() => {
      props.navigation.navigate("HomeScreen");
    }, 3000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.background}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("HomeScreen");
        }}
      >
        <Image
          style={styles.logo}
          source={require("../../assets/images/splash.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: RFPercentage(30),
    height: RFPercentage(30),
  },
});
