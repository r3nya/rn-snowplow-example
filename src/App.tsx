import React from 'react';
import { PaperProvider, Divider, MD3LightTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CaseItem from './components/CaseItem';
import CASES from './constants/cases';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <PaperProvider theme={MD3LightTheme}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={({ route }) => ({ title: route.params.item.case })}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
