import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AI from '../yapayZeka/ai';
import { useRouter } from 'expo-router';


export default function LessonsScreen() {
  const router=useRouter();

  const handleOpenAI = () => {
    console.log('AI butonuna tıklandı!');
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>📚 Lessons</Text>

        <TouchableOpacity style={styles.courseCardVertical} onPress={() =>router.push('/(routers)/pages/Math.Screen')}>
          <Image source={require('../../assets/lessonicons/math.png')} style={styles.courseImageVertical} />
          <Text style={styles.courseTitle}>Math</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.courseCardVertical} onPress={() => router.push('/(routers)/pages/History.Screen')}>
          <Image source={require('../../assets/exam/tarih.png')} style={styles.courseImageVertical} />
          <Text style={styles.courseTitle}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.courseCardVertical} onPress={() =>router.push('/(routers)/pages/English.Screen')}>
          <Image source={require('../../assets/exam/english.png')} style={styles.courseImageVertical} />
          <Text style={styles.courseTitle}>English</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.courseCardVertical} onPress={() => router.push('/(routers)/pages/Biology.Screen')}>
          <Image source={require('../../assets/lessonicons/cells.png')} style={styles.courseImageVertical} />
          <Text style={styles.courseTitle}>Biology</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.courseCardVertical} onPress={() => router.push('/(routers)/pages/Chemical.Screen')}>
          <Image source={require('../../assets/lessonicons/chemical.png')} style={styles.courseImageVertical} />
          <Text style={styles.courseTitle}>Chemical</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.courseCardVertical} onPress={() => router.push('/(routers)/pages/Geo.Screen')}>
          <Image source={require('../../assets/lessonicons/geograpfy.png')} style={styles.courseImageVertical} />
          <Text style={styles.courseTitle}>Geography</Text>
        </TouchableOpacity>

        <View style={styles.bottomPadding} />
      </ScrollView>

      <AI onPress={handleOpenAI} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  courseCardVertical: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
  },
  courseImageVertical: {
    width: 70,
    height: 70,
    marginRight: 15,
    resizeMode: 'contain',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '500',
    flexShrink: 1,
  },
  bottomPadding: {
    height: 150,
  },
});
