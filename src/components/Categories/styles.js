import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 2,
  },
  selectedItem: {
    color: '#000000',
  },
  itemContainer: {
    marginVertical: 14,
    marginRight: 12,
  },
  selectedItemContainer: {
    borderBottomColor: '#4681A3',
    borderBottomWidth: 1,
  },
  flatList: {
    marginRight: -32,
  },
});

export default styles;
