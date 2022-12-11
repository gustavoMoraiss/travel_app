import React, { useState } from 'react';
import {SafeAreaView, View} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';

const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState('Ally')

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={{fontWeight: 'normal'}} />
        <Title text="you want to go" />
        <Title text="Explore Attractions" style={styles.subtitle} />
        <Categories
          selectedCategory={selectedCategory}
          onCategoryPress={setSelectedCategory}
          categories={[
            'All',
            'Popular',
            'Recomended',
            'Most Viewed',
            'Most visited',
            'Hot',
            'Nice',
            'Festival',
            'World',
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
