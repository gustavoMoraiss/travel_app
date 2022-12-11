import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('Ally');

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
        <View style={styles.row}>
          <AttractionCard
            title="Entertainment park"
            subTitle="Rome"
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ac6QK6qIl_UQU5nk783pNxFZIpKoAFDphw&usqp=CAU"
          />
          <AttractionCard
            title="Entertainment park"
            subTitle="Rome"
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ac6QK6qIl_UQU5nk783pNxFZIpKoAFDphw&usqp=CAU"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
