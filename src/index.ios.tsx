import * as React from 'react';
import { AppRegistry } from 'react-native';
import { observer, Provider } from 'mobx-react';
import createMobxStores from './helpers/createMobxStores';
import Router from './Router';
interface Props {}

interface State {}

const stores = createMobxStores();

@observer
export default class RnTsMobxBoiler extends React.Component<Props, State> {
  render() {
    return (
      <Provider {...stores} >
        <Router />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('RnTsMobxBoiler', () => RnTsMobxBoiler);
