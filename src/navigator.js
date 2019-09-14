
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createSwitchNavigator, createDrawerNavigator, createAppContainer,
  DrawerItems
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { Image, TouchableOpacity } from 'react-native';
import Home from './home';
import Videoplay from './video';
import Videolist from './videolist';



const RootStack = createStackNavigator({
    Videoplay:{
        screen:Videoplay
    },
    Videolist:{
        screen:Videolist
    }
  },
  {
    initialRouteName: 'Videolist',
  }
);

const SwitchNavigator = createSwitchNavigator({
    Home: {
      screen: Home
    },
    rst:{
        screen:RootStack
    }
  },
  
    {
      initialRouteName: 'Home',
    });


const Navigator = createAppContainer(SwitchNavigator);

export default Navigator;
