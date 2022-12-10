import React, { useEffect, useState } from 'react';
import {SafeAreaView, View} from 'react-native';
import Title from '../../components/Title';
import TitleClass from '../../components/Title/classComponent';

const Home = () => {

  const [title, setTitle] = useState('initial title')

  useEffect(()=> {
    setTimeout(() => {
      setTitle('updated title after timeout')
    }, 3000)
  }, [])

  return (
    <SafeAreaView>
      <View>
        <Title text={title} />
        <Title />
        <TitleClass text='teste'/>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
