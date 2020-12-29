import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator()

const AuthNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Welcome">
			<Stack.Screen 
				component={WelcomeScreen}
				name="Welcome"
				options={{
					headerShown: false
				}}
				/>
			<Stack.Screen name="Login" component={LoginScreen}/>
			<Stack.Screen name="Register" component={RegisterScreen} />
		</Stack.Navigator>
	)
}

export default AuthNavigator;