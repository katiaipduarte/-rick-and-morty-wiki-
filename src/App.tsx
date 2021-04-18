import React, { useEffect } from 'react';
import CharacterList from './components/CharacterList/CharacterList';
import Filters from './components/Filters/Filters';
import Search from './components/Search/Search';
import ApiProvider from './lib/api-provider';

const App = () => {
  const { getCharacters } = ApiProvider();

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <Search />
      <main>
        <Filters />
        <CharacterList />
      </main>
    </>
  );
};

export default App;
