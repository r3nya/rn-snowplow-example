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
          <React.Fragment key={item.id}>
            <CaseItem
              item={item}
              onPress={handleCaseItemPress(item)}
            />
            <Divider />
          </React.Fragment>
        ))}
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
