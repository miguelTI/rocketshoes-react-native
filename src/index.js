import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import NavigationService from './services/navigation';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </>
  );
}
