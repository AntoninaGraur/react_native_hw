import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import * as Location from "expo-location";
import { useNavigation, useRoute} from "@react-navigation/native";


import SvgTrash from "./components/trashSvg";
import ArrowBackSvg from "./components/arrowBack";
import SvgLocation from "./components/locationSvg";
import FotoSvg from "./components/fotoSvg";
import SvgPhotoaparat from "./components/photoaparatSvg";


const MakePostScreen = () => {
  const [photoTitle, setPhotoTitle] = useState("");
  const [location, setLocation] = useState("");
const [image, setImage] = useState(null);
  const { navigate } = useNavigation();
  

  const handlePhotoTitleChange = (text) => {
    setPhotoTitle(text);
  };

  const askForLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === "granted") {
        const locationData = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = locationData.coords;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        setLocation({ latitude, longitude });
      } else {
        console.log("Location permission not granted");
      }
    } catch (error) {
      console.error("Error while requesting location permission:", error);
    }
  };


  const handlePublish = async () => {
    askForLocationPermission();

    const post = {
      title: photoTitle,
      location,
     
    };

    console.log("Created Post:", post);

    setPhotoTitle("");
    setLocation(null);
    
    navigate("PostsScreen", { post });
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.mainBox}>
          <View style={styles.headerMake}>
            <TouchableHighlight
              style={styles.arrowBackSvg}
              underlayColor="transparent"
            >
              <ArrowBackSvg />
            </TouchableHighlight>
            <Text style={styles.mainCreateTitle}>Create Post</Text>
          </View>

          <View style={styles.downloadContainer}>
            <TouchableHighlight
              style={styles.circleSvg}
              onPress={() => navigate("CameraScreen")}
              underlayColor="transparent"
            >
              <FotoSvg />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.photoaparatSvg}
              onPress={() => navigate("CameraScreen")}
              underlayColor="transparent"
            >
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
              <TextInput
                placeholder="What is that?"
                style={styles.input}
                value={photoTitle}
                onChangeText={handlePhotoTitleChange}
              />

              <TouchableHighlight
                style={styles.locationSvg}
                onPress={() => navigate("MapScreen")}
                underlayColor="transparent"
              >
                <SvgLocation />
              </TouchableHighlight>
            </View>

            <View>
              <TextInput
                placeholder="Location?"
                style={styles.input}
                editable={false}
              />
            </View>
            <TouchableHighlight
              style={styles.buttonContainer}
              onPress={handlePublish}
              underlayColor="transparent"
            >
              <Text style={styles.buttonTitle}>Publish</Text>
            </TouchableHighlight>
          </KeyboardAvoidingView>

          <View style={styles.trashSvgContainer}>
            <TouchableHighlight style={styles.trashSvg}>
              <SvgTrash />
            </TouchableHighlight>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
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
  cameraPostContainer: {
    backgroundColor: "white",
    paddingLeft: 18,
    paddingRight: 16,
    marginBottom: 8,
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
  photoPreviewContainer: {
    position: "relative",
    width: 330,
    height: 140,
  },
  dowloadText: {
    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "400",
    paddingLeft: 16,
    paddingBottom: 48,
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
  buttonContainer: {
    borderWidth: 1,
    borderColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: 343,
    marginBottom: 16,
  },
  buttonTitle: {
    fontSize: 16,
    paddingTop: 16,
    paddingBottom: 16,
    fontWeight: "bold",
    color: "white",
  },
  trashSvgContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  trashSvg: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderWidth: 0,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
