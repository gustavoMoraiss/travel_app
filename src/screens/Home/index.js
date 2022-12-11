import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View, Text} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attractions.json';
import jsonCategories from '../../data/categories.json';
import {useNavigation} from '@react-navigation/native';

const All = 'All';

const Home = () => {
  const navigation = useNavigation();

  //State
  const [selectedCategory, setSelectedCategory] = useState(All);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (selectedCategory === All) {
      setData(jsonData);
    } else {
      const filteredData = jsonData?.filter(item =>
        item?.categories?.includes(selectedCategory),
      );
      setData(filteredData);
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items found</Text>
        }
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={{flexGrow: 1}}
        ListHeaderComponent={
          <>
            <View style={{margin: 32}}>
              <Title text="Where do" style={{fontWeight: 'normal'}} />
              <Title text="you want to go" />
              <Title text="Explore Attractions" style={styles.subtitle} />
            </View>
            <Categories
              selectedCategory={selectedCategory}
              onCategoryPress={setSelectedCategory}
              categories={[All, ...jsonCategories]}
            />
          </>
        }
        keyExtractor={item => String(item?.id)}
        renderItem={({item, index}) => (
          <AttractionCard
            onPress={() => navigation.navigate('AttractionDetails', {item})}
            key={item.id}
            style={
              index % 2 === 0
                ? {marginRight: 12, marginLeft: 32}
                : {marginRight: 32}
            }
            title={item.name}
            subTitle={item.city}
            imageSrc={item.images?.length ? item.images[0] : null}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
