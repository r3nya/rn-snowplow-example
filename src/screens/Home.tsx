import { ScrollView, View } from 'react-native';
import { Divider } from 'react-native-paper';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import CASES from '../constants/cases';
import CaseItem from '../components/CaseItem';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: Props) {
  const handleCaseItemPress = (item: (typeof CASES)[number]) => () =>
    navigation.navigate('Details', { item });

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
