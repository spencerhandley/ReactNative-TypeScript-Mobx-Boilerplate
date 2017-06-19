import * as React from 'react';
import { AppRegistry } from 'react-native';
import { observer, Provider } from 'mobx-react';
import { SideMenu } from 'react-native-elements';
import MenuComponent from './components/MenuComponent';
import createMobxStores from './helpers/createMobxStores';
import Router from './Router';

interface Props {}

interface State {
  isOpen: boolean;
}

const stores = createMobxStores();

@observer
export default class RnTsMobxBoiler extends React.Component<Props, State> {
  constructor(props: Props, context: any) {
    super(props, context);

    this.state = {
      isOpen: false
    };
  }

  handleSideBarChange(isOpen: boolean): void {
    if (isOpen) {
      stores.sidebarStore.openSideMenu();
    } else {
      stores.sidebarStore.closeSideMenu();
    }
  }

  render() {
    return (
      <Provider {...stores}>
        <SideMenu
          onChange={(isOpen: boolean) => this.handleSideBarChange(isOpen)}
          isOpen={stores.sidebarStore.isOpen}
          menu={MenuComponent}
        >
          <Router />
        </SideMenu>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('RnTsMobxBoiler', () => RnTsMobxBoiler);
