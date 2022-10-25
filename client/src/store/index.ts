import { atom } from "recoil";

export enum AtomKeys {
  LOCK_SCREEN = 'lockScreen',
};

export const lockScreenState = atom<boolean>({
  key: AtomKeys.LOCK_SCREEN,
  default: false,
});