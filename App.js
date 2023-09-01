import {
  StyleSheet,
  Text,
  View,

  TextInput,
  
} from "react-native";
import RegistrationScreen from './Screens/RegistrationScreen'


export default function App() {
   
  return (
    <View style={styles.appContainer}>
     
      <RegistrationScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 45,
    paddingBottom: 45,
    paddingLeft: 16,
    paddingRight: 16,
  },
  textTitle: {
    margin: 10,
    borderWidth: 2,
    borderColor: "blue",
    padding: 10,
  },
 
});
