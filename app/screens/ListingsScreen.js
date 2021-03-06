import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from "../config/colors";
import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';


function ListingsScreen({ navigation }) {

	const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings)

	useEffect(() => {
		loadListings()
	}, [])


	return (
		<Screen style={styles.screen}>
			{ error && 
				<>
					<AppText>Couldn't retrieve listings</AppText>
					<AppButton title="Retry" onPress={loadListings}/>
				</>
			}
			<ActivityIndicator visible={loading} />
			<FlatList 
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => 
				<Card 
					title={item.title}
					subtitle={"$" + item.price}
					imageUrl={item.images[0].url}
					onPress={() => navigation.navigate("ListingDetails", item)}
				/>
				}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;