import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import SvgTrash from "./components/trashSvg";
import FotoSvg from "./components/fotoSvg";
import ArrowBackSvg from "./components/arrowBack";
import SvgPhotoaparat from "./components/photoaparatSvg";
import SvgLocation from "./components/locationSvg";

const MakePostScreen = () => {
  return (
    <>
      <ScrollView style={styles.mainBox}>
        <View style={styles.headerMake}>
          <TouchableHighlight style={styles.arrowBackSvg}>
            <ArrowBackSvg />
          </TouchableHighlight>
          <Text style={styles.mainCreateTitle}>Create Post</Text>
        </View>
        <View style={styles.downloadContainer}>
          <TouchableHighlight style={styles.circleSvg}>
            <FotoSvg />
          </TouchableHighlight>
          <TouchableHighlight style={styles.photoaparatSvg}>
            <SvgPhotoaparat />
          </TouchableHighlight>
        </View>
        <View>
          <Text style={styles.dowloadText}>Dowload Photo</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <View>
            <TextInput placeholder="What is that?" style={styles.input} />
         
          <TouchableHighlight style={styles.locationSvg}>
            <SvgLocation />
            </TouchableHighlight>
          </View>
          <View>
            <TextInput placeholder="Location?" style={styles.input} />
          </View>
        </KeyboardAvoidingView>

        <View style={styles.trashSvg} pointerEvents="auto">
          <SvgTrash />
        </View>
      </ScrollView>
    </>
  );
};

export default MakePostScreen;

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    width: "100%",
    height: "75%",
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
  },
  headerMake: {
    backgroundColor: "white",
    width: "100%",
    height: 58,
    marginTop: 75,
    paddingLeft: 18,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.30)",
    marginBottom: 32,
  },
  arrowBackSvg: {
    position: "relative",
    right: 170,
    top: 20,
    padding: 0,
    marginTop: 0,
  },
  mainCreateTitle: {
    color: "#212121",
    fontSize: 19,
    fontFamily: "Roboto",
    fontWeight: "500",
    textAlign: "center",
    paddingBottom: 25,
  },
  downloadContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    paddingLeft: 18,
    paddingRight: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 8,
    width: 343,
    height: 240,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    marginStart: 5,
  },
  circleSvg: {
    position: "absolute",
  },
  photoaparatSvg: {
    position: "relative",
    left: 4,
    top: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    marginTop: 0,
  },
  dowloadText: {
    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "400",
    paddingLeft: 16,
    paddingBottom:48,
  },
  input: {
    width: 343,
    height: 50,
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 35,

    backgroundColor: "transparent",
  },
  locationSvg: {
    position: "relative",
    left: 4,
    top: 35,
    right: 0,
    bottom: 140,
    padding: 0,
    marginTop: 0,
  },
  trashSvg: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderWidth: 0,
    borderWidthTopColor: "transparent",
    borderWidthBottomColor: "transparent",
    borderWidthLeftColor: "transparent",
    borderWidthRightColor: "transparent",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
