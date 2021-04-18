import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Character } from '../../interfaces/character';
import { Info } from '../../interfaces/info';
import { modalStatus, selectCharacter } from '../../store/characters/action';
import { GlobalState } from '../../store/store';
import Modal from '../Modal/Modal';
import Pagination from '../Pagination/Pagination';
import { CharacterListContainer } from './CharacterList.style';

const CharacterList = (): JSX.Element => {
  const store = useSelector((state: GlobalState) => state.charactersState).response;
  const dispatch = useDispatch();

  const [list, setList] = useState<Character[]>([]);
  const [pagination, setPagination] = useState<Info>();

  useEffect(() => {
    setList(store.results);
    setPagination(store.info);
  }, [store]);

  const getStatusColor = (status: string): string => {
    let color = '';

    switch (status) {
      case 'Alive':
        color = 'green';
        break;
      case 'Dead':
        color = 'red';
        break;
    }

    return color;
  };

  const handleClick = (id: number): void => {
    dispatch(selectCharacter(id));
    dispatch(modalStatus(true));
  };

  return (
    <CharacterListContainer>
      {list.map((item: Character, i: number) => {
        return (
          <article key={i} onClick={() => handleClick(item.id)}>
            <img src={item.image} alt={item.name} />

            <div>
              <p className="species">{item.species}</p>
              <h4>{item.name}</h4>
              <p className="description">
                <span style={{ color: getStatusColor(item.status) }} className="status">
                  {item.status}
                </span>
                <br />
                <span>{item.location.name}</span>
                <br />
                <span>Appears on {item.episode.length} episodes</span>
              </p>
            </div>
          </article>
        );
      })}
      {/* {pagination !== undefined && <Pagination pagination={pagination} />} */}
    </CharacterListContainer>
  );
};

export default memo(CharacterList);
