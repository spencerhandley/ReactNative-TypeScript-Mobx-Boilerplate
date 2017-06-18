import * as React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import Counter from './components/Counter';
import { observer } from 'mobx-react';

import { Provider } from 'mobx-react';

import createMobxStores from './helpers/createMobxStores';

interface Props {}

interface State {}

const stores = createMobxStores();

@observer
export default class RnTsMobxBoiler extends React.Component<Props, State> {
  render() {
    return (
      <Provider {...stores} >
        <View style={styles.container}>
          <Counter />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});

AppRegistry.registerComponent('RnTsMobxBoiler', () => RnTsMobxBoiler);
