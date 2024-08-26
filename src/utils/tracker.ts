import {
  createTracker,
  type ScreenViewProps,
} from "@snowplow/react-native-tracker";

import { COLLECTOR_URL } from "../config/api";
import { CaseId } from "../types.ts";

import CASES from "../constants/cases";
import DATA from "../constants/data";

const tracker = createTracker("appTracker", {
  endpoint: COLLECTOR_URL,
});

export const trackScreenView = (screenData: ScreenViewProps) => {
  /*
  screenData: Object:
    keys:
      name: required: String
      type: optional: String
      transitionType: optional: String
  */
  try {
    tracker.trackScreenViewEvent(screenData);
  } catch (e) {
    // Do something with error
  }
};

export const trackEventByCase = (caseId: CaseId) => {
  const eventCase = CASES.find((c) => c.id === caseId);

  if (eventCase) {
    // @ts-ignore
    tracker.trackSelfDescribingEvent(DATA[caseId]);
  }
};
