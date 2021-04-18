import axios, { AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import { CharacterResponse } from '../interfaces/character-response';
import { EpisodeInformation } from '../interfaces/episode-information';
import { updateData } from '../store/characters/action';

const ApiProvider = () => {
  const API_KEY = process.env.REACT_APP_API || '';
  const dispatch = useDispatch();

  const getCharacters = async (searchTerm = '', page = 1): Promise<void> => {
    console.log('updating search', searchTerm);

    await axios
      .get(`${API_KEY}/character/`, {
        params: {
          name: searchTerm,
          page: page,
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
  };

  const getEpisodeInformation = async (url: string): Promise<EpisodeInformation> => {
    const response = await axios
      .get(`${url}`)
      .then((res: AxiosResponse<any>) => {
        console.log(`Status: ${res.status}`);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    return response;
  };

  return {
    getCharacters,
    getEpisodeInformation,
  };
};

export default ApiProvider;
