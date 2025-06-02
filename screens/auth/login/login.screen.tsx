import { View, Text, ScrollView, Image, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native';
import {
  Entypo,
  FontAwesome,
  Fontisto,
  Ionicons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { commonStyles } from '@/styles/common/common.styles';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FirebaseConfig'

export default function LoginScreen() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [error, setError] = useState({ password: '' });
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);

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
  

  const handleSignIn = () => {
    const { email, password } = userInfo;
    if (!email || !password) {
      ToastAndroid.show('Please Enter Email or Password', ToastAndroid.LONG);
      return;
    }

    setButtonSpinner(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        router.replace('/home');
      })
      .catch((error) => {
        console.log(error.message, error.code);
        if (error.code === 'auth/invalid-credential') {
          ToastAndroid.show('Invalid credentials', ToastAndroid.LONG);
        }
      })
      .finally(() => {
        setButtonSpinner(false);
      });
  };

  return (
    <LinearGradient colors={['#E5ECF9', '#F7D9E9']} style={{ flex: 1, paddingTop: 20 }}>
      <ScrollView>
        <Image style={styles.signInImage} source={require('@/assets/sign-in/sign_in.png')} />
        <Text style={[styles.welcomeText, { fontFamily: 'outfit' }]}>Welcome Back!</Text>
        <Text style={styles.learningText}>Login to your existing account of EduLearn</Text>

        <View style={styles.inputContainer}>
          {/* Email Input */}
          <View>
            <TextInput
              style={[styles.input, { paddingLeft: 40 }]}
              keyboardType="email-address"
              value={userInfo.email}
              placeholder="support@gmail.com"
              onChangeText={(value) => setUserInfo({ ...userInfo, email: value })}
            />
            <Fontisto style={styles.icon2} name="email" size={20} color="#A1A1A1" />

            {/* Password Input */}
            <View style={{ marginTop: 15 }}>
              <TextInput
                style={commonStyles.input}
                secureTextEntry={!isPasswordVisible}
                value={userInfo.password}
                placeholder="************"
                onChangeText={handlePasswordValidation}
              />
              <TouchableOpacity style={styles.visibleIcon} onPress={() => setPasswordVisible(!isPasswordVisible)}>
                <Ionicons
                  name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
                  size={23}
                  color="#747474"
                />
              </TouchableOpacity>
              <SimpleLineIcons style={styles.icon2} name="lock" size={20} color="#A1A1A1" />
            </View>

            {error.password !== '' && (
              <View style={[commonStyles.errorContainer, { top: 145 }]}>
                <Entypo name="cross" size={18} color="red" />
                <Text style={{ color: 'red', fontSize: 11, marginTop: -1 }}>{error.password}</Text>
              </View>
            )}

            {/*<TouchableOpacity onPress={() => router.push('/(routers)/forgot-password')}>
              <Text style={[styles.forgotSection, { fontFamily: 'outfit-bold' }]}>Forgot Password?</Text>
            </TouchableOpacity>*/}

            {/* Sign In Button */}
            <TouchableOpacity
                  onPress={handleSignIn}
                  disabled={buttonSpinner}
                  style={{ marginHorizontal: 16, marginTop: 30, borderRadius: 8, overflow: 'hidden' }}
                >
                  <LinearGradient
                    colors={["#8a0a84", "#121671"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ padding: 16, alignItems: 'center', borderRadius: 8,marginTop:40 }}
                  >
                    {buttonSpinner ? (
                      <ActivityIndicator size="small" color="white" />
                    ) : (
                      <Text style={[styles.signInButtonText, { color: 'white' }]}>Sign In</Text>
                    )}
                  </LinearGradient>
                </TouchableOpacity>

            {/* Social Buttons 
            <View style={styles.socialContainer}>
              <TouchableOpacity>
                <FontAwesome name="google" size={30} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="github" size={30} />
              </TouchableOpacity>
            </View>*/}

            {/* Sign Up Redirect */}
            <View style={styles.signUpRedirect}>
              <Text style={{ fontSize: 18, fontFamily: 'outfit-medium' }}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => router.push('/(routers)/sign-up')}>
                <Text style={styles.signUpText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  signInImage: {
    width: '60%',
    height: 250,
    alignSelf: 'center',
    marginTop: 50,
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 24,
  },
  learningText: {
    textAlign: 'center',
    color: '#575757',
    fontSize: 15,
    marginTop: 5,
  },
  inputContainer: {
    marginHorizontal: 16,
    marginTop: 30,
    rowGap: 30,
  },
  input: {
    height: 55,
    marginHorizontal: 16,
    borderRadius: 8,
    paddingLeft: 35,
    fontSize: 16,
    backgroundColor: 'white',
    color: '#A1A1A1',
  },
  visibleIcon: {
    position: 'absolute',
    right: 30,
    top: 15,
  },
  icon2: {
    position: 'absolute',
    left: 24,
    top: 17.8,
    marginTop: -2,
  },
  forgotSection: {
    marginHorizontal: 16,
    textAlign: 'right',
    fontSize: 16,
    marginTop: 10,
  },
  signInButton: {
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: Colors.PRIMARY,
    marginTop: 15,
  },
  signInButtonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'outfit-bold',
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    gap: 10,
  },
  signUpRedirect: {
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  signUpText: {
    fontSize: 18,
    fontFamily: 'outfit-bold',
    color: Colors.GRAY,
    marginLeft: 5,
  },
});
