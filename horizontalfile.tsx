import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const HorzView = () => {
  const handleCategoryPress = (categoryName: string) => {
    console.log(`Category ${categoryName} pressed`);
  };

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <TouchableOpacity onPress={() => handleCategoryPress('Category 1')}>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Category 1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCategoryPress('Category 2')}>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Category 2</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCategoryPress('Category 3')}>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Category 3</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCategoryPress('Category 4')}>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Category 4</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFD700',
  },
  category: {
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HorzView;
