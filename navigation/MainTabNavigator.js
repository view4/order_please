import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HowMuch from '../screens/first'
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
        'person-add'
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
    <TabBarIcon focused={focused} name={'restaurant-menu'} />
  ),
};

LinksStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
});

tabNavigator.path = '';

export default tabNavigator;
