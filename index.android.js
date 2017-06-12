import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import AlbumList from './src/components/AlbumList';
import Header from './src/components/Header';

const Albums = () => (
  <View style={{ flex: 1 } /* needed for iOS for scrolling */ }>
    <Header title="Albums" />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => Albums);
