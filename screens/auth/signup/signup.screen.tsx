import { View, Text, ScrollView, Image, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native';
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Fontisto,
  Ionicons,
  SimpleLineIcons
} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { commonStyles } from '@/styles/common/common.styles';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FirebaseConfig';

export default function SignUpScreen() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState({ password: '' });

  const handlePasswordValidation = (value: string) => {
    const passwordSpecialCharacter = /(?=.*[!@#$&*])/;
    const passwordOneNumber = /(?=.*[0-9])/;
    const passwordSixValue = /(?=.{6,})/;
  
    setUserInfo({ ...userInfo, password: value }); // önce yazılanı set et
  
    if (!passwordSpecialCharacter.test(value)) {
      setError({ password: 'En az bir özel karakter girin' });
    } else if (!passwordOneNumber.test(value)) {
      setError({ password: 'En az bir rakam girin' });
    } else if (!passwordSixValue.test(value)) {
      setError({ password: 'En az 6 karakter girin' });
    } else {
      setError({ password: '' });
    }
  };
  

  const handleSignUp = () => {
    const { name, email, password } = userInfo;
    if (!name || !email || !password) {
      ToastAndroid.show('Please enter all details', ToastAndroid.LONG);
      return;
    }

    setButtonSpinner(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User created:', user);
        ToastAndroid.show('Account created successfully!', ToastAndroid.SHORT);
        router.push("/(tabs)/home");
      })
      .catch((error) => {
        console.log('Sign up error:', error.message);
        ToastAndroid.show(error.message, ToastAndroid.LONG);
      })
      .finally(() => setButtonSpinner(false));
  };

  return (
    <LinearGradient colors={["#E5ECF9", "#F7D9E9"]} style={{ flex: 1, paddingTop: 20 }}>
      <ScrollView>
        <Image
          style={styles.signInImage}
          source={require("@/assets/sign-in/signup.png")}
        />
        <Text style={[styles.welcomeText, { fontFamily: "outfit" }]}>
          Let's get started!
        </Text>
        <Text style={styles.learningText}>
          Create an account to EduLearn to get all features
        </Text>

        <View style={styles.inputContainer}>
          {/* Name Input */}
          <View>
            <TextInput
              style={[styles.input, { paddingLeft: 40, marginBottom: -10 }]}
              value={userInfo.name}
              placeholder='support'
              onChangeText={(value) => setUserInfo({ ...userInfo, name: value })}
            />
            <AntDesign style={styles.icon} name="user" size={20} color={"#A1A1A1"} />
          </View>

          {/* Email Input */}
          <View>
            <TextInput
              style={[styles.input, { paddingLeft: 40 }]}
              keyboardType='email-address'
              value={userInfo.email}
              placeholder="support@gmail.com"
              onChangeText={(value) => setUserInfo({ ...userInfo, email: value })}
            />
            <Fontisto style={styles.icon} name="email" size={20} color={"#A1A1A1"} />
          </View>

          {/* Password Input */}
          <View style={{ marginTop:5}}>
            <TextInput
              style={commonStyles.input}
              secureTextEntry={!isPasswordVisible}
              value={userInfo.password}
              placeholder='************'
              onChangeText={handlePasswordValidation}
            />
            <TouchableOpacity
              style={styles.visibleIcon}
              onPress={() => setPasswordVisible(!isPasswordVisible)}
            >
              <Ionicons
                name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
                size={23}
                color={"#747474"}
              />
            </TouchableOpacity>
            <SimpleLineIcons
              style={styles.icon2}
              name="lock"
              size={20}
              color={"#A1A1A1"}
            />
          </View>

          {/* Password Error */}
          {error.password && (
            <View style={[commonStyles.errorContainer, { top: 145 }]}>
              <Entypo name="cross" size={18} color={"red"} />
              <Text style={{ color: "red", fontSize: 11, marginTop: -1 }}>
                {error.password}
              </Text>
            </View>
          )}

          {/* Sign Up Button */}
            <TouchableOpacity
                onPress={handleSignUp}
                disabled={buttonSpinner}
                style={{ marginHorizontal: 16, marginTop: 15, borderRadius: 8, overflow: 'hidden' }}
              >
              <LinearGradient
                colors={["#8a0a84", "#121671"]} 
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  paddingVertical: 16,
                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {buttonSpinner ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontSize: 16,
                      fontFamily: 'outfit-bold',
                    }}
                  >
                    Sign Up
                  </Text>
                )}
              </LinearGradient>
            </TouchableOpacity>


          {/* Social Icons */}
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            gap: 10,
          }}>
            {/*
            <TouchableOpacity>
              <FontAwesome name="google" size={30} />
            </TouchableOpacity>

            <TouchableOpacity>
              <FontAwesome name="github" size={30} />
            </TouchableOpacity>*/}
          </View>

          {/* Redirect to Login */}
          <View style={styles.signUpRedirect}>
            <Text style={{ fontSize: 18, fontFamily: "outfit",marginTop:-40 }}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push("/(routers)/login")}>
              <Text style={{
                fontSize: 18,
                fontFamily: "outfit-bold",
                color: Colors.GRAY,
                marginLeft: 5,
                marginTop:-40 
              }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  signInImage: {
    width: "60%",
    height: 250,
    alignSelf: "center",
    marginTop: 50,
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 24,
  },
  learningText: {
    textAlign: "center",
    color: "#575757",
    fontSize: 15,
    marginTop: 5
  },
  inputContainer: {
    marginHorizontal: 16,
    marginTop: 30,
    rowGap: 30
  },
  input: {
    height: 55,
    marginHorizontal: 16,
    borderRadius: 8,
    paddingLeft: 35,
    fontSize: 16,
    backgroundColor: "white",
    color: "#A1A1A1",
  },
  icon: {
    position: "absolute",
    left: 26,
    top: 17.8,
  },
  visibleIcon: {
    position: "absolute",
    right: 30,
    top: 15
  },
  icon2: {
    position: "absolute",
    left: 24,
    top: 17.8,
    marginTop: -2
  },
  signUpRedirect: {
    flexDirection: "row",
    marginHorizontal: 16,
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
  },
});
