import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import AI from '../yapayZeka/ai';
import { router, useNavigation, useRouter } from 'expo-router';

const courses = [
  { id: '1', title: 'Math', image: require('../../assets/lessons/mathLesson.png') },
  { id: '2', title: 'History', image: require('../../assets/lessons/historyLesson.png') },
  { id: '3', title: 'Geograpy', image: require('../../assets/lessons/geographyLesson.png') },
  { id: '4', title: 'Chemical', image: require('../../assets/lessons/chemicalLesson.png') },
  { id: '5', title: 'Biology', image: require('../../assets/lessons/biologyLesson.png') },
  { id: '6', title: 'English', image: require('../../assets/lessons/engLesson.png') },
];

const categories = [
  { id: '1', name: 'Math', color:'#fffff0',  image: require('../../assets/lessonicons/math.png') },
  { id: '2', name: 'History', color: '#fffff0', image: require('../../assets/lessonicons/history.png') },
  { id: '3', name: 'Geograpy', color: '#fffff0',  image: require('../../assets/lessonicons/geograpfy.png') },
  { id: '4', name: 'Chemical', color: '#fffff0',  image: require('../../assets/lessonicons/chemical.png') },
  { id: '5', name: 'Biology', color: '#fffff0', image: require('../../assets/lessonicons/cells.png') },
  { id: '6', name: 'English', color: '#fffff0', image: require('../../assets/lessonicons/eng.png') },
];

const exams = [
  { id: '1', title: 'Math Exams', image: require('../../assets/exam/math.png') },
  { id: '2', title: 'History Exams', image: require('../../assets/exam/tarih.png') },
  { id: '3', title: 'Geograpy Exams', image: require('../../assets/exam/geography.png') },
  { id: '4', title: 'Chemical Exams', image: require('../../assets/exam/kimya.png') },
  { id: '5', title: 'Biology Exams', image: require('../../assets/exam/biyoloji.png') },
  { id: '6', title: 'English Exams', image: require('../../assets/exam/english.png') },
];

const quizzes = [
  { id: '1', title: 'Math Quiz', image: require('../../assets/exam/math.png') },
  { id: '2', title: 'Geography Quiz', image: require('../../assets/quiz/geographyquiz.png') },
  { id: '3', title: 'Chemical Quiz', image: require('../../assets/exam/kimya.png') },
  { id: '4', title: 'Biology Quiz', image: require('../../assets/exam/biyoloji.png') },
  { id: '5', title: 'English Quiz', image: require('../../assets/exam/english.png') },
  { id: '6', title: 'History Quiz', image: require('../../assets/exam/tarih.png') },
];

