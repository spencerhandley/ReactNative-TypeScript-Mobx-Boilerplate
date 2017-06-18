import * as React from 'react';
import { Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { Stores } from '../stores/types';
import CounterStore from '../stores/CounterStore';
import CounterButton from './CounterButton';

interface StoresForComponent {
  counterStore?: CounterStore;
}

interface Props extends StoresForComponent {}

@inject((stores: Stores): Props => ({ counterStore: stores.counterStore }))
@observer
export default class Counter extends React.Component<Props, {}> {
  componentWillReact() {
    console.log('I will re-render, since the todo has changed!');
  }

  render() {
    const { counterStore } = this.props;
    console.log(counterStore);
    return (
      <View>
        <Text>The count is currently: {counterStore!.count}</Text>
        <CounterButton
          text="Increment"
          onPress={counterStore!.increment}
        />
        <CounterButton
          text="Decrement"
          onPress={counterStore!.decrement}
        />
      </View>
    );
  }
}
