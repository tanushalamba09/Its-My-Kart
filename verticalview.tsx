import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import MerchantProf from './MerchantProf';

import Offer from './Icons/discount.png';

const Stack = createStackNavigator();

const VerticalView = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (categoryName: string) => {
    console.log(`Category ${categoryName} pressed`);
   
    navigation.navigate('MerchantProf');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          onPress={() => handleCategoryPress(category.id)}
        >
          <View style={styles.rowContainer}>
            <Image source={Offer} style={styles.icon} />
            <View>
              <Text style={styles.offerName}>Offer Name </Text>
              <Text style={styles.discountType}>% Discount Type</Text>
              <Button
                title="View Offer"
                onPress={() => handleCategoryPress(category.id)}
                color="#007AFF"
                style={styles.button}
              />
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const categories = [
  { id: 'Category 1' },
  { id: 'Category 2' },
  { id: 'Category 3' },
  { id: 'Category 4' },
  { id: 'Category 5' },
];

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 0.2,
    borderColor: 'grey',
    flex: 1,
    paddingBottom: 20,
  },
  icon: {
    width: 85,
    height: 85,
    marginRight: 10,
  },
  button: {
    flex: 1,
  },
  offerName: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  discountType: {
    fontSize: 24,
  },
});
export default VerticalView;
