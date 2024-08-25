import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { DataTable, Text } from 'react-native-paper';

const styles = StyleSheet.create({
  valueCell: {
    flex: 3,
  },
});

function DetailsScreen({ route }) {
  const { item } = route.params;
  console.log(item);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>
            <Text variant="titleMedium">Key</Text>
          </DataTable.Title>
          <DataTable.Title style={styles.valueCell}>
            <Text variant="titleMedium">Value</Text>
          </DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>
            <Text variant="labelLarge">id</Text>
          </DataTable.Cell>
          <DataTable.Cell style={styles.valueCell}>{item.id}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text variant="labelLarge">case</Text>
          </DataTable.Cell>
          <DataTable.Cell style={styles.valueCell}>
            <Text variant="bodyLarge">{item.case}</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text variant="labelLarge">description</Text>
          </DataTable.Cell>
          <DataTable.Cell style={styles.valueCell}>
            <Text variant="bodyLarge">{item.description}</Text>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </ScrollView>
  );
}

export default DetailsScreen;
