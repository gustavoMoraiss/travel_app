import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import InfoCard from '../../components/InfoCard';
import MapView, {Marker} from 'react-native-maps';
import {ScrollView} from 'react-native-gesture-handler';
import Share from 'react-native-share';

const AttractionsDetails = ({route, navigation}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;
  const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
  const diffImages = item?.images?.length - slicedImages?.length;

  const coords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  };

  const onBack = () => {
    navigation.goBack();
  };

  const onGalleryNavigation = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };

  const onMapScreenNavigation = () => {
    navigation.navigate('MapScreen', {coords: coords, item: item});
  };

  const onShare = () => {
    Share.open({
      title: item?.name,
      message: 'Hey, i want to share this amazing Atraction',
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.mainImage}
          imageStyle={{borderRadius: 20}}
          source={{uri: mainImage}}>
          <View style={styles.header}>
            <Pressable hitSlop={8} onPress={onBack}>
              <Image
                style={styles.icon}
                source={require('../../assets/back.png')}
              />
            </Pressable>
            <Pressable hitSlop={8} onPress={onShare}>
              <Image
                style={styles.icon}
                source={require('../../assets/share.png')}
              />
            </Pressable>
          </View>
          <Pressable onPress={onGalleryNavigation} style={styles.footer}>
            {slicedImages?.map((image, index) => (
              <View key={image}>
                <Image source={{uri: image}} style={styles.miniImage} />
                {diffImages > 0 && index === slicedImages?.length - 1 ? (
                  <View style={styles.moreImagesContainer}>
                    <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                  </View>
                ) : null}
              </View>
            ))}
          </Pressable>
        </ImageBackground>
        <View style={styles.headerContainer}>
          <View style={styles.textContainer}>
            <Title style={styles.title} text={item?.name} />
            <Text style={styles.city}>{item?.city}</Text>
          </View>
          <Title style={styles.price} text={item?.entry_price} />
        </View>
        <InfoCard
          style={styles.infoCardText}
          icon={require('../../assets/location_circle.png')}
          text={item?.address}
        />
        <InfoCard
          style={styles.infoCardText}
          icon={require('../../assets/schedule.png')}
          text={`Open\n${item?.opening_time} - ${item?.closing_time}`}
        />
        <View style={styles.containerMapView}>
          <MapView style={styles.mapView} initialRegion={coords}>
            <Marker coordinate={coords} title={item?.title} />
          </MapView>
        </View>
        <Text style={styles.mapText} onPress={onMapScreenNavigation}>
          Show full screen map
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(AttractionsDetails);
