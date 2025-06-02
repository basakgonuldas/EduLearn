import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function AI({ onPress }) {
    const router=useRouter();
  return (
    <TouchableOpacity 
      style={styles.aiButton}
     onPress={() => router.push('/yapayzeka')}
    >
      <Image 
        source={require('../../assets/ai.png')} 
        style={styles.aiIcon}
      />
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  aiButton: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    width: 60,
    height: 60,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  aiIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  aiIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aiIconText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});