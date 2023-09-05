import React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";

const RegisterButton = ({ onPress }) => {
  return (
    <TouchableHighlight
      style={btnStyle.container}
      onPress={onPress}
      underlayColor="transparent"
    >
      <Text style={btnStyle.title}>Register</Text>
    </TouchableHighlight>
  );
};
export default RegisterButton;


const btnStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: 343, 
    
  },
  title: {
    fontSize: 24,
    paddingTop: 16,
    paddingBottom: 16,
    fontWeight: "bold",
    color: "white",
  },
});