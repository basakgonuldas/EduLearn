import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import cografyaQuestions from '../../data/quiz/cografyadata';

const Flashcard = ({ question, answer, flipped, onFlip }) => {
  return (
    <TouchableOpacity onPress={onFlip} style={styles.card}>
      <Text style={styles.cardText}>{flipped ? answer : question}</Text>
    </TouchableOpacity>
  );
};

const GeoApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [score, setScore] = useState(0);

  const nextCard = () => {
    setFlipped(false);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleCorrect = () => {
    setScore(score + 1);
    nextCard();
  };

  const handleWrong = () => {
    nextCard();
  };

  if (currentIndex >= cografyaQuestions.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🎉 Oyun Bitti!</Text>
        <Text style={styles.scoreText}>Puanın: {score} / {cografyaQuestions.length}</Text>
        <TouchableOpacity style={styles.purpleButton} onPress={() => {
          setCurrentIndex(0);
          setScore(0);
          setFlipped(false);
        }}>
          <Text style={styles.buttonText}>🔁 Tekrar Oyna</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const { question, answer } = cografyaQuestions[currentIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧠 Cografya Flashcard Oyunu</Text>
      <Text style={styles.progressText}>Soru {currentIndex + 1} / {cografyaQuestions.length}</Text>

      <Flashcard
        question={question}
        answer={answer}
        flipped={flipped}
        onFlip={() => setFlipped(!flipped)}
      />

      {flipped ? (
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.correctButton} onPress={handleCorrect}>
            <Text style={styles.buttonText}>✅ Doğru</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrongButton} onPress={handleWrong}>
            <Text style={styles.buttonText}>❌ Yanlış</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.purpleButton} onPress={() => setFlipped(true)}>
          <Text style={styles.buttonText}>Cevabı Gör 👀</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  progressText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  cardText: {
    fontSize: 22,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  purpleButton: {
    backgroundColor: '#8e44ad',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 30,
  },
  correctButton: {
    backgroundColor: '#8e44ad',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  wrongButton: {
    backgroundColor: '#c0392b',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: 22,
    marginVertical: 20,
    textAlign: 'center',
  },
});

export default GeoApp;
