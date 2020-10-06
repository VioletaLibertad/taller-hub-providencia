import React, { useEffect, useState } from 'react';
import { fetchSingleCharacter } from '../../../services/api';
import { Spinner } from 'native-base';
import CharacterDetailCard from './components/CharacterDetailCard';

const CharacterDetail = ({ route }) => {
  const { id } = route.params;

  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleCharacter()
  }, []);

  const getSingleCharacter = async () => {
    setLoading(true);
    let data = await fetchSingleCharacter(id);
    setCharacter(data);
    setLoading(false);
  };

  return (
    <>
      {loading 
        ? <Spinner color='blue' /> 
        : <CharacterDetailCard character={character} />
        }
    </>
  )
};

export default CharacterDetail;