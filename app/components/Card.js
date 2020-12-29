import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../config/colors';
import AppText from './AppText';

function Card({title, subtitle, imageUrl, onPress}) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.card}>
				<Image style={styles.image} source={{ uri: imageUrl }} />
				<View style={styles.detailContainer}>
					<AppText style={styles.title}>{title}</AppText>
					<AppText style={styles.subtitle}>{subtitle}</AppText>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
		overflow: 'hidden'
	},
	detailContainer: {
		padding: 20
	},
	image: {
		width: '100%',
		height: 200
	},
	subtitle: {
		color: colors.secondary,
		fontWeight: 'bold'
	},
	title: {
		marginBottom: 7
	}
})

export default Card