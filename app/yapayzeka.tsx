import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; 

type Message = {
  text: string;
  sender: "user" | "gemini";
};

const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";

const YapayZeka = () => {
  const navigation = useNavigation();
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleButtonClick = async () => {
    if (!msg.trim()) return;

    const userMessage: Message = { text: msg, sender: "user" };
    setMessages((prev) => [userMessage, ...prev]);
    setMsg("");

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: msg,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Cevap alınamadı.";
      const geminiMessage: Message = { text: reply, sender: "gemini" };
      setMessages((prev) => [geminiMessage, ...prev]);
    } catch (error) {
      console.error("Hata:", error);
      const errorMessage: Message = { text: "Bir hata oluştu.", sender: "gemini" };
      setMessages((prev) => [errorMessage, ...prev]);
    }
  };

  const renderItem = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.message,
        item.sender === "user" ? styles.userMessage : styles.geminiMessage,
      ]}
    >
      <Text
        style={[
          styles.messageText,
          item.sender === "user"
            ? styles.userMessageText
            : styles.geminiMessageText,
        ]}
      >
        {item.text}
      </Text>
    </View>
  );

  return (
    <ImageBackground
      source={require("../assets/wallpaper.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View  style={styles.gradient}>
        <SafeAreaView style={styles.container}>
          {/* Back Butonu */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={32} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>EduChat</Text>
          </View>

          <FlatList
            data={messages}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={styles.messagesContainer}
            inverted
          />
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Bir şeyler yaz..."
              value={msg}
              onChangeText={setMsg}
              placeholderTextColor="gray"
            />
            <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
              <Text style={styles.buttonText}>Gönder</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  gradient: { flex: 1 },
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
  },
  messagesContainer: { padding: 10 },
  message: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  userMessage: {
    backgroundColor: "#FF00FF",
    alignSelf: "flex-end",
  },
  geminiMessage: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
  },
  messageText: { color: "white" },
  userMessageText: { color: "white" },
  geminiMessageText: { color: "black" },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    color: "black",
  },
  button: {
    backgroundColor: "#ffb711",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default YapayZeka;
