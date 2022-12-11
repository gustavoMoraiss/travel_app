import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainImage: {
    width: '100%',
    height: height / 2,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    margin: 32,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 36,
    height: 36,
    margin: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba( 256, 256, 256, 0.35)',
    margin: 16,
    paddingHorizontal: 8,
  },
  miniImage: {
    width: 40,
    height: 40,
    margin: 8,
    borderRadius: 10,
  },
  moreImages: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  moreImagesContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.38)',
    width: 40,
    height: 40,
    margin: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
