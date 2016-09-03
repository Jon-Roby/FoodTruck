/* @flow */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import Scene1 from './scene1';
import Scene2 from './scene2';

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="scene1" component={Scene1} title="Scene 1" initial={true} />
          <Scene key="scene2" component={Scene2} title="Scene 2" />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
