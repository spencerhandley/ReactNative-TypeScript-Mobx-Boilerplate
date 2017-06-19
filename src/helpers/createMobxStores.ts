import { Stores } from '../stores/types';
import CounterStore from '../stores/CounterStore';
import SideBarStore from '../stores/SideBarStore';

const createMobxStores = (): Stores => {
    return {
        counterStore: new CounterStore(1),
        sidebarStore: new SideBarStore()
    };
}

export default createMobxStores;