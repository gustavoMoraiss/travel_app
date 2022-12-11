import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const AttractionsDetails = ({route, navigation}) => {
  const {item} = route?.params || {};

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Text onPress={onBack} style={{margin: 40}}>
        Bakc to the last Screen
      </Text>
      <Text>{item?.name}</Text>
    </SafeAreaView>
  );
};

export default React.memo(AttractionsDetails);
