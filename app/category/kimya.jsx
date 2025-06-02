import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Math() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>📘Chemical</Text>

      {/* Dersler */}
      <TouchableOpacity style={styles.sectionCard} onPress={() => router.push('/(routers)/pages/Chemical.Screen')}>
        <Text style={styles.emoji}>📖</Text>
        <Text style={styles.sectionTitle}>Lessons</Text>
        <Text style={styles.description}>Explore math lessons such as algebra and geometry.</Text>
      </TouchableOpacity>

      {/* Videolar */}
      <TouchableOpacity style={styles.sectionCard} onPress={() => router.push('/videos/kimya')}>
        <Text style={styles.emoji}>🎥</Text>
        <Text style={styles.sectionTitle}>Videos</Text>
        <Text style={styles.description}>Watch videos to enhance your understanding.</Text>
      </TouchableOpacity>

      {/* Quizler */}
      <TouchableOpacity style={styles.sectionCard} onPress={() => router.push('/quiz/kimya')}>
        <Text style={styles.emoji}>🧠</Text>
        <Text style={styles.sectionTitle}>Quizzes</Text>
        <Text style={styles.description}>Test your knowledge with quizzes.</Text>
      </TouchableOpacity>

      {/* Sınavlar */}
      <TouchableOpacity style={styles.sectionCard} onPress={() => router.push('/exam/kimya')}>
        <Text style={styles.emoji}>📝</Text>
        <Text style={styles.sectionTitle}>Exams</Text>
        <Text style={styles.description}>Take practice exams to prepare better.</Text>
      </TouchableOpacity>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#717978'
  },
  sectionCard: {
    backgroundColor: '#00558d',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },
  emoji: {
    fontSize: 32,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
});
