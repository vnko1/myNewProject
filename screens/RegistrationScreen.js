import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
} from "react-native";

export default RegistrationScreen = () => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  return (
    <View style={styles.container}>
      <Text>Регистрация</Text>
      <View>
        <TextInput caretHidden={true} placeholder={"Логин"}></TextInput>
      </View>
      <View>
        <TextInput
          caretHidden={true}
          placeholder={"Адрес электронной почты"}
        ></TextInput>
      </View>
      <View>
        <TextInput
          secureTextEntry={hiddenPassword}
          caretHidden={true}
          placeholder={"Пароль"}
        ></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "50%",
    borderRadius: "25px 25px 0px 0px",
  },
});
