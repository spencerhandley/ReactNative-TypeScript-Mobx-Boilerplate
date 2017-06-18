import CounterStore from './counterStore';

export type StoreName = 'counter';

export const storeNames: StoreName[] = [
    'counter'
];

export interface Stores {
    counterStore: CounterStore
};
