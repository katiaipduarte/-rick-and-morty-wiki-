import React, { useEffect, useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalContainer } from './Modal.style';
import { useDispatch, useSelector } from 'react-redux';
import { modalStatus, selectCharacter } from '../../store/characters/action';
import { GlobalState } from '../../store/store';
import { Character } from '../../interfaces/character';
import ApiProvider from '../../lib/api-provider';
import { EpisodeInformation } from '../../interfaces/episode-information';

const Modal = (): JSX.Element => {
  const dispatch = useDispatch();
  const { getEpisodeInformation } = ApiProvider();
  const [character, setCharacter] = useState<Character>();
  const [episode, setEpisode] = useState<EpisodeInformation>();
  const store = useSelector((state: GlobalState) => state.charactersState);

  useEffect(() => {
    const found = store.response.results.find((i) => i.id === store.selected);

    if (found) {
      if (found.episode.length > 0) {
        getEpisodeInformation(found.episode[0]).then((res) => {
          setEpisode(res);
        });
      }
      setCharacter(found);
    }
  }, [store.selected]);

  const handleClick = (): void => {
    dispatch(modalStatus(false));
    dispatch(selectCharacter(0));
  };

  const renderEpisodeInformation = (): JSX.Element => {
    return (
      <>
        <li>
          <strong>First episode:</strong> {episode?.name}
        </li>
        <li>
          <strong>Episode Number:</strong> {episode?.episode}
        </li>
        <li>
          <strong>Air date:</strong> {episode?.air_date}
        </li>
      </>
    );
  };

  return (
    <ModalContainer>
      <div className="content">
        <span className="close" onClick={() => handleClick()}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        {character !== undefined && (
          <div className="profile">
            <img src={character.image} alt={character.name} />
            <div className="profile-details">
              <h1>Character Details</h1>
              <ul>
                <li>
                  <strong>Name:</strong> {character.name}
                </li>
                <li>
                  <strong>Status:</strong> {character.status}
                </li>
                <li>
                  <strong>Gender:</strong> {character.gender}
                </li>
                <li>
                  <strong>Species:</strong> {character.species}
                </li>
                <li>
                  <strong>Location:</strong> {character.location?.name}
                </li>
                <li>
                  <strong>Originally From:</strong> {character.origin?.name}
                </li>
                <li>
                  <strong>Episodes Count:</strong> {character.episode.length}
                </li>
                {episode !== undefined && renderEpisodeInformation()}
              </ul>
            </div>
          </div>
        )}
      </div>
    </ModalContainer>
  );
};

export default Modal;
