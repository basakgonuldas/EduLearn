import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
} from 'react-native';

import { flashcards } from '../../constants/flashcardData';


type Flashcard = {
  question: string;
  options: string[];
  answer: string;
  ders: string;
};

export default function ExploreScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const categories = Array.from(new Set(flashcards.map((card) => card.ders)));

  const filteredFlashcards: Flashcard[] = selectedCategory
    ? flashcards.filter((card) => card.ders === selectedCategory)
    : [];

  const currentCard = filteredFlashcards[currentIndex];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption('');
    setShowAnswer(false);
  };

  const handleOptionPress = (option: string) => {
    if (showAnswer) return;
    setSelectedOption(option);
    setShowAnswer(true);
    if (option === currentCard.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < filteredFlashcards.length) {
      setCurrentIndex(nextIndex);
    } else {
      Alert.alert('Oyun Bitti', `Puanınız: ${score}/${filteredFlashcards.length}`);
      setSelectedCategory(null);
      setCurrentIndex(0);
      setScore(0);
    }
    setSelectedOption('');
    setShowAnswer(false);
  };

  const renderOptionStyle = (option: string) => {
    const isCorrect = option === currentCard.answer;
    const isSelected = option === selectedOption;

    if (!showAnswer) return styles.option;
    if (isCorrect) return [styles.option, styles.correct];
    if (isSelected && !isCorrect) return [styles.option, styles.incorrect];
    return styles.option;
  };

  if (!selectedCategory) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Bir kategori seçin</Text>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={styles.categoryButton}
            onPress={() => handleCategorySelect(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }

  if (!currentCard) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Geçerli bir soru yok.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Geri butonu */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setSelectedCategory(null)}
      >
        <Image source={require('../../assets/icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <Text style={styles.title}>
        {selectedCategory} - Soru {currentIndex + 1}
      </Text>
      <Text style={styles.question}>{currentCard.question}</Text>

      {currentCard.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={renderOptionStyle(option)}
          onPress={() => handleOptionPress(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      {showAnswer && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>
            {currentIndex + 1 === filteredFlashcards.length ? 'Bitir' : 'Sonraki'}
          </Text>
        </TouchableOpacity>
      )}

      <Text style={styles.score}>Puan: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  categoryButton: {
    backgroundColor: '#b2ebf2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  categoryText: {
    fontSize: 18,
    textAlign: 'center',
  },
  question: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
  },
  option: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  correct: {
    backgroundColor: '#a5d6a7',
  },
  incorrect: {
    backgroundColor: '#ef9a9a',
  },
  nextButton: {
    backgroundColor: '#00796b',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  score: {
    marginTop: 30,
    fontSize: 18,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#000', // isteğe bağlı renk filtresi
  },
});
