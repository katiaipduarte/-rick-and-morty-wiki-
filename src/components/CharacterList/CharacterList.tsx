import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Character } from '../../interfaces/character';
import { Info } from '../../interfaces/info';
import { GlobalState } from '../../store/store';
import Pagination from '../Pagination/Pagination';
import { CharacterListContainer } from './CharacterList.style';

const CharacterList = (): JSX.Element => {
  const store = useSelector((state: GlobalState) => state.charactersState);

  const [list, setList] = useState<Character[]>([]);
  const [pagination, setPagination] = useState<Info>();

  useEffect(() => {
    setList(store.results);
    setPagination(store.info);
  }, [store]);

  return (
    <CharacterListContainer>
      {list.map((item: Character, i: number) => {
        return (
          <article key={i}>
            <img src={item.image} alt={item.name} />

            <div>
              <p>{item.species}</p>
              <h1>{item.name}</h1>
            </div>
          </article>
        );
      })}
      {pagination !== undefined && <Pagination pagination={pagination} />}
    </CharacterListContainer>
  );
};

export default memo(CharacterList);
