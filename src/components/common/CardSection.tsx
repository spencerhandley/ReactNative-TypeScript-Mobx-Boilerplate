import * as React from 'react';
import { View, ViewStyle } from 'react-native';

interface Props {
    children?: any,
    style?: ViewStyle
}

const CardSection: React.SFC<Props>  = (props: Props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  } as ViewStyle
};

export { CardSection };
