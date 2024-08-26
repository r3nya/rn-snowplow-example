import React from 'react';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import { trackScreenView } from './tracker';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const handleStateChange = (state: NavigationState | undefined ) => {
    if (!state) return;

    const currentRoute = state.routes[state.index];

    if (currentRoute.name === 'Details' && currentRoute.params) {
      // @ts-ignore
      trackScreenView({name: currentRoute.params.item.case, type: 'Detail', transitionType: ''});
      // trackEventByCase(currentRoute.params.item.id);
    }
  }

  return (
    <NavigationContainer
      onStateChange={handleStateChange}
    >
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
