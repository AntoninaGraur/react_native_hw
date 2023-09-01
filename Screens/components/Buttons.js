import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";

const RegisterButton = () => {
  return (
    <TouchableOpacity style={btnStyle.container}>
      <Text style={btnStyle.title}>Register</Text>
    </TouchableOpacity>
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