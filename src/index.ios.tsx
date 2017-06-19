import * as React from 'react';
import { AppRegistry } from 'react-native';
import { observer, Provider } from 'mobx-react';
import { SideMenu } from 'react-native-elements';
import MenuComponent from './components/MenuComponent';
import createMobxStores from './helpers/createMobxStores';
import Router from './Router';
interface Props {}

interface State {}

const stores = createMobxStores();

@observer
export default class RnTsMobxBoiler extends React.Component<Props, State> {
  render() {
    return (
      <Provider {...stores}>
        <SideMenu isOpen={stores.sidebarStore.isOpen} menu={MenuComponent}>
          <Router />
        </SideMenu>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('RnTsMobxBoiler', () => RnTsMobxBoiler);
