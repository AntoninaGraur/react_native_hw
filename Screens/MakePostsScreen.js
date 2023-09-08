import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import SvgTrash from "./components/trashSvg";
import FotoSvg from "./components/fotoSvg";
import ArrowBackSvg from "./components/arrowBack";


const MakePostScreen = () => {
  return (
    <>
      <View style={styles.headerMake}>
        <TouchableHighlight style={styles.arrowBackSvg}>
          <ArrowBackSvg />
        </TouchableHighlight>
      </View>
      <View></View>
      <View style={styles.trashSvg} pointerEvents="auto">
        <SvgTrash />
      </View>
    </>
  );
};

export default MakePostScreen;

const styles = StyleSheet.create({
  headerMake: {
    backgroundColor: "white",
    width: "100%",
    height: 88,
    marginTop: 65,
    paddingLeft: 18,
  },
  arrowBackSvg: {
    position: "relative",
    left: 50,
    top: 20,
    padding: 0,
    marginTop: 0,
  },
  trashSvg: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderWidthTopColor: "transparent",
    borderWidthBottomColor: "transparent",
    borderWidthLeftColor: "transparent",
    borderWidthRightColor: "transparent",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
