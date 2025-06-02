import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import historyExamQuestions from '../../data/exam/tarih';
import { Ionicons } from '@expo/vector-icons';
import {useRouter} from 'expo-router'

export default function History({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const router=useRouter();

  const currentQuestion = historyExamQuestions[currentIndex];

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < historyExamQuestions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sınav Bitti ✅</Text>
        <Text style={styles.score}>Skor: {score} / {historyExamQuestions.length}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIcon} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>🧠 Soru {currentIndex + 1}</Text>
      <Text style={styles.question}>{currentQuestion.question}</Text>

      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionButton,
            selectedOption && option === currentQuestion.answer && styles.correct,
            selectedOption && option === selectedOption && option !== currentQuestion.answer && styles.incorrect
          ]}
          onPress={() => handleOptionPress(option)}
          disabled={!!selectedOption}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      {selectedOption && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Sonraki Soru</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f4f0ff',
  },
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center'
  },
  optionButton: {
    backgroundColor: '#a678f0',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },
  correct: {
    backgroundColor: '#4CAF50',
  },
  incorrect: {
    backgroundColor: '#f44336',
  },
  score: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  },
  nextButton: {
    backgroundColor: '#6b4bbb',
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
