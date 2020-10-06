import { StyleSheet } from 'react-native';
import { beauBlue } from '../../../../../constants/colors';


const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: beauBlue
  },
  card_characterDetail: {
    flex: 1,
    alignSelf: 'center',
    width: '90%',
    marginTop: 10,
    marginBottom: 30,
    padding: 10,
  },
  card_imgContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 10
  },
  image: {
    flex: 2,
    height: 400,
    width: '100%',
  },
  text: {
    flex: 1,
    flexWrap: 'wrap'
  }
})

export default styles;
