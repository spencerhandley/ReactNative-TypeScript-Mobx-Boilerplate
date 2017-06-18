import CounterStore from '../../src/stores/CounterStore';

let store;

it('Defaults to zero', () => {
    store = new CounterStore();
    expect(store.count).toBe(0);
});

it('can be initialized to a specific value', () => {
    let expectedCount = 4;
    store = new CounterStore(expectedCount);
    
    expect(store.count).toBe(4);
});

it('increments by 1', () => {
    store = new CounterStore(0);

    store.increment();

    expect(store.count).toBe(1);
});

it('decrements by 1', () => {
    store = new CounterStore(3);

    store.decrement();

    expect(store.count).toBe(2);
});