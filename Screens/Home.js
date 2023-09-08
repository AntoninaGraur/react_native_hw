import React from "react";
import { View, StyleSheet } from "react-native";
import PostsScreen from "./PostsScreen"

import SvgFeather from "./components/featherSvg";
import SvgAddPost from "./components/addPostSvg";
import SvgIconAvatar from "./components/iconAvatar";



const Home = ({ route, navigation, screen }) => {
  const { email,  } = route.params;

  return (
    <View style={styles.container}>
      <PostsScreen email={email} navigation={navigation} screen={screen} />
    </View>
    
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


