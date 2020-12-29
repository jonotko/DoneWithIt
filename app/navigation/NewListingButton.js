import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

function NewListingButton({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress} containerStyle={{ overflow: 'visible' }}>
			<View style={styles.container}>
				<MaterialCommunityIcons name="plus-circle" color={colors.white} size={30} />
			</View>
		</TouchableOpacity>	
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: colors.primary,
		borderRadius: 40,
		borderColor: colors.white,
		borderWidth: 10,
		bottom: 20,
		width: 80,
		height: 80,
		justifyContent: "center"
	}
})

export default NewListingButton;