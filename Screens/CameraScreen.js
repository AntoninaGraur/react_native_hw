import React, { useState, useEffect, useRef } from "react";
import { Camera, CameraType, requestCameraPermissionsAsync } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
} from "react-native";
import CameraButton from "./components/CameraButton";
import { useNavigation } from "@react-navigation/native";

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

    
  const { navigate } = useNavigation();

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await requestCameraPermissionsAsync();
      setHasPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert("Success");
        setImage(null);
        navigate("MakePostsScreen", { image });
        console.log(image);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (hasPermission === false) {
    return <Text>No acces to camera</Text>;
  }

  return (
    <View style={styles.cameraMainContainer}>
      {!image ? (
        <Camera
        //   style={styles.cameraContainer}
          type={type}
          flashMode={flash}
          ref={cameraRef}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <CameraButton
              icon={"retweet"}
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            />
            <CameraButton
              icon={"flash"}
              color={
                flash === Camera.Constants.FlashMode.off
                  ? "rgba(189, 189, 189, 0.5)"
                  : "#FFF"
              }
              onPress={() => {
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                );
              }}
            />
          </View>
        </Camera>
      ) : (
                  <Image source={{ uri: image }}
                      style={styles.cameraContainer} />
      )}

      <View style={styles.cameraContainer}>
        {image ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
            }}
          >
            <CameraButton
              title={"Re-Take"}
              icon="retweet"
              onPress={() => setImage(null)}
            />
            <CameraButton title={"Save"} icon="check" onPress={saveImage} />
          </View>
        ) : (
          <CameraButton
            title={"Take a foto"}
            icon="camera"
            onPress={takePicture}
          />
        )}
      </View>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  cameraMainContainer: {
    flex: 1,
    backgroundColor: "#212121",
    justifyContent: "center",
  },
  cameraContainer: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 20,
    backgroundColor: "#212121",
    justifyContent: "center",
  },
});
