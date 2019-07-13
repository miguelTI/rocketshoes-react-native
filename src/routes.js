import { createAppContainer, createStackNavigator } from 'react-navigation';
import React from 'react';

import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: '#141419',
      },
    }
  )
);

export default Routes;
