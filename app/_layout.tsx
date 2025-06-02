import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, useNavigation } from 'expo-router'
import {useFonts} from 'expo-font'

export default function RootLayout() {

    useFonts({
        'outfit':require('../assets/fonts/Outfit-Regular.ttf'),
        'outfit-medium':require('../assets/fonts/Outfit-Medium.ttf'),
        'outfit-bold':require('../assets/fonts/Outfit-Bold.ttf'),
    })

    
  return (
   
    <Stack screenOptions={{
        headerShown:false
   }}>
            <Stack.Screen name='index'/>  
            <Stack.Screen name='(routers)/welcome-intro/index'/>   
            <Stack.Screen name='(routers)/login/index'/>    
            <Stack.Screen name='(routers)/sign-up/index'/>  
            <Stack.Screen name='(routers)/forgot-password/index'/> 
            <Stack.Screen name="(tabs)" />
   </Stack>
  )
}