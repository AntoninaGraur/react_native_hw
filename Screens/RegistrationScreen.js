import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import RegisterButton from "./components/Buttons";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration </Text>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email adress" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
    <RegisterButton/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
      paddingHorizontal: 10,
    borderRadius: 100,
  },
});

export default RegistrationScreen;
