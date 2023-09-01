import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import RegisterButton from "./components/Buttons";

const RegistrationScreen = () => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/photo_bcg.png")}
          style={styles.backgroundImage}
        />
        <View style={styles.container}>
          <Text style={styles.title}>Registration</Text>
          <TextInput style={styles.input} placeholder="Login" />
          <TextInput style={styles.input} placeholder="Email adress" />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={!isPasswordVisible}
            />
            <Text
              style={styles.togglePasswordButton}
              onPress={togglePasswordVisibility}
            >
              {isPasswordVisible ? "Hide" : "Show"}</Text>
          </View>
          <RegisterButton />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    marginTop: 235,
    width: 380,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 33,
  },
  input: {
    width: 343,
    height: 50,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 43,
  },
  passwordInput: {
    width: 343,
    height: 50,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    position: "relative",
  },
  togglePasswordButton: {
    padding: 10,
    fontWeight: "400",
    position: "absolute",
    left: 280,
    color: "#1B4371",
    fontSize: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default RegistrationScreen;
