import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

const Gallery = ({route, navigation}) => {
  const {images} = route?.params || {};

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          style={{marginBottom: 24, paddingHorizontal: 24}}
          data={images}
          renderItem={({item}) => (
            <Image source={{uri: item}} style={styles.image} />
          )}
        />
        <TouchableOpacity onPress={onBackPress} style={styles.backContainer}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Gallery);
