import * as React from 'react';
import { View, ViewStyle, ActivityIndicator } from 'react-native';

interface Props {
  size?: string;
}

const Spinner: React.SFC<Props> = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={(size as any) || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  } as ViewStyle
};

export { Spinner };
