import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListEditingScreen from '../screens/ListEditingScreen';
import FeedNavigation from './FeedNavigation';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen 
				name="Listings" 
				component={FeedNavigation} 
				options={{
					tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />
					}}
				/>
			<Tab.Screen 
				name="ListingEdit" 
				component={ListEditingScreen} 
				options={({ navigation }) => ({
					tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("ListingEdit")}/>,
					tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="plus-circle" size={size} color={color} />
					})}
			/>
			<Tab.Screen 
				name="Account" 
				component={AccountNavigator} 
				options={{
					tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} />
					}}
			/>
		</Tab.Navigator>
	)
}

export default AppNavigation;