import React from 'react';
import {
  Image,
  Linking,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
  titleStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
};

const AlbumDetail = ({ album }) => (
  <Card>
    <CardSection>
      <View style={styles.thumnailContainerStyle}>
        <Image
          style={styles.thumbnailStyle}
          source={{ uri: album.thumbnail_image }}
        />
      </View>
      <View style={styles.headerContentStyle}>
        <Text style={styles.titleStyle}>{album.title}</Text>
        <Text>{album.artist}</Text>
      </View>
    </CardSection>
    <CardSection>
      <Image
        style={styles.imageStyle}
        source={{ uri: album.image }}
      />
    </CardSection>
    <CardSection>
      <Button onPress={() => Linking.openURL(album.url)}>
        Buy Now
      </Button>
    </CardSection>
  </Card>
);

AlbumDetail.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    thumbnail_image: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlbumDetail;
