import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity } from 'react-native';

const ScreenOne = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate('Two')}>
    <Text>One</Text>
  </TouchableOpacity>
);
const ScreenTwo = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate('Three')}>
    <Text>Two</Text>
  </TouchableOpacity>
);
const ScreenThree = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate('Tabs', { screen: 'Search' })}>
    <Text>Three</Text>
  </TouchableOpacity>
);

const NativeStack = createNativeStackNavigator();

function Stack() {
  return (
    <NativeStack.Navigator
      screenOptions={{ headerBackTitleVisible: false, animation: 'fade' }}
    >
      <NativeStack.Screen name="One" component={ScreenOne} />
      <NativeStack.Screen name="Two" component={ScreenTwo} />
      <NativeStack.Screen
        name="Three"
        component={ScreenThree}
        options={{ presentation: 'modal' }}
      />
    </NativeStack.Navigator>
  );
}

export default Stack;
