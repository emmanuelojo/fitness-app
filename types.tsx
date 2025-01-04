/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Workout } from "./data";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  // Index: string
  Home: any;
  PlanOverview: { workout: Workout };
  SplashScreen: undefined;
  // SplashScreen: {};
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;
