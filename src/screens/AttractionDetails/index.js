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

const AttractionsDetails = ({route, navigation}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;
  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.mainImage}
        imageStyle={{borderRadius: 20}}
        source={{uri: mainImage}}>
        <View style={styles.header}>
          <Pressable onPress={onBack}>
            <Image
              style={styles.icon}
              source={require('../../assets/back.png')}
            />
          </Pressable>
          <Pressable>
            <Image
              style={styles.icon}
              source={require('../../assets/share.png')}
            />
          </Pressable>
        </View>
        <View style={styles.footer}>
          {item?.images?.length
            ? item?.images?.map(image => (
                <Image
                  key={image}
                  source={{uri: image}}
                  style={styles.miniImage}></Image>
              ))
            : null}
        </View>
      </ImageBackground>

      <Text>{item?.name}</Text>
    </SafeAreaView>
  );
};

export default React.memo(AttractionsDetails);
