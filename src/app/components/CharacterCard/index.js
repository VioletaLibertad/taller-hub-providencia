import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Left, Card, CardItem, Text, Body } from 'native-base';
import { CHARACTER_DETAIL } from '../../../constants/routes';
import styles from './styles';

const CharacterCard = ({ character: { name, status, image, id } }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(CHARACTER_DETAIL, {id: id})} style={styles.card}>
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{name}</Text>
              <Text note>{status}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: `${image}`}} style={styles.image} resizeMode='cover'/>
        </CardItem>
      </Card>
    </TouchableOpacity>
  )
};

export default CharacterCard;