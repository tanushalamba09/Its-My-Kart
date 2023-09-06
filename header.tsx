import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import bellIcon from './Icons/notification.png';
import sortIcon from './Icons/sort (1).png';
        const CustomHeader = () => {
            return (
              <View>
                <View style={styles.header}>
                  <View style={styles.rightIcon}>
                    <Image source={bellIcon} style={styles.icon} />
                  </View>
          
                  <Text style={styles.headerText}>Discounts</Text>
          
                  <View style={styles.leftIcon}>
                    <Image source={sortIcon} style={styles.icon} />
                  </View>
                </View>
              </View>
            );
          };
          
          const styles = StyleSheet.create({
            header: {
              backgroundColor: 'orange',
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              flexDirection: 'row',
            },
            headerText: {
              fontSize: 24,
              fontWeight: 'bold',
              color: 'white',
              flex: 1, 
              textAlign: 'center', 
            },
            leftIcon: {
              position: 'absolute',
              left: 10, 
            },
            rightIcon: {
              position: 'absolute',
              right: 10, 
            },
            icon: {
              width: 24, 
              height: 24, 
              tintColor: 'white', 
            },
          });
export default CustomHeader;
