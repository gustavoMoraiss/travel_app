import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    marginRight: 8,
    padding: 4,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 15,
  },
  image: {
    width: (width - 96) / 2,
    height: 120,
    borderRadius: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 12,
    color: '#000000',
    marginLeft: 6,
  },
  subTitle: {
    fontSize: 10,
    fontWeight: '400',
    color: 'rgba(0,0,0,0.5)',
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 6,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 12,
    marginLeft: 6,
    marginTop: 4,
  },
});

export default styles;
