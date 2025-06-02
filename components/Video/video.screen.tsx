import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../../configs/FirebaseConfig';
import { Video, ResizeMode } from 'expo-av';

type VideoItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: number;
  level: string;
  videoUrl: string;
};

const screenWidth = Dimensions.get('window').width;

export default function VideoScreen() {
  const [videos, setVideos] = useState<VideoItem[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const db = getFirestore(app);
        const querySnapshot = await getDocs(collection(db, 'Videos'));
        const fetchedVideos: VideoItem[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetchedVideos.push({
            id: doc.id,
            title: data.title,
            description: data.description,
            category: data.category,
            duration: data.duration,
            level: data.level,
            videoUrl: data.videoUrl,
          });
        });

        setVideos(fetchedVideos);
      } catch (error) {
        console.error('Veriler alınırken hata oluştu:', error);
      }
    };

    fetchVideos();
  }, []);

  const handlePress = (item: VideoItem) => {
    // Gelecekte detay sayfası için kullanılabilir
  };

  const renderItem = ({ item }: { item: VideoItem }) => (
    <TouchableOpacity onPress={() => handlePress(item)} activeOpacity={0.8}>
      <View style={styles.card}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>🎬 {item.category}</Text>
        </View>

        <Video
          source={{ uri: item.videoUrl }}
          resizeMode={ResizeMode.COVER}
          useNativeControls
          shouldPlay={false}
          isMuted={false}
          style={styles.video}
        />

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.duration}>
          {item.level} - {item.duration} dk
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={videos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingBottom: 40,
    backgroundColor: '#f9f9f9',
  },
  card: {
    width: screenWidth * 0.92,
    alignSelf: 'center',
    marginBottom: 24,
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#9b59b6',
    shadowColor: '#9b59b6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  labelContainer: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#9b59b6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    zIndex: 1,
  },
  labelText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '600',
  },
  video: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginTop: 8,
    backgroundColor: '#000',
  },
  title: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  description: {
    marginTop: 6,
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 6,
  },
  duration: {
    marginTop: 6,
    fontSize: 12,
    color: '#9b59b6',
    fontWeight: '500',
    textAlign: 'center',
  },
});

