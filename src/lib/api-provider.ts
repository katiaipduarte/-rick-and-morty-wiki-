import axios from 'axios';

const ApiProvider = () => {
  const API_KEY = process.env.REACT_APP_API || '';

  const getCharacters = async (searchTerm: string) => {
    console.log('updating search', searchTerm);

    const response = await axios.get(API_KEY, {
      params: {
        q: searchTerm,
      },
    });
    console.log(response);
  };

  return {
    getCharacters,
  };
};

export default ApiProvider;
