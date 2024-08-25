// import { trackSelfDescribingEvent } from '@snowplow/react-native-tracker';

import CASES from './constants/cases';
import DATA from './constants/data';

export const trackEventByCase = (caseId: number) => {
  const eventCase = CASES.find((c) => c.id === caseId);
  if (eventCase) {
    console.log(eventCase, DATA[caseId]);
    // trackSelfDescribingEvent(DATA[caseId]);
  }
};
