import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Title = ({text}) => {
  const [stateText, setText] = useState('init');

  useEffect(() => {
    console.log('hello use Effect')
    setText(text)
  }, [text])

  const onTextPress = () => {
    setText('updated state');
  };

  return (
    <Text onPress={onTextPress} style={styles.title}>
      {stateText}
    </Text>
  );
};

Title.defaultProps = {
  text: 'Default Text hereee',
};

export default React.memo(Title);
