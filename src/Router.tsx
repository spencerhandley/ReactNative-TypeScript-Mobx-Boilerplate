import * as React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Counter from './components/Counter';
import { inject, observer } from 'mobx-react';

import { Stores } from './stores/types';
import SideBarStore from './stores/SideBarStore';

interface StoresForComponent {
  sidebarStore?: SideBarStore;
}

interface Props extends StoresForComponent {}

@inject((stores: Stores): Props => ({ sidebarStore: stores.sidebarStore }))
@observer
export default class RouterComponent extends React.Component<Props, {}> {
  render() {
    return (
      <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene
          leftTitle="SideBar"
          onLeft={() => this.props.sidebarStore!.toggleSideMenu()}
          key="home"
        >
          <Scene key="counter" component={Counter} title="Counter" />
        </Scene>
      </Router>
    );
  }
}
