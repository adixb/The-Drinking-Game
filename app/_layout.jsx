import { View, Text } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'
export default function _layout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="onboardpage" options={{headerShown:false}} />
        <Stack.Screen name="otppage" options={{headerShown:false}}/>
        <Stack.Screen name="welcomepage" options={{headerShown:false}}/>
    </Stack>
  )
}