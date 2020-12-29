import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import listingsApi from '../api/listings';
import useApi from '../hooks/useApi';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
	category: Yup.object().required().nullable().label("Category"),
	images: Yup.array().min(1, "Please select at least one image")
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

const ListEditingScreen = (props) => {

	const { data, error, loading, request } = useApi(listingsApi.postListings);


	const handleSubmit = async (listing) => {
		console.log("in handle submit")
		const result = await listingsApi.addListing(listing);
		if(!result.ok) {
			return alert('Could not save listing');
		}
		alert('Success')
	}
	// validationSchema={validationSchema}
	return (
		<Screen style={styles.container}>
			<AppForm
			initialValues={{
				title: "",
				price: "",
				description: "",
				category: null,
				images: []
			}}
			onSubmit={handleSubmit}
			
			>
			<FormImagePicker name="images" />	
			<AppFormField 
				autoCapitalize='none'
				autoCorrect={false}
				name="title"
				placeholder="Title"
		/>
			<AppFormField 
				keyboardType="numeric"
				name="price"
				placeholder="Price"
		/>
			<AppFormPicker 
				items={categories}
				name="category"
				numberOfColumns={3}
				placeholder="Category"
				PickerItemComponent={CategoryPickerItem}
			/>
			<AppFormField 
				autoCapitalize='none'
				autoCorrect={false}
				name="description"
				placeholder="Description"
		/>

			<SubmitButton title="Post" />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default ListEditingScreen;