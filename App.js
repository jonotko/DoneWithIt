import React, { useState, useEffect } from 'react';
import ImageInput from './app/components/ImageInput';
import Screen from './app/components/Screen';
import ListEditingScreen from './app/screens/ListEditingScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import * as ImagePicker from 'expo-image-picker';
import ImageInputList from './app/components/ImageInputList';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './app/navigation/AppNavigation';
import navigationTheme from './app/navigation/NavigationTheme';


export default function App() {

  return (
		<NavigationContainer theme={navigationTheme}>
			<AppNavigation />
		</NavigationContainer>
	);
}

