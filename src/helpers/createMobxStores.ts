import { Stores } from '../stores/types';
import CounterStore from '../stores/CounterStore';

const createMobxStores = (): Stores => {
    return {
        counterStore: new CounterStore(1),
    };
}

export default createMobxStores;