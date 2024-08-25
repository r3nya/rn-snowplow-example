import CASES from './constants/cases';

export type RootStackParamList = {
  Home: undefined,
  Details: { item: (typeof CASES)[number] },
};
