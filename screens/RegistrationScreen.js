import { useState, useEffect } from "react";
import {
  Pressable,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import SvgComponent from "../SvgComponent";

const initialValue = { login: "", email: "", password: "" };

export default RegistrationScreen = ({
  hideKeyboard,
  keyBoardIsShown,
  setKeyBoardIsShown,
  setShowLoginScreen,
  pickImage,
  image,
  imageIsLoaded,
}) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [hiddenPassword, setHiddenPassword] = useState(true);
  console.log("hello, world!");
  const onPressBtn = () => {
    console.log(inputValue);
    hideKeyboard();
    setInputValue(initialValue);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : ""}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image }} />
        <Pressable
          style={{
            ...styles.imageIcon,
            borderColor: imageIsLoaded ? "#BDBDBD" : "#FF6C00",
          }}
          onPress={pickImage}
        >
          <SvgComponent imageIsLoaded={imageIsLoaded} />
        </Pressable>
      </View>
      <Text style={styles.title}>Регистрация</Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              ...styles.input,
              backgroundColor: inputValue.login ? "#fff" : "#F6F6F6",
              borderColor: inputValue.login ? "#FF6C00" : "#E8E8E8",
            }}
            placeholder={"Логин"}
            onFocus={() => setKeyBoardIsShown(true)}
            onChangeText={(value) =>
              setInputValue((prevState) => ({ ...prevState, login: value }))
            }
            value={inputValue.login}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              ...styles.input,
              backgroundColor: inputValue.email ? "#fff" : "#F6F6F6",
              borderColor: inputValue.email ? "#FF6C00" : "#E8E8E8",
            }}
            placeholder={"Адрес электронной почты"}
            onFocus={() => setKeyBoardIsShown(true)}
            onChangeText={(value) =>
              setInputValue((prevState) => ({ ...prevState, email: value }))
            }
            value={inputValue.email}
          ></TextInput>
        </View>
        <View style={{ ...styles.inputContainer, position: "relative" }}>
          <TextInput
            style={{
              ...styles.input,
              backgroundColor: inputValue.password ? "#fff" : "#F6F6F6",
              borderColor: inputValue.password ? "#FF6C00" : "#E8E8E8",
            }}
            secureTextEntry={hiddenPassword}
            placeholder={"Пароль"}
            onFocus={() => setKeyBoardIsShown(true)}
            onChangeText={(value) =>
              setInputValue((prevState) => ({
                ...prevState,
                password: value,
              }))
            }
            value={inputValue.password}
          ></TextInput>
          <Pressable
            style={{
              ...styles.passwordBtn,
              top: Platform.OS === "ios" ? 16 : 22,
            }}
            onPress={() => setHiddenPassword((prevState) => !prevState)}
            disabled={inputValue.password !== "" ? false : true}
          >
            <Text style={styles.passwordBtnText}>
              {hiddenPassword ? "Показать" : "Скрыть"}
            </Text>
          </Pressable>
        </View>
      </View>
      {!keyBoardIsShown && (
        <View style={styles.btnContainer}>
          <View style={{ marginBottom: 16 }}>
            <TouchableOpacity
              onPress={onPressBtn}
              activeOpacity={0.8}
              disabled={
                inputValue.login !== "" &&
                inputValue.email !== "" &&
                inputValue.password !== ""
                  ? false
                  : true
              }
            >
              <View style={styles.regBtn}>
                <Text style={styles.btnText}>Зарегистрироваться</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.btnContainer, alignItems: "center" }}>
            <Pressable
              style={styles.link}
              onPress={() => setShowLoginScreen(true)}
            >
              <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
            </Pressable>
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
  },
  imageContainer: {
    position: "absolute",
    left: "50%",
    top: -60,
    transform: [{ translateX: -60 }],
  },
  image: {
    borderRadius: 16,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
  },

  imageIcon: {
    position: "absolute",
    bottom: 0,
    right: -12,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 50,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 92,
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
  },
  form: {
    width: "100%",
    gap: 16,
    marginBottom: 43,
  },
  inputContainer: {
    marginHorizontal: 16,
  },
  input: {
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },

  passwordBtn: {
    position: "absolute",
    right: 16,
  },
  passwordBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  btnContainer: { width: "100%", marginBottom: 45 },
  regBtn: {
    backgroundColor: "#FF6C00",
    marginHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
  },
  btnText: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  linkText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
