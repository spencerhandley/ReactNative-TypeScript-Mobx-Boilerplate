import * as React from 'react';
import {  View } from 'react-native';
import { Button } from 'react-native-elements';

interface Props {
  text: string;
  iconName: string;
  onPress: Function;
  backgroundColor?: string;
}

export default class CounterButton extends React.Component<Props, {}> {
  constructor(props: Props, context: any) {
    super(props, context);
  }

  render() {
    return (
      <View style={{alignContent: 'center', justifyContent: 'center'}}>
        <Button 
          onPress={() => this.props.onPress()}
          raised
          icon={{name: this.props.iconName, size: 32, type: 'font-awesome'}}
          buttonStyle={{backgroundColor: this.props.backgroundColor || 'blue', borderRadius: 15, alignSelf: 'center'}}
          textStyle={{textAlign: 'center'}}
          title={this.props.text}
          containerViewStyle={{margin: 5}}
          >
        </Button>
      </View>
    );
  }
}
