import * as React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

interface Props {
  text: string;
  onPress: Function;
}

export default class CounterButton extends React.Component<Props, {}> {
  constructor(props: Props, context: any) {
    super(props, context);
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={() => this.props.onPress()}>
          <Text>
            {this.props.text}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
