import * as React from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import MenuItem from '../models/MenuItem';

const getListItems = ():MenuItem[] => {
    let list = new Array<MenuItem>();
    list.push(new MenuItem('Counter', 'Count up and down...'));
    return list;
}

const getMenuItems = () => {
  const listItems = getListItems().map((item, index) => {
      return <ListItem
        onPress={() => console.log('pressed')}
        key={index}
        title={item.title}
        subtitle={item.subtitle}
      />;
    });
    console.log(listItems);

    return (
      <View style={{ flex: 1, paddingTop: 50, backgroundColor: '#ededed' }}>
        <List containerStyle={{ marginBottom: 20 }}>
          {listItems}
        </List>
      </View>
    );
}

export default getMenuItems;