export default function HomeScreen() {

  const [searchText, setSearchText] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categories);

  const router=useRouter();

  const handleCategoryPress = (id: string) => {
  if (id === '1') {
    router.push('/category/Math');
  } else if (id === '2') {
    router.push('/category/Tarih');
  } else if (id === '3') {
    router.push('/category/cografya');
  } else if (id === '4') {
    router.push('/category/kimya');
  } else if (id === '5') {
    router.push('/category/Biyoloji');
  } else if (id === '6') {
    router.push('/category/ingilizce');
  } else {
    console.warn('Geçersiz kategori ID');
  }
};
const handleCoursePress = (id: string) => {
  if (id === '1') {
    router.push('/course/math');
  } else if (id === '2') {
    router.push('/course/tarih');
  } else if (id === '3') {
    router.push('/course/cografya');
  } else if (id === '4') {
    router.push('/course/kimya');
  } else if (id === '5') {
    router.push('/course/biyoloji');
  } else if (id === '6') {
    router.push('/course/ingilizce');
  } else {
    console.warn('Geçersiz kategori ID');
  }
};
const handleExamPress = (id: string) => {
  if (id === '1') {
    router.push('/exam/math');
  } else if (id === '2') {
    router.push('/exam/tarih');
  } else if (id === '3') {
    router.push('/exam/cografya');
  } else if (id === '4') {
    router.push('/exam/kimya');
  } else if (id === '5') {
    router.push('/exam/biyoloji');
  } else if (id === '6') {
    router.push('/exam/ingilizce');
  } else {
    console.warn('Geçersiz kategori ID');
  }
};
const handleQuizPress = (id: string) => {
  if (id === '1') {
    router.push('/quiz/math');
  } else if (id === '2') {
    router.push('/quiz/cografya');
  } else if (id === '3') {
    router.push('/quiz/kimya');
  } else if (id === '4') {
    router.push('/quiz/biyoloji');
  } else if (id === '5') {
    router.push('/quiz/ingilizce');
  } else if (id === '6') {
    router.push('/quiz/tarih');
  } else {
    console.warn('Geçersiz kategori ID');
  }
};

  const navigation = useNavigation();
  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = categories.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  const handleOpenAI = () => {
    console.log('AI asistanı açıldı!');
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        {/* Header + Bildirim */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Hello👋</Text>
            <Text style={styles.subtitle}>What would you like to learn today?</Text>
          </View>
          <TouchableOpacity onPress={()=>router.push('/(routers)/notfications')}>
            <Image
              source={require('../../assets/notification.png')}
              style={styles.notificationIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Arama çubuğu */}
        <TextInput
          style={styles.searchInput}
          placeholder="Kategori ara..."
          value={searchText}
          onChangeText={handleSearch}
        />

        {/* Categories */}
        <Text style={styles.sectionTitle}>📂Categories</Text>
        <FlatList
          horizontal
          data={filteredCategories}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.categoryList}
          renderItem={({ item }) => (
            <TouchableOpacity style={[styles.circle, { backgroundColor: item.color || '#60a5fa' }]}
            onPress={() => handleCategoryPress(item.id)}>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />

        {/* Popüler Dersler */}
        <Text style={styles.sectionTitle}>📚 Populer Lessons</Text>
        <FlatList
          horizontal
          data={courses}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.courseList}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.courseCard}
             onPress={()=>handleCoursePress(item.id)}
             >
              <Image source={item.image} style={styles.courseImage} />
              <Text style={styles.courseTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />

        {/* Exams */}
        <Text style={styles.sectionTitle}>📝 Exams</Text>
        <FlatList
          horizontal
          data={exams}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.courseList}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.courseCard2} onPress={()=> handleExamPress (item.id)}>
              <Image source={item.image} style={styles.courseImage} />
              <Text style={styles.courseTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
        {/* Quizler */}
            <Text style={styles.sectionTitle}>🧠 Quizs</Text>
            <FlatList
              horizontal
              data={quizzes}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.courseList}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.quizItem}
                onPress={() =>handleQuizPress(item.id)}
                >
                  <Image source={item.image} style={styles.courseImage} />
                  <Text style={styles.courseTitle}>{item.title}</Text>
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <View style={{ width: 16 }} />} // Araya boşluk
              showsHorizontalScrollIndicator={false}
            />
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* AI Butonu */}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  quizItem: {
  marginRight: 0, 
  alignItems: 'center',
},
  notificationIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  searchInput: {
    backgroundColor: '#f1f5f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  categoryList: {
    paddingVertical: 10,
    marginBottom: 10,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  categoryImage: {
    width: 40,
    height: 40,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  categoryText: {
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  courseList: {
    paddingVertical: 10,
  },
    courseCard: {
    width: 150,
    marginRight: 15,
    backgroundColor: '#E8EFF9',
    borderRadius: 30,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, // Android için gölge
  },
  courseCard2: {
    width: 150,
    marginRight: 15,
    backgroundColor: '#ffe9e3',
    borderRadius: 30,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, // Android için gölge
  },
  courseImage: {
    width: 120,
    height: 120,
    marginBottom: 10,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  courseTitle: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
  bottomPadding: {
    height: 200,
  },
});
