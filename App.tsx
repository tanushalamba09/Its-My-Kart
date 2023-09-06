import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import HorzView from './horizontalview';
import VerticalView from './verticalview';
import BottomNavigation from './bottomnav';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MerchantProf from "./MerchantProf";
import CustomHeader from './header';

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <HorzView></HorzView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="VerticalView">
          <Stack.Screen name="VerticalView" component={VerticalView} />
          <Stack.Screen name="MerchantProf" component={MerchantProf} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});

export default App;
