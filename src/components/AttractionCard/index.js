import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const AttractionCard = ({imageSrc, title, subTitle}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/location.png')}
        />
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default React.memo(AttractionCard);
