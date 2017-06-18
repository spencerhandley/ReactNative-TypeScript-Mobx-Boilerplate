import * as React from 'react';
import {  View } from 'react-native';
import { Button } from 'react-native-elements';

interface Props {
  text: string;
  iconName: string;
  onPress: Function;
}

export default class CounterButton extends React.Component<Props, {}> {
  constructor(props: Props, context: any) {
    super(props, context);
  }

  render() {
    return (
      <View>
        <Button 
          onPress={() => this.props.onPress()}
          raised
          icon={{name: this.props.iconName, size: 32, type: 'font-awesome'}}
          buttonStyle={{backgroundColor: 'blue', borderRadius: 15}}
          textStyle={{textAlign: 'center'}}
          title={this.props.text}
          containerViewStyle={{margin: 5}}
          >
        </Button>
      </View>
    );
  }
}
