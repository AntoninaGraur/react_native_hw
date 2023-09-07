import React from "react";
import { View, StyleSheet } from "react-native";
import PostsScreen from "./PostsScreen"

const Home = ({ route, navigation }) => {
  const { email } = route.params;

  return (
    <View style={styles.container}>
      <PostsScreen email={email} navigation={navigation}/>
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


