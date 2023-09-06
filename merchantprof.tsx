import React, { useState } from "react";
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import Offer from './Icons/discount.png';

const images = [
  Offer, Offer, Offer
];

const data = ["Description", "Terms", "Branches"];

const contentData = { 
    Description: `% Discount Type
    Offer Name
    Offer description goes here.
    3rd Line`,
  Terms: "These are the terms and conditions.",
  Branches: "These are the branch locations.",
};

const MerchantProf = () => {
  const [activeTab, setActiveTab] = useState(data[0]);

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} autoplay={true} autoplayTimeout={4}>
        {images.map((imageComponent, index) => (
          <View key={index} style={styles.slide}>
            <Image source={imageComponent} style={styles.image} />
          </View>
        ))}
      </Swiper>

      <View style={styles.tabContainer}>
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleTabPress(item)}
              style={[
                styles.section,
                activeTab === item ? styles.activeSection : null,
              ]}
            >
              <Text style={[styles.sectionText, activeTab === item ? styles.activeSectionText : null]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          style={styles.tabList}
        />
        <View style={styles.content}>
          <Text style={styles.contentText}>{contentData[activeTab]}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.subscribeButton}>
        <Text style={styles.subscribeButtonText}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "40%",
    height: "40%",
  },
  tabContainer: {
    flex: 1,
  },
  tabList: {
    height: 20, 
  },
  section: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: 135,
    height: 40, 
    marginRight: 5, 
    borderRadius: 10,
  },
  sectionText: {
    fontWeight: "bold",
  },
  activeSection: {
    borderBottomWidth: 2,
    borderBottomColor: "blue", 
  },
  activeSectionText: {
    color: "blue", 
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: "#f2f2f2", 
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    paddingBottom:100
  },
  subscribeButton: {
    backgroundColor: "orange",
    paddingVertical: 10,
    alignItems: "center",
  },
  subscribeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default MerchantProf;
