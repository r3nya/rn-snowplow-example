import CASES from '../constants/cases';
import { View, StyleSheet } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';

const CaseItem = (item: (typeof CASES)[number]) => {
  return (
    <TouchableRipple
      onPress={() => console.log('Pressed')}
      rippleColor="rgba(0, 0, 0, .32)"
    >
      <View style={styles.container}>
        <Text
          variant="labelLarge"
          style={styles.titleText}
        >
          {item.case}
        </Text>
        <Text variant="labelMedium">{item.description}</Text>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  titleText: {
    paddingBottom: 8,
  },
});

export default CaseItem;
