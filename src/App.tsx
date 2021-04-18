import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CharacterList from './components/CharacterList/CharacterList';
import Modal from './components/Modal/Modal';
import Search from './components/Search/Search';
import ApiProvider from './lib/api-provider';
import { GlobalState } from './store/store';

const App = () => {
  const isOpen = useSelector((state: GlobalState) => state.charactersState).modalStatus;
  const { getCharacters } = ApiProvider();

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      {isOpen ? <Modal /> : null}

      <Search />
      <main>
        {/* <Filters /> */}
        <CharacterList />
      </main>
    </>
  );
};

export default App;
