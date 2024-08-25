import React from 'react';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer, NavigationState } from "@react-navigation/native";

import AppNavigator from "./screens/root";
import { CaseItem } from "./types";
import { trackEventByCase } from "./utils/tracker";


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const handleStateChange = (state: NavigationState | undefined) => {
    if (!state) return;

    const currentRoute = state.routes[state.index];

    if (currentRoute.name === 'Details' && currentRoute.params && 'item' in currentRoute.params) {
      const { item } = currentRoute.params as { item: CaseItem };

      trackEventByCase(item.id);
    }
  };

  return (
    <NavigationContainer onStateChange={handleStateChange}>
      <PaperProvider theme={MD3LightTheme}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

          <AppNavigator />
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
