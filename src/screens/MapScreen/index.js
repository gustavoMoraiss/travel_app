import React from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import styles from './styles';

const MapScreen = ({navigation, route}) => {
  const {coords, item} = route?.params || {};

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.mapView} initialRegion={coords}>
        <Marker coordinate={coords} title={item?.title} />
      </MapView>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{`${item?.name}, ${item?.city}`}</Text>
      </View>
    </View>
  );
};

export default React.memo(MapScreen);
