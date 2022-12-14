import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    width: '100%',
    height: '100%',
  },
  header: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    flex: 1,
    alignItems: 'center',
    width: width - 48,
    margin: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginStart: 15,
  },
  backIcon: {
    width: 50,
    height: 50,
  },
});

export default styles;
