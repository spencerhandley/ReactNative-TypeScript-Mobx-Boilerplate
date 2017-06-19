import * as React from 'react';
import CounterComponent from '../../src/components/Counter';
import CounterButton from '../../src/components/CounterButton';
import CounterStore from '../../src/stores/CounterStore';
import {Text} from 'react-native';
import { shallow } from 'enzyme';

let wrapper;
let CounterComp = CounterComponent as any;
let Counter = CounterComp.wrappedComponent;


test('Contains text with the count', () => {
    let defaultStore: CounterStore = new CounterStore(1);    
    wrapper = shallow(<Counter counterStore={defaultStore} />);
 
    expect(wrapper.find(Text).length).toBe(1);
    expect(wrapper.find(Text).dive().text()).toBe(`The count is currently: ${defaultStore.count}`);
});

test('Contains two counter buttons', () => {
    let defaultStore: CounterStore = new CounterStore(1);    
    wrapper = shallow(<Counter counterStore={defaultStore} />);
 
    expect(wrapper.find(CounterButton).length).toBe(2);
});
