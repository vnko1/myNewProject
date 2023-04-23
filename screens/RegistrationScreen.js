import { useState, useEffect } from "react";
import {
  Pressable,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

const initialValue = { login: "", email: "", password: "" };

export default RegistrationScreen = () => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [hiddenPassword, setHiddenPassword] = useState(true);

  useEffect(() => {}, []);

  const onPressBtn = () => console.log(inputValue);
  return (
    <View style={styles.container}>
      <Image
        style={{
          ...styles.image,
          transform: [{ translateX: -60 }],
        }}
      />
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
            onChangeText={(value) =>
              setInputValue((prevState) => ({ ...prevState, password: value }))
            }
            value={inputValue.password}
          ></TextInput>
          <Pressable
            style={styles.passwordBtn}
            onPress={() => setHiddenPassword((prevState) => !prevState)}
          >
            <Text style={styles.passwordBtnText}>
              {hiddenPassword ? "Показать" : "Скрыть"}
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={{ ...styles.btnContainer, marginBottom: 16 }}>
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
        <Pressable style={styles.link}>
          <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fff",
    width: "100%",
    height: "70%",
    borderRadius: "25px 25px 0px 0px",

    alignItems: "center",
  },
  image: {
    position: "absolute",
    left: "50%",
    top: -60,
    borderRadius: 16,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
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
    marginHorizontal: 32,
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
    top: 16,
    right: 16,
  },
  passwordBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  btnContainer: { width: "100%" },
  regBtn: {
    backgroundColor: "#FF6C00",
    marginHorizontal: 32,
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

  // link: { textAlign: "center" },
  linkText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
