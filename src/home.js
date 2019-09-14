/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Splash from './splash';
import Videoplay from './video';
import Videolist from './videolist';

class Home extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = { currentScreen: 'Splash' };
    console.log('Start doing some tasks for about 3 seconds');
    console.log(this.props.navigation);
    setTimeout(() => {
      console.log('Done some tasks for about 3 seconds');
      this.setState({ currentScreen: 'videoplay' });
    }, 2000);
  }
  render() {
    const { currentScreen } = this.state;
    const mainScreen = currentScreen === 'Splash' ? <Splash /> : this.props.navigation.navigate('Videolist');
    return (mainScreen);
  }
}

export default Home;
