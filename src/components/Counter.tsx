import * as React from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react';
import { Stores } from '../stores/types';
import { Card } from 'react-native-elements';
import CounterStore from '../stores/CounterStore';
import CounterButton from './CounterButton';

interface StoresForComponent {
  counterStore?: CounterStore;
}

export interface Props extends StoresForComponent {}

@inject((stores: Stores): Props => ({ counterStore: stores.counterStore }))
@observer
export default class Counter extends React.Component<Props, {}> {
  constructor(props: Props, context: any) {
    super(props, context);
  }

  render() {
    const { counterStore } = this.props;
    return (
      <View>
        <Card>
          <Text style={{ textAlign: 'center' }}>
            The count is currently: {counterStore!.count}
          </Text>
          <CounterButton
            iconName="plus"
            text="Increment"
            onPress={counterStore!.increment}
            backgroundColor="green"
          />
          <CounterButton
            iconName="minus"
            text="Decrement"
            onPress={counterStore!.decrement}
            backgroundColor="red"
          />
        </Card>
      </View>
    );
  }
}