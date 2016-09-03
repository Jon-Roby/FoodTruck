/* @flow */

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class Scene2 extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          Welcome to Scene 2
        </Text>
      </View>
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

export default Scene2;
