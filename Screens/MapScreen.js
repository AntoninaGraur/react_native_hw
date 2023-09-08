import React from "react";
import {  StyleSheet, View, TouchableHighlight } from "react-native";


import SvgFeather from "./components/featherSvg";
import SvgAddPost from "./components/addPostSvg";
import SvgIconAvatar from "./components/iconAvatar";


import PostsScreen from "./PostsScreen";
import MakePostScreen from "./MakePostsScreen";
import ProfileScreen from "./ProfileScreens";
import { useNavigation } from "@react-navigation/native";

const MapScreen = ({navigation}) => {
    // const navigation = useNavigation();
  return (
    <>
      <View style={styles.footerMap}>
        <TouchableHighlight onPress={() => navigation.navigate("PostsScreen")}>
          <SvgFeather />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate("MakePostsScreen")}
        >
          <SvgAddPost />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate( "ProfileScreen")}>
          <SvgIconAvatar />
        </TouchableHighlight>
      </View>
    </>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  footerMap: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: " 0px -0.5px 0px 0px rgba(0, 0, 0, 0.30)",
    flexDirection: "row",
    gap: 59,
    justifyContent: "center",
    backgroundColor: "white",
    paddingTop: 12,
    paddingBottom: 26,
  },
});
