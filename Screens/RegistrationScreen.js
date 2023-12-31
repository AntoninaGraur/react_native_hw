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

import RegisterButton from "./components/Buttons";
import { useSelector, useDispatch } from "react-redux";
import store from "../redux/store";



const RegistrationScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [marginTop, setMarginTop] = useState(235);

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

  const login = useSelector(store => store.user)
  const dispatch = useDispatch();
console.log(login);

  const [formData, setFormData] = useState({
    login: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validateForm = () => {
    const errors = {};

    if (!formData.login) {
      errors.login = "Login is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };
  const handleRegistration = async () => {
    const isFormValid = validateForm();

    if (isFormValid) {
      try {
     
        await AsyncStorage.setItem("formData", JSON.stringify(formData));
        console.log("Form Data saved to AsyncStorage:", formData);

        
         navigation.navigate("Home");
      } catch (error) {
        console.error("Error saving form data to AsyncStorage:", error);
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/photo_bcg.png")}
          style={styles.backgroundImage}
        />
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <View style={[styles.innerContainer, { marginTop }]}>
            <Image style={styles.avatarImage} />
            <Text style={styles.title}>Registration</Text>
            <View style={styles.loginContainer}>
              <TextInput
                style={styles.input}
                placeholder="Login"
                onChangeText={(text) =>
                  setFormData({ ...formData, login: text })
                }
              />
              {formErrors.login && (
                <Text style={styles.errorLoginText}>{formErrors.login}</Text>
              )}
            </View>
            <View style={styles.emailContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email address"
                onChangeText={(text) =>
                  setFormData({ ...formData, email: text })
                }
              />
              {formErrors.email && (
                <Text style={styles.errorEmailText}>{formErrors.email}</Text>
              )}
            </View>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                secureTextEntry={!isPasswordVisible}
                onChangeText={(text) =>
                  setFormData({ ...formData, password: text })
                }
              />

              <Text
                style={styles.togglePasswordButton}
                onPress={togglePasswordVisibility}
              >
                {isPasswordVisible ? "Hide" : "Show"}
              </Text>
              {formErrors.password && (
                <Text style={styles.errorPasswordText}>
                  {formErrors.password}
                </Text>
              )}
            </View>
            <Text
              style={styles.navigationText}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              Already have account? Login
            </Text>
            <RegisterButton onPress={handleRegistration} />
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
