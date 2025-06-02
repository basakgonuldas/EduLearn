import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../styles/onboarding/onboard"
import { router } from "expo-router";

export default function OnBoardingScreen() {


  return (
    <LinearGradient
      colors={["#f4efed","#ffffff"]}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={styles.firstContainer}>
        <View>
          <Image source={require("@/assets/logo.png")} style={styles.logo} />
          <Image source={require("@/assets/onboarding/shape_9.png")} />
        </View>
        <View style={styles.titleWrapper}>
          <Image
            style={styles.titleTextShape1}
            source={require("@/assets/onboarding/shape_3.png")}
          />
          <Text style={[styles.titleText, { fontFamily: "outfit" }]}>
            Welcome to EduLearn
          </Text>
          <Image
            style={styles.titleTextShape2}
            source={require("@/assets/onboarding/shape_2.png")}
          />
        </View>
        <View>
          <Image
            style={styles.titleShape3}
            source={require("@/assets/onboarding/shape_6.png")}
          />
        </View>
        <View style={styles.dscpWrapper}>
          <Text style={[styles.dscpText, { fontFamily: "outfit" }]}>
            Explore a variety of interactive
          </Text>
          <Text style={[styles.dscpText, { fontFamily: "outfit" }]}>
          videos, quizzes & assignments.
          </Text>
        </View>
       <TouchableOpacity onPress={() => router.push("/(routers)/welcome-intro")}>
        <LinearGradient
          colors={["#8a0a84", "#121671"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.buttonWrapper}
        >
          <Text
            style={[
              styles.buttonText,
              { fontFamily: "outfit-medium", fontSize: 15 },
            ]}>Explore</Text>
        </LinearGradient>
      </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}