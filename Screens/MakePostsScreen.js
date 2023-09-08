import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

const MakePostScreen = () => {
  return (
    <View style={styles.headerMake}>
      <Text>CreateScreen</Text>
    </View>
  );
};

export default MakePostScreen;

const styles = StyleSheet.create({
  headerMake: {
    marginTop: 65,
    paddingLeft: 18,
  },
});
