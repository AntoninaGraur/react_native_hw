import React from "react";
import {  StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProfileScreen from "./ProfileScreens";
import CreatePostsScreen from "./MakePostsScreen";
import PostsScreen from "./PostsScreen";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const Home = () => {
 
  return (
    <Tab.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        title: "Posts",
      }}
    >
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen }
        options={{
          title: "Posts",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="appstore-o" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "Create",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="plus" size={26} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="user" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
