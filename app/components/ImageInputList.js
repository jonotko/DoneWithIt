import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({imageUris = [], onRemoveImage, onAddImage }) {
	return (
		<View>
			<ScrollView horizontal>
				<View style={styles.container}>
					{
						imageUris.map(uri => (
							<View key={uri} style={styles.image}>
								<ImageInput  imageuri={uri} onChangeImage={() => onRemoveImage(uri)} />
							</View>

							)
						)
					}
					<ImageInput onChangeImage={onAddImage} />
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row"
	},
	image: {
		marginRight: 10
	}
})

export default ImageInputList;