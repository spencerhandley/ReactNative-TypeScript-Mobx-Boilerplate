import * as React from 'react';
import CounterButton from '../../src/components/CounterButton';
import * as td from 'testdouble';
import { shallow } from 'enzyme';
import {TouchableHighlight} from 'react-native';

let wrapper;

it('contains a button', () => {
    wrapper = shallow(<CounterButton onPress={() => {}} text="Add" />);

    expect(wrapper.find(TouchableHighlight)).toBeDefined();
    expect(wrapper.find(TouchableHighlight).children().children().text()).toBe('Add');    
});


it('Handles onPress', () => {
    const fakeOnPressHandler = td.function('onPress');

    wrapper = shallow(<CounterButton onPress={fakeOnPressHandler} text="Add" />);
    const button = wrapper.find(TouchableHighlight);
    button.simulate('press');
    
    td.verify(fakeOnPressHandler());
});