import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Card, CardItem, Text, H1 } from 'native-base';
import styles from './styles';

const CharacterDetailCard = ({ character }) => {

  return (
    <ScrollView style={styles.scrollview}>
      <Card style={styles.card_characterDetail}>
        <CardItem header>
          <H1 style={styles.text}>{character.name}</H1>
        </CardItem>
        <CardItem>
          <Text>Status: </Text>
          <Text style={styles.text}>{character.status}</Text>
        </CardItem>
        <CardItem>
          <Text>Species: </Text>
          <Text style={styles.text}>{character.species}</Text>
        </CardItem>
        <CardItem>
          <Text>Gender: </Text>
          <Text style={styles.text}>{character.gender}</Text>
        </CardItem>
        <CardItem>
          <Text>Origin: </Text>
          <Text style={styles.text}>{character.origin.name}</Text>
        </CardItem>
        <CardItem>
          <Text>Location: </Text>
          <Text style={styles.text}>{character.location.name}</Text>
        </CardItem>
        <CardItem cardBody style={styles.card_imgContainer}>
          <Image source={{uri: `${character.image}`}} style={styles.image} resizeMode='cover'/>
        </CardItem>
      </Card>
    </ScrollView>
  )
};

export default CharacterDetailCard;