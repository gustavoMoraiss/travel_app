import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const AttractionCard = ({imageSrc, title, subTitle, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/location.png')}
        />
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(AttractionCard);
