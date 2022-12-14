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
  title: {
    color: '#000',
    width: 300,
  },
  city: {
    fontSize: 20,
    color: '#000',
    fontWeight: '400',
    marginTop: 8,
  },
  price: {
    color: '#000',
    marginLeft: -32,
  },
  headerContainer: {
    marginVertical: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoCardText: {
    color: '#000000',
  },
  containerMapView: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 24,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapView: {
    flex: 1,
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  mapText: {
    fontWeight: 'bold',
    color: '#4681A3',
    fontSize: 16,
    textAlign: 'center',
    padding: 16,
  },
});

export default styles;
