import { StyleSheet, ScrollView, View } from "react-native";
import React, { useState } from "react";
import CheckBox from "@react-native-community/checkbox";
import { DataTable, Text, Button } from "react-native-paper";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {GLOBAL_CONTEXT} from "../constants/data";

import {
  trackEventByCase,
  trackEventByCaseWithGlobalContext,
} from "../utils/tracker";
import { RootStackParamList } from "../types";

const styles = StyleSheet.create({
  valueCell: {
    flex: 3,
  },
});

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

function DetailsScreen({ route }: Props) {
  const { item } = route.params;

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleSendEventPress = () => {
    if (toggleCheckBox) {
      trackEventByCaseWithGlobalContext(item.id, GLOBAL_CONTEXT);
    } else {
      trackEventByCase(item.id);
    }
  };

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

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 16,
        }}
      >
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />

        <Text style={{ paddingLeft: 8 }}>Update Global Context</Text>
      </View>
      <View style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
        <Button mode="contained" onPress={handleSendEventPress}>
          Send Event
        </Button>
      </View>
    </ScrollView>
  );
}

export default DetailsScreen;
