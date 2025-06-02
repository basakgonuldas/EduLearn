import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
  
  export default function ForgotPassword() {

    return (
      <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={styles.container}>
        <Text style={[styles.headerText, { fontFamily: "outfit" }]}>
          Reset Email Password
        </Text>
        <TextInput
          style={[styles.input, { fontFamily: "outfit" }]}
          placeholder="Username@gmail.com"
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.buttonText, { fontFamily: "outfit-medium" }]}>
            Send
          </Text>
        </TouchableOpacity>
        <View style={styles.loginLink}>
          <Text style={[styles.backText, { fontFamily: "outfit" }]}>
            Back To?
          </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={[styles.loginText, { fontFamily: "outfit-bold" }]}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    headerText: {
      fontSize: 18,
      textAlign: "center",
      marginBottom: 20,
    },
    input: {
      width: "100%",
      height: 50,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
    },
    button: {
      backgroundColor: Colors.PRIMARY,
      width: "100%",
      height: 45,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    buttonText: {
      color: "black",
      fontSize: 16,
      
    },
    loginLink: {
      flexDirection: "row",
      marginTop: 30,
    },
    loginText: {
      color: Colors.GRAY,
      marginLeft: 5,
      fontSize: 16,
    },
  
    backText: { fontSize: 16 },
  });