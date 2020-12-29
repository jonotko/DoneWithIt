import React, { useEffect } from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ImageInput = ({imageuri, onChangeImage}) => {

	useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

	const handlePress = () => {
		if(!imageuri) pickImage()
		else Alert.alert("Delete","Are you sure you want to delete", [
			{text: "Yes", onPress: () => onChangeImage(null)},
			{text: "No"}
		])
	}

	const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      onChangeImage(result.uri);
    }
	};
	
	return (
	<TouchableWithoutFeedback onPress={handlePress}>
		<View style={styles.container}>
			{ 
			!imageuri && <MaterialCommunityIcons name="camera" color={colors.medium} size={40}/>
			}
			{
				imageuri && <Image source={{uri: imageuri}} style={styles.image} />
			}
		</View>
	</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 100,
		height: 100,
		backgroundColor: colors.light,
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center",
		overflow: "hidden"
	},
	image: {
		width: '100%',
		height: '100%'
	}
})

export default ImageInput;