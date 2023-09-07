import React from "react";
import { ScrollView, StyleSheet, View, TouchableHighlight } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import SvgFeather from "./components/featherSvg";
import SvgAddPost from "./components/addPostSvg";
import SvgIconAvatar from "./components/iconAvatar";

import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreens";
import MakePostScreen from "./MakePostsScreen";

const Tab = createBottomTabNavigator();


const MapScreen = ({ navigation }) => {
  return (
    <>
    
        <Tab.Navigator>
          <Tab.Screen
            name="Posts"
            component={PostsScreen}
            options={{
             
              tabBarIcon: () => (
                <SvgFeather  />
              ),
            }}
          />
          <Tab.Screen
            name="MakePost"
            component={MakePostScreen}
            options={{
             
              tabBarIcon: () => (
                <SvgAddPost  />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              
              tabBarIcon: () => (
                <SvgIconAvatar />
              ),
            }}
          />
        </Tab.Navigator>
     
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
