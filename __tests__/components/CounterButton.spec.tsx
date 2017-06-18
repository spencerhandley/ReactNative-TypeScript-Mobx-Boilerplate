import * as React from 'react';
import CounterButton from '../../src/components/CounterButton';
import * as td from 'testdouble';
import { shallow } from 'enzyme';
import {Button} from 'react-native-elements';

let wrapper;

it('contains a button', () => {
    wrapper = shallow(<CounterButton onPress={() => {}} text="Add" iconName="plus"/>);
    const buttonProps: any = wrapper.find(Button).props();

    expect(wrapper.find(Button)).toBeDefined();
    expect(buttonProps.title).toBe('Add');    
});


it('Handles onPress', () => {
    const fakeOnPressHandler = td.function('onPress');

    wrapper = shallow(<CounterButton onPress={fakeOnPressHandler} text="Add" iconName="plus" />);
    const button = wrapper.find(Button);
    button.simulate('press');
    
    td.verify(fakeOnPressHandler());
});