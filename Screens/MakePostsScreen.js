import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import SvgTrash from "./components/trashSvg";


const MakePostScreen = () => {
  return (
    <>
      <View style={styles.headerMake}>
        <Text>CreateScreen</Text>
      </View>
      <TouchableHighlight underlayColor="transparent" >
        <View style={styles.trashSvg}> <SvgTrash/></View>
       
      </TouchableHighlight>
    </>
  );
};

export default MakePostScreen;

const styles = StyleSheet.create({
  headerMake: {
    marginTop: 65,
    paddingLeft: 18,
  },
  trashSvg: {
    width: 35,
    height:15,
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
   
  },
});
