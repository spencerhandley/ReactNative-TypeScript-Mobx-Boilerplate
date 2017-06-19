import * as React from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import MenuItem from '../models/MenuItem';
interface Props {}

interface State {}

const list = new Array<MenuItem>();
list.push(new MenuItem('Counter', 'The counter component'));

export default class MenuComponent extends React.Component<Props, State> {
  constructor(props: Props, context: any) {
    super(props, context);
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 50, backgroundColor: '#ededed' }}>
        <List containerStyle={{ marginBottom: 20 }}>
          {list.map((item, index) => {
            <ListItem
              onPress={() => console.log('pressed')}
              key={index}
              title={item.title}
              subtitle={item.subtitle}
            />;
          })}
        </List>
      </View>
    );
  }
}
