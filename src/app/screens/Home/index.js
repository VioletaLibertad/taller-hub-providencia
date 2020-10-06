import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { fetchCharacters } from '../../../services/api';
import { Container, Content, Spinner } from 'native-base';
import CharacterCard from '../../components/CharacterCard';
import styles from './styles';

function Home() {
  const [allCharacters, setAllCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCharacters()
  }, [])

  const getCharacters = async () => {
    setLoading(true)
    let data = await fetchCharacters();
    setAllCharacters(data.results)
    setLoading(false)
  }

  const renderItem = ({ item }) => <CharacterCard character={item} />

  return (
    <Container style={styles.container}>
      {loading 
        ? <Spinner color='blue' /> 
        : <FlatList
            data={allCharacters}
            renderItem={renderItem}
          />
      }
    </Container>
  );
}

export default Home;