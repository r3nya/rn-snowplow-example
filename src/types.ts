import CASES from './constants/cases';

export type CaseItem = (typeof CASES)[number];
export type CaseId = CaseItem['id'];

export type RootStackParamList = {
  Home: undefined;
  Details: { item: CaseItem };
};
