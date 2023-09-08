import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";


const ProfileScreen = () => {
    return (
      <View style={styles.headerProfile}>
        <Text>Profile</Text>
      </View>
    );
};

export default ProfileScreen;


const styles = StyleSheet.create({
  headerProfile: {
    marginTop:65,
    paddingLeft: 18,
    
  },
});
