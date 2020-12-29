import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AppText from './AppText';
import Icon from './Icon';

function CategoryPickerItem({item , onPress}) {
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={onPress}>
				<View>
					<Icon backgroundColor={item.backgroundColor} name={item.icon} size={60}/>
					<AppText style={styles.label}>{item.label}</AppText>
				</View>
			</TouchableWithoutFeedback>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 15,
		paddingHorizontal: 30,
		alignItems: "center",
		width: '33%'
	},
	label: {
		marginTop: 5,
		textAlign: "center"
	}
})

export default CategoryPickerItem;