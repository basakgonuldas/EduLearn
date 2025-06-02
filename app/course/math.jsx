import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const lessons = [
  { id: '1', title: 'Temel Matematik', icon: require('../../assets/mathicon/book.png'), desc: 'Temel kavramlar ve işlemlerle başla' },
  { id: '2', title: 'Sayılar Teorisi', icon: require('../../assets/mathicon/mathematics.png'), desc: 'Asal sayılar, bölenler ve daha fazlası' },
  { id: '3', title: 'Fonksiyonlar', icon: require('../../assets/mathicon/function.png'), desc: 'Fonksiyon türlerini öğren ve uygulamalı çöz' },
  { id: '4', title: 'Denklem ve Eşitsizlikler', icon: require('../../assets/mathicon/maths.png'), desc: 'Birinci ve ikinci derece denklemler' },
  { id: '5', title: 'İntegral & Türev', icon: require('../../assets/mathicon/mathematics.png'), desc: 'Analizin temel taşlarını keşfet' },
  { id: '6', title: 'Olasılık & İstatistik', icon: require('../../assets/mathicon/book.png'), desc: 'Veriyle düşün, ihtimali hesapla' },
  { id: '7', title: 'Analitik Geometri', icon: require('../../assets/mathicon/venn-diagram.png'), desc: 'Doğrular, parabol ve geometrik analiz' },
];

export default function Math() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>📘 Popüler Matematik Dersleri</Text>
      
      {lessons.map((lesson) => (
        <TouchableOpacity key={lesson.id} style={styles.card}>
          <Image source={lesson.icon} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{lesson.title}</Text>
            <Text style={styles.subtitle}>{lesson.desc}</Text>
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
