import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '@/constants/Colors'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarBackground: () => (
          <LinearGradient
            colors={["#8a0a84", "#121671"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1, borderRadius: 20 }}
          />
        ),
        tabBarStyle: {
          marginBottom: 10,
          borderRadius: 20,
          alignItems: 'center',
          width: '100%',
          height: '7%',
          position: 'absolute', 
          overflow: 'hidden', 
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'outfit-medium',
          color: 'white',
          textAlign: 'center'
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#f39c12',
          height: 3,
          borderRadius: 90,
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icons/home.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          title: 'Game',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icons/game.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='lessons'
        options={{
          title: 'Lessons',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icons/lessons.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='video'
        options={{
          title: 'Video',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icons/video.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icons/profile.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tabs>
  )
}
