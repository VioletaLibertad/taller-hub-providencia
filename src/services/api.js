// Get All characters

const baseUrl = 'https://rickandmortyapi.com/api/';

export const fetchCharacters = async () => {

  try {
    const response = await fetch(`${baseUrl}character`)
    if (response.ok) {
      const data = await response.json();
      return data
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export const fetchSingleCharacter = async (id) => {

  try {
    const response = await fetch(`${baseUrl}character/${id.toString()}`)
    if (response.ok) {
      const data = await response.json();
      return data
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}