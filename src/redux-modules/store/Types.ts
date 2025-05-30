import { Store } from 'redux';

export type StoreConfig = {
  store: Store;
};

export type DialogState = {
  openModelIds: string[];
};
