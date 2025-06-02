import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

const ProfileScreen = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  const courses = ['Matematik', 'Fizik', 'Kimya'];
  const exams = ['Matematik Vize', 'Fizik Vize', 'Kimya Quiz'];
  const progress = 0.65; 

  return (
    <LinearGradient colors={['#ffffff', '#f0f0f5']} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Profil Kartı */}
        <View style={styles.card}>
          <Image
            source={require('../../assets/student.png')}
            style={styles.avatar}
          />
          <Text style={styles.name}>Başak Gönüldaş</Text>
          <Text style={styles.email}>basak@gmail.com</Text>

          <View style={styles.progressContainer}>
            <Text style={styles.progressLabel}>Genel İlerleme</Text>
            <Progress.Bar
              progress={progress}
              width={250}
              color="#6a1b9a"
              unfilledColor="#e0e0e0"
              borderColor="#fff"
              height={12}
              borderRadius={10}
            />
            <Text style={styles.progressPercent}>{Math.round(progress * 100)}%</Text>
          </View>
        </View>

        {/* Dersler */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📘 Dersler</Text>
          {courses.map((course, index) => (
            <View key={index} style={styles.listItem}>
              <Ionicons name="book-outline" size={20} color="#6a1b9a" />
              <Text style={styles.itemText}>{course}</Text>
            </View>
          ))}
        </View>

        {/* Sınavlar */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📝 Sınavlar</Text>
          {exams.map((exam, index) => (
            <View key={index} style={styles.listItem}>
              <Ionicons name="create-outline" size={20} color="#ff6f00" />
              <Text style={styles.itemText}>{exam}</Text>
            </View>
          ))}
        </View>

        {/* Çıkış */}
        <TouchableOpacity onPress={handleLogout} activeOpacity={0.9} style={styles.logoutWrapper}>
          <LinearGradient
            colors={['#8a0a84', '#00196b']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Ionicons name="log-out-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.buttonText}>Çıkış Yap</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  progressContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  progressLabel: {
    fontSize: 14,
    marginBottom: 6,
    color: '#444',
  },
  progressPercent: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6a1b9a',
  },
  section: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  itemText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#444',
  },
  logoutWrapper: {
    width: '100%',
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    paddingVertical: 14,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
