import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import HowMuch from '../screens/first'
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Order from '../screens/order';
import ScannerPage from '../screens/scanner';
import TablePlanPage from '../screens/tablePlan';
import ThanksPage from '../screens/Thanks';
import TablePage from '../screens/table'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HowMuch,
    Scanner: ScannerPage,
    Thanks: ThanksPage
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Customer',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    TablePlan: TablePlanPage,
    Table: TablePage,
    Menu: Order
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Waiter/Waitress',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';
/*
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';
*/
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  //SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
