import axios, { AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import { CharacterResponse } from '../interfaces/character-response';
import { updateData } from '../store/characters/action';

const ApiProvider = () => {
  const API_KEY = process.env.REACT_APP_API || '';
  const dispatch = useDispatch();

  const getCharacters = async (searchTerm = ''): Promise<CharacterResponse> => {
    console.log('updating search', searchTerm);

    const response = await axios
      .get(`${API_KEY}/character/`, {
        params: {
          name: searchTerm,
        },
      })
      .then((res: AxiosResponse<any>) => {
        console.log(`Status: ${res.status}`);
        dispatch(updateData(res.data));
        return res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    return response;
  };

  return {
    getCharacters,
  };
};

export default ApiProvider;
