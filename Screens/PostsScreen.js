import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

import MapScreen from "./MapScreen";

import SvgLogout from "./components/svgLogout";

const PostsScreen = ({ email, navigation}) => {
  return (
    <>
      <ScrollView style={styles.mainBox}>
        <View style={styles.headerPosts}>
          <Text style={styles.mainTitle}>Posts</Text>
          <TouchableHighlight
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <SvgLogout style={styles.logoutSvg} />
          </TouchableHighlight>
        </View>
        <View style={styles.imageContainer}>
          <View>
            <Image
              source={require("../assets/avatar.png")}
              style={styles.avatarImage}
            />
          </View>
          <View style={styles.userNameContainer}>
            <Text style={styles.loginName}>Antonina Graur</Text>
            <Text style={styles.emailText}>{email}</Text>
          </View>
        </View>
        <View>
          <Image
            source={require("../assets/rocks.png")}
            style={styles.postImage}
          />
          <Text style={styles.imageSubscription}>Forest</Text>
        </View>
      </ScrollView>
      <MapScreen navigation={navigation}  />
    </>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  headerPosts: {
    marginTop: 32,
    backgroundColor: "#fff",
    paddingTop: 32,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.30)",
    marginBottom: 32,
  },
  logoutSvg: {
    position: "relative",
    left: 350,
    top: -20,
    padding: 0,
    marginTop: 0,
  },
  mainTitle: {
    color: "#212121",
    fontSize: 19,
    fontFamily: "Roboto",
    fontWeight: "500",
    textAlign: "center",
  },
  mainBox: {
    flex: 1,
    width: "100%",
    height: "75%",
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 32,
  },
  postImage: {
    width: 343,
    height: 240,
    marginLeft: 16,
    marginBottom: 10,
  },
  avatarImage: {
    width: 132,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  loginName: {
    color: "#212121",
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "700",
  },
  emailText: {
    fontSize: 11,
    fontFamily: "Roboto",
    fontWeight: "400",
    color: "rgba(33, 33, 33, 0.8)",
  },
  userNameContainer: {
    marginTop: 37,
  },
  imageSubscription: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "600",
    color: "#212121",
    paddingLeft: 16,
  },
});
