import { createTracker } from '@snowplow/react-native-tracker';

import CASES from './constants/cases';
import DATA from './constants/data';

const COLLECTOR_URL = 'https://stream.datago.ru/collector';

const tracker = createTracker('appTracker', {
  endpoint: COLLECTOR_URL,
});

type CaseIdType = keyof typeof DATA;

export const trackEventByCase = (caseId: CaseIdType) => {
  const eventCase = CASES.find((c) => c.id === caseId);

  if (eventCase) {
    // @ts-ignore
    tracker.trackSelfDescribingEvent(DATA[caseId]);
  }
};
