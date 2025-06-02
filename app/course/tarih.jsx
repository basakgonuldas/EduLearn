import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const lessons = [
  { id: '1', title: 'İlk Çağ Uygarlıkları', icon: require('../../assets/tarihicon/parchment.png'), desc: 'Mezopotamya’dan Antik Yunan’a' },
  { id: '2', title: 'Orta Çağ ve Feodalite', icon: require('../../assets/tarihicon/history.png'), desc: 'Şövalyeler ve derebeylik dönemi' },
  { id: '3', title: 'Osmanlı Tarihi', icon: require('../../assets/tarihicon/history-book (1).png'), desc: 'Kuruluş, Yükselme ve Duraklama dönemleri' },
  { id: '4', title: 'Kurtuluş Savaşı', icon: require('../../assets/tarihicon/history-book.png'), desc: 'Milli Mücadele’nin kahramanlık hikayesi' },
];

export default function Tarih() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>📘 Tarih Dersleri</Text>
      
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
