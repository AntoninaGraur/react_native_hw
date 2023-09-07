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
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";

const LoginScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [marginTop, setMarginTop] = useState(395);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setMarginTop(205);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setMarginTop(395);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const [formData, setFormData] = useState({
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

    useEffect(() => {
      const fetchUserDataFromStorage = async () => {
        try {
          const userData = await AsyncStorage.getItem("userData");
          if (userData) {
            const parsedUserData = JSON.parse(userData);
            setFormData({
              email: parsedUserData.email,
              password: parsedUserData.password,
            });
          }
        } catch (error) {
          console.error("Error fetching user data from AsyncStorage:", error);
        }
      };

      fetchUserDataFromStorage();
    }, []);

  const handleRegistration = async () => {
    const isFormValid = validateForm();

    if (isFormValid) {
     
      try {
        await AsyncStorage.setItem("userData", JSON.stringify(formData));
        console.log("User data updated in AsyncStorage:", formData);
      } catch (error) {
        console.error("Error updating user data in AsyncStorage:", error);
      }
      setFormData({
        email: "",
        password: "",
      }); 
      navigation.navigate("Home", {
        email: formData.email,
      });
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
            <Text style={styles.title}>Login </Text>
            <View style={styles.emailContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email adress"
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
            <TouchableHighlight
              style={styles.buttonContainer}
              onPress={handleRegistration}
              underlayColor="transparent"
            >
              <Text style={styles.buttonTitle}>Login</Text>
            </TouchableHighlight>
            <Text
              style={styles.navigationText}
              onPress={() => navigation.navigate("Registration")}
            >
              Do not have account? Register
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
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
  title: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 33,
    marginTop: 32,
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
  buttonContainer: {
    borderWidth: 1,
    borderColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: 343,
    marginBottom: 16,
  },
  buttonTitle: {
    fontSize: 24,
    paddingTop: 16,
    paddingBottom: 16,
    fontWeight: "bold",
    color: "white",
  },
  navigationText: {
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#1B4371",
    marginBottom: 45,
  },
  emailContainer: {
    position: "relative",
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
