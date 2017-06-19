import CounterStore from './counterStore';
import SideBarStore from './SideBarStore';

export type StoreName = 'counter' | 'sidebar';

export const storeNames: StoreName[] = [
    'counter',
    'sidebar'
];

export interface Stores {
    counterStore: CounterStore,
    sidebarStore: SideBarStore
};
