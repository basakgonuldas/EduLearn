import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const KonuDetayScreen = ({ route }) => {
  
  const konu = route.params?.konu;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{konu.baslik}</Text>
      <Text style={styles.content}>{konu.icerik}</Text>
    </ScrollView>
  );
};

export default KonuDetayScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 18,
    lineHeight: 28,
  },
});
