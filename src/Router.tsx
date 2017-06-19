import * as React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Counter from './components/Counter';

const RouterComponent = (): JSX.Element => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="home" >
                <Scene key="counter" component={Counter} title="Counter" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;