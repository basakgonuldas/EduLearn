import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const lessons = [
  { id: '1', title: 'Vocabulary', icon: require('../../assets/englishicon/english-language.png') },
  { id: '2', title: 'Grammar', icon: require('../../assets/englishicon/eng.png') },
  { id: '3', title: 'Listening', icon: require('../../assets/englishicon/exchange.png') },
  { id: '4', title: 'Speaking', icon: require('../../assets/englishicon/speak.png') },
];

export default function Ingilizce() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>🇬🇧 İngilizce Dersleri</Text>
      
      {lessons.map((lesson) => (
        <TouchableOpacity key={lesson.id} style={styles.card}>
          <Image source={lesson.icon} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{lesson.title}</Text>
            <Text style={styles.subtitle}>Practice {lesson.title.toLowerCase()} with exercises</Text>
          </View>
        </TouchableOpacity>
      ))}

      <View style={{ height: 80 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eef2ff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },
  icon: {
    width: 48,
    height: 48,
    marginRight: 16,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
  },
});
