import { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as ImagePicker from "expo-image-picker";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [image, setImage] = useState(null);
  const [showLoginScreen, setShowLoginScreen] = useState(false);
  const [keyBoardIsShown, setKeyBoardIsShown] = useState(false);
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setImageIsLoaded(true);
    }
  };

  const hideKeyboard = () => {
    setKeyBoardIsShown(false);
    Keyboard.dismiss();
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/bg.jpg")}
        >
          {showLoginScreen ? (
            <LoginScreen
              hideKeyboard={hideKeyboard}
              keyBoardIsShown={keyBoardIsShown}
              setKeyBoardIsShown={setKeyBoardIsShown}
              setShowLoginScreen={setShowLoginScreen}
              pickImage={pickImage}
              image={image}
              imageIsLoaded={imageIsLoaded}
            />
          ) : (
            <RegistrationScreen
              hideKeyboard={hideKeyboard}
              keyBoardIsShown={keyBoardIsShown}
              setKeyBoardIsShown={setKeyBoardIsShown}
              setShowLoginScreen={setShowLoginScreen}
              pickImage={pickImage}
              image={image}
              imageIsLoaded={imageIsLoaded}
            />
          )}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  inputContainer: {
    width: "100%",
  },
});
