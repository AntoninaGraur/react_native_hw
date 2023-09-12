import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function CameraButton({ title, color, icon, onPress }) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Entypo name={icon} size={30} color={color ? color : "#FFF"} />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    marginLeft: 20,
  },
  button: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

