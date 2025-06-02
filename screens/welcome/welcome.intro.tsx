import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppIntroSlider from "react-native-app-intro-slider";
import { onboardingSwiperData, OnboardingSwiperDataType } from "../../constants/constans"
import { router } from "expo-router";
import { commonStyles } from "@/styles/common/common.styles";
import { styles } from "@/styles/onboarding/onboard";


export default function WelcomeIntroScreen() {
 

  const renderItem = ({ item }: { item: OnboardingSwiperDataType }) => (
    <LinearGradient
      colors={["#FFFFFF", "#FFFFFF", "#FFFFFF"]}
      style={{ flex: 1, paddingHorizontal: 16 }}
    >
      <View style={{ marginTop: 80 }}>
        <Image
          source={item.image}
          style={{ alignSelf: "center", marginBottom: 30,width:300,height:300 }}
        />
        <Text style={[commonStyles.title, { fontFamily: "outfit" }]}>
          {item.title}
        </Text>
        <View style={{ marginTop: 15 }}>
          <Text
            style={[
              commonStyles.description,
              { fontFamily: "outfit" },
            ]}
          >
            {item.description}
          </Text>
          <Text
            style={[
              commonStyles.description,
              { fontFamily: "outfit" },
            ]}
          >
            {item.sortDescrition}
          </Text>
          <Text
            style={[
              commonStyles.description,
              { fontFamily: "outfit" },
            ]}
          >
            {item.sortDescrition2}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={onboardingSwiperData}
      onDone={() => {
        router.push("/login");
      }}
      onSkip={() => {
        router.push("/login");
      }}
    renderNextButton={() => (
  <LinearGradient
    colors={["#8a0a84", "#121671"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.welcomeButtonStyle}
  >
    <Text style={[styles.buttonText, { fontFamily: "outfit-bold" }]}>
      Next
    </Text>
  </LinearGradient>
)}

  renderDoneButton={() => (
    <LinearGradient
      colors={["#8a0a84", "#121671"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.welcomeButtonStyle}
    >
      <Text style={[styles.buttonText, { fontFamily: "outfit-bold" }]}>
        Done
      </Text>
    </LinearGradient>
  )}

      showSkipButton={false}
      dotStyle={commonStyles.dotStyle}
      bottomButton={true}
      activeDotStyle={commonStyles.activeDotStyle}
    />
  );
}

