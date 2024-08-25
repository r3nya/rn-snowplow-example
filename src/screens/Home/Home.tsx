import { ScrollView, View } from 'react-native';
import { Divider } from 'react-native-paper';
import React from 'react';

import CASES from '../../constants/cases';
import CaseItem from '../../components/CaseItem';

// TODO: Add types
function HomeScreen({ navigation }) {
  const handleCaseItemPress = (item) => () => navigation.navigate('Details', { item });

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={{}}>
        <Divider />
        {CASES.map((item) => (
          <>
            <CaseItem
              key={item.id}
              item={item}
              onPress={handleCaseItemPress(item)}
            />
            <Divider />
          </>
        ))}
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
