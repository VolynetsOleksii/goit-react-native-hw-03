import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./RegistrationScreenStyles";
import Icon from "react-native-vector-icons/AntDesign";

function RegistrationScreen() {
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.imageWraper}>
          <TouchableOpacity style={styles.addButton}>
            <Icon name="pluscircleo" size={25} color="#FF6C00" />
          </TouchableOpacity>
        </View>

        <Text style={styles.formHeader}>Реєстрація</Text>
        <View style={styles.formInputWraper}>
          <TextInput
            style={[isLoginFocused ? styles.focusedInput : styles.unfocusedInput]}
            onFocus={() => setIsLoginFocused(true)}
            onBlur={() => setIsLoginFocused(false)}
            placeholder="Логін"
          />
          <TextInput
            style={[isEmailFocused ? styles.focusedInput : styles.unfocusedInput]}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            placeholder="Адреса електронної пошти"
          />
          <View style={styles.passwordWraper}>
            <TextInput
              style={[isPasswordFocused ? styles.focusedInput : styles.unfocusedInput]}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              placeholder="Пароль"
            />
            <TouchableOpacity style={styles.passwordShowBtn}>
              <Text style={styles.passwordShowBtnText}>Показати</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.formSubmitButton}>
          <Text style={styles.formSubmitButtonText}>Зареєструватися</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.regButtonText}>Вже є акаунт? Увійти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RegistrationScreen;
