import React from "react";
import {  StyleSheet, View, TouchableHighlight } from "react-native";


import SvgFeather from "./components/featherSvg";
import SvgAddPost from "./components/addPostSvg";
import SvgIconAvatar from "./components/iconAvatar";




const TabNavigation = ({navigation}) => {
   
  return (
    <>
      <View style={styles.footerMap}>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => navigation.navigate("PostsScreen")}
        >
          <SvgFeather />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => navigation.navigate("MakePostsScreen")}
        >
          <SvgAddPost />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => navigation.navigate("ProfileScreen")}
        >
          <SvgIconAvatar />
        </TouchableHighlight>
      </View>
    </>
  );
};

export default TabNavigation;

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
