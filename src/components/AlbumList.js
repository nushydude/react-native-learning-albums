import React, { Component } from 'react';
import {
  Text,
  ScrollView,
} from 'react-native';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: null,
      albumsError: null,
    };
  }

  componentDidMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      }
      throw new Error(`Received status code ${res.status}`);
    })
    .then((albums) => {
      this.setState({
        albums,
        albumsError: null,
      });
    })
    .catch((e) => {
      this.setState({
        albums: null,
        albumsError: e.message,
      });
    });
  }

  render() {
    const { albums, albumsError } = this.state;

    if (albumsError) {
      return <Text>{albumsError}</Text>;
    } else if (!albumsError && !albums) {
      return <Text>Loading albums...</Text>;
    }

    return (
      <ScrollView>
        {
          albums.map(album => (
            <AlbumDetail key={album.title} album={album} />
          ))
        }
      </ScrollView>
    );
  }
}

export default AlbumList;
