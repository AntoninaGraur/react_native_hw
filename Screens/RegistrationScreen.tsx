import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SvgRegistAvatar from './components/registAvatarSvg';
import RegisterButton from "./components/Buttons";
import { FIREBASE_AUTH } from "../FirebaseConfig";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

const RegistrationScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [marginTop, setMarginTop] = useState(235);
  
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

   const SignUp = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(response.user, { displayName: login });

      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigation.navigate("Home");
        }
      });
    } catch (error) {
      console.log(error);
      alert("Login failed" + error.message);
    } finally {
      setLoading(false);
    }
  };


  const onSubmit = () => {
    SignUp(email, password);
    console.log("register success");
  };


  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setMarginTop(45);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setMarginTop(235);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

 


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/photo_bcg.png")}
          style={styles.backgroundImage}
        />
        <KeyboardAvoidingView
          style={styles.container}
         
        >
          <View style={[styles.innerContainer, { marginTop }]}>
            <TouchableHighlight style={styles.avatarImage}>
              <SvgRegistAvatar />
            </TouchableHighlight>
            <Text style={styles.title}>Registration</Text>
            <View style={styles.loginContainer}>
              <TextInput
                style={styles.input}
                placeholder="Login"
                onChangeText={(text) => {
                    setLogin(text);
                  }}
              />
             
            </View>
            <View style={styles.emailContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email address"
                  onChangeText={(text) => {
                    setEmail(text);
                  }}
              />
            
            </View>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                secureTextEntry={!isPasswordVisible}
                  onChangeText={(text) => {
                      setPassword(text);
                    }}
              />

              <Text
                style={styles.togglePasswordButton}
                onPress={togglePasswordVisibility}
              >
                {isPasswordVisible ? "Hide" : "Show"}
              </Text>
             
            </View>
            <Text
              style={styles.navigationText}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              Already have account? Login
            </Text>
            <RegisterButton onPress={onSubmit} />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    width: 400,
  },

  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 33,
    marginTop: 32,
  },
  loginContainer: {
    position: "relative",
  },
  emailContainer: {
    position: "relative",
  },

  input: {
    width: 343,
    height: 50,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 43,
  },
  passwordInput: {
    width: 343,
    height: 50,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    position: "relative",
  },
  togglePasswordButton: {
    padding: 10,
    fontWeight: "400",
    position: "absolute",
    left: 280,
    color: "#1B4371",
    fontSize: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  avatarImage: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -70,
   
  },
  navigationText: {
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#1B4371",
    marginBottom: 45,
  },
  errorLoginText: {
    position: "absolute",
    top: 50,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "red",
  },
  errorEmailText: {
    position: "absolute",
    top: 50,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "red",
  },
  errorPasswordText: {
    position: "absolute",
    top: 50,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "red",
  },
});

export default RegistrationScreen;